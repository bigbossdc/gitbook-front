import React, { Component } from "react";

import './MainCalendar.scss';
import MyToDoScheduleDialog from './MyToDoScheduleDialog';
import MyRepoScheduleDialog from './MyRepoScheduleDialog';


const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const DAYS_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default class MainCalendar extends Component {
  constructor(props) {
    super(props);

    const now = new Date();

    this.state = {
      date: now.getDate(),
      month: now.getMonth(),
      today: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      year: now.getFullYear(),
      userid: this.props.match.params.userid,
      openModal: false,
      scheduleOption: false,
      buttonClassName: 'todo',
      checkedToDoListDay: '',
      checkedCommitListDay: '',
      getToDoList: '',
      getRepoList: '',
      deleteInfo: '',
      clickDay: 0,
    };

  }

  handler(list) {
    this.setState({
      getToDoList: this.state.getToDoList.concat(list)
    })
  }

  static isSameDay(a, b) {
    return (
      a &&
      b &&
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  get days() {
    const { month, year } = this.state;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    const offset = new Date(year, month, 1).getDay();
    if (offset < 7) {
      for (let i = 0; i < offset; i++) {
        days.push(null);
      }
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  }

  get weeks() {
    const days = this.days;
    const weeks = [];
    const weekCount = Math.ceil(days.length / 7);
    for (let i = 0; i < weekCount; i++) {
      weeks.push(days.slice(i * 7, (i + 1) * 7));
    }
    return weeks;
  }

  longMonthName(month) {
    if (this.props.monthNames) {
      return this.props.monthNames[month];
    }
    return MONTHS[month];
  }

  longDayName(dayOfWeek) {
    if (this.props.longDayNames) {
      return this.props.longDayNames[dayOfWeek];
    }
    return DAYS_LONG[dayOfWeek];
  }

  shortDayName(dayOfWeek) {
    if (this.props.shortDayNames) {
      return this.props.shortDayNames[dayOfWeek];
    }
    return DAYS_SHORT[dayOfWeek];
  }

  previousMonth() {
    const { month, year } = this.state;

    this.setState({
      month: month !== 0 ? month - 1 : 11,
      year: month !== 0 ? year : year - 1
    });
  };



  nextMonth() {
    const { month, year } = this.state;

    this.setState({
      month: month !== 11 ? month + 1 : 0,
      year: month !== 11 ? year : year + 1
    });
  };

  newAddlist(day, newToDo) {
    
    fetch(`${global.API_URL}/gitbook/Schedule/${this.state.userid}/addToDo/${day}`, {
      method: 'post',
      headers: global.API_HEADERS,
      body: JSON.stringify(newToDo)
    }).then(response => response.json())
      .then(json => {
        this.setState({
          getToDoList: json.data
        });
      }).then( json => {
        this.componentDidMount();
      })
      .catch(err => console.error(err))

      this.renderDay();
  }

  deleteList(day, deleteTarget) {
    fetch(`${global.API_URL}/gitbook/Schedule/${this.state.userid}/delete/${day}`, {
      method: 'post',
      headers: global.API_HEADERS,
      body: JSON.stringify(deleteTarget)
    }).then(response => response.json())
      .then(json => {
        this.setState({
          getToDoList: json.data
        });
      }).then( json => {
        this.componentDidMount();
      })
      .catch(err => console.error(err))

    this.componentDidMount();
    this.renderDay();
  }

  //일 클릭
  onDayClick = day => () => {
    if (day) {
      let newMonth = this.state.month + 1;
      let newDay = day.getDate();

      newMonth = newMonth < 10 ? ('0' + newMonth) : newMonth;
      newDay = newDay < 10 ? ('0' + newDay) : newDay;

      this.setState({
        openModal: true,
        clickDay: day.getDate()
      });

      if (this.state.buttonClassName == 'todo') {
        fetch(`${global.API_URL}/gitbook/Schedule/${this.state.userid}/toDoList/${this.state.year}-${newMonth}-${newDay}`, {
          method: 'get',
          headers: global.API_HEADERS
        })
          .then(response => response.json())
          .then(json => {

            this.setState({
              getToDoList: json.data
            });
          })
          .catch(err => console.error(err));
      }

      else {
        fetch(`${global.API_URL}/gitbook/Schedule/${this.state.userid}/repoList/${this.state.year}-${newMonth}-${newDay}`, {
          method: 'get',
          headers: global.API_HEADERS
        })
          .then(response => response.json())
          .then(json => {

            this.setState({
              getRepoList: json.data
            });
          })
          .catch(err => console.error(err));
      }
    }
    else {
      alert('요일을 클릭하여 스케줄을 확인하세요.')
    }
  };

  handleClose = () => {
    this.setState({
      openModal: false
    });
  }


  renderDay = (day, index) => {
    const { date, month, today, year } = this.state;
    const { active } = this.props;
    const isToday = day && day.valueOf() === today.valueOf();
    const isActive = active && day && MainCalendar.isSameDay(active, day);

    let toCompareMonth = this.state.month + 1;

    (toCompareMonth < 10 ? toCompareMonth = ('0' + toCompareMonth) : toCompareMonth);
     
    const formatDate = this.state.year + '-' + toCompareMonth + '-' + (
      day ? day.getDate() && (day.getDate() < 10 ? '0' + day.getDate() : day.getDate())
        : "")

    return (
      <td
        className={[
          "day",
          isActive ? "active" : null,
          !day ? "empty" : null,
          isToday ? "today" : null
        ]
          .filter(v => v)
          .join(" ")}
        key={`${year}.${month}.day.${index}`}
        onClick={this.onDayClick(day)}
      >
        
        {this.state.buttonClassName == 'todo' ?

          (day ? day.getDate() && (this.state.checkedToDoListDay.includes(formatDate) ?
            <a className='day-a'>{day.getDate()}<br/><i class="fas fa-check" style={{color : '#0fc19e'}}></i></a>
            : day.getDate()) : "")
          :

          (day ? day.getDate() && (this.state.checkedCommitListDay.includes(formatDate) ?
            <a className='day-a'>{day.getDate()}<br /><i class="fas fa-check" style={{color : '#0fc19e'}}></i></a>
            : day.getDate()) : "")

        }
      </td>
    );
  };

  renderWeek = (days, index) => {
    const { month, year } = this.state;

    return (
      <tr style={{ height: "112px" }} key={`${year}.${month}.week.${index}`}>{days.map(this.renderDay)}</tr>
    );
  };

  renderDayHeader(dayOfWeek) {
    return (
      <th scope="col" style={{ width: "80px" }}>
        <abbr title={this.longDayName(dayOfWeek)}>
          {this.shortDayName(dayOfWeek)}
        </abbr>
      </th>
    );
  }

  Todo = () => {
    this.setState({
      scheduleOption: false,
      buttonClassName: "todo"
    });
  }

  Repo = () => {
    this.setState({
      scheduleOption: true,
      buttonClassName: "repo"
    });

    fetch(`${global.API_URL}/gitbook/Schedule/${this.state.userid}/notEmptyCommitList`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          checkedCommitListDay: json.data.map((list) => list.checkDate)
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { month, year } = this.state;
    return (
      <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
      <div className="react-daypicker-root">

        <div className="button-div" >
          <button className={`${this.state.buttonClassName === 'todo' ? 'index-todo-list-todo' : 'index-todo-list'}`} onClick={this.Todo}>TODO</button>
          <button style={{ marginLeft: "10px" }} className={`${this.state.buttonClassName === 'repo' ? 'index-repository-list' : 'index-repository'}`} onClick={this.Repo}>GIT</button>
        </div>

        <div className="header">

          <div className="previous-month" onClick={this.previousMonth.bind(this)}>
            ◀
          </div>

          <div className="month-year">
            {this.longMonthName(month)} {year}
          </div>

          <div className="next-month" onClick={this.nextMonth.bind(this)}>
            ▶
          </div>

        </div>

        <div style={{ padding: 20 }}>
        </div>



        {!this.state.scheduleOption ? (
          //개인스케줄 다이얼로그
          <MyToDoScheduleDialog
            key='todoschedule'
            userid={this.state.userid}
            day={(this.state.clickDay) < 10 ? ('0' + this.state.clickDay) : (this.state.clickDay)}
            month={(this.state.month + 1) < 10 ? ('0' + (this.state.month + 1)) : (this.state.month) + 1}
            year={this.state.year}

            getToDoList={this.state.getToDoList && this.state.getToDoList}

            addlist={this.newAddlist.bind(this)}
            deletelist={this.deleteList.bind(this)}

            openModal={this.state.openModal}
            onClosehandler={this.handleClose.bind(this)}

            test={this.state.today}
          />
        ) :

          //commit 기록들 다이얼로그

          <MyRepoScheduleDialog
            userid={this.state.userid}
            day={(this.state.clickDay) < 10 ? ('0' + this.state.clickDay) : (this.state.clickDay)}
            month={(this.state.month + 1) < 10 ? ('0' + (this.state.month + 1)) : (this.state.month) + 1}
            year={this.state.year}

            getRepoList={this.state.getRepoList && this.state.getRepoList}

            openModal={this.state.openModal}
            onClosehandler={this.handleClose.bind(this)}
          />
        }


        

        <div className='table-border'>
    
          <table className='total-table'>
            <thead style={{ textAlign: "center" }}>
              <tr className='tr'>
                <td className='sunday'>{this.renderDayHeader(0)}</td>
                <td>{this.renderDayHeader(1)}</td>
                <td>{this.renderDayHeader(2)}</td>
                <td>{this.renderDayHeader(3)}</td>
                <td>{this.renderDayHeader(4)}</td>
                <td> {this.renderDayHeader(5)}</td>
                <td className='saturday'> {this.renderDayHeader(6)}</td>
              </tr>
            </thead>
            <tbody>{this.weeks.map(this.renderWeek)}</tbody>
          </table>
        </div>
          
      </div>
      </div>
    );
  }

  componentDidMount() {
    
    fetch(`${global.API_URL}/gitbook/Schedule/${this.state.userid}/notEmptyToDoList`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          checkedToDoListDay: json.data.map((list) => list.checkDate)
        });
      })
      .catch(err => console.error(err));
  }
}
