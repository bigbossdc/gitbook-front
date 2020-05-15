import React, { Component } from "react";

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './MainCalendar.scss'


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
      
      openModal : false,
      scheduleOption : false,

      buttonClassName : "todo",

      checkedDay : 17 //배열로 다뤄서 요일 td로 넣어줘야한다.
    };
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

  previousMonth = () => {
    const { month, year } = this.state;

    this.setState({
      month: month !== 0 ? month - 1 : 11,
      year: month !== 0 ? year : year - 1
    });
  };

  

  nextMonth = () => {
    const { month, year } = this.state;

    this.setState({
      month: month !== 11 ? month + 1 : 0,
      year: month !== 11 ? year : year + 1
    });
  };

  onDayClick = day => () => {
    if (day) {
      console.log(day.getDate());
     
      this.setState({
        openModal : true
      });

      console.log(this.state.openModal);

      this.props.onDayClick(day);

    }
    else{
      alert('요일을 클릭하여 스케줄을 확인하세요.')
    }
  };

  handleClose = () => {
    this.setState({
      openModal : false
    });
  }

  renderDay = (day, index) => {
    const { date, month, today, year } = this.state;
    const { active } = this.props;

    const isToday = day && day.valueOf() === today.valueOf();
    const isActive = active && day && MainCalendar.isSameDay(active, day);

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
        {day ? day.getDate() && (day.getDate() == this.state.checkedDay ? day.getDate()+ "  ●" : day.getDate()) : ""}
      </td>
    );
  };

  renderWeek = (days, index) => {
    const { month, year } = this.state;

    return (
      <tr key={`${year}.${month}.week.${index}`}>{days.map(this.renderDay)}</tr>
    );
  };

  renderDayHeader(dayOfWeek) {
    return (
      <th scope="col">
        <abbr title={this.longDayName(dayOfWeek)}>
          {this.shortDayName(dayOfWeek)}
        </abbr>
      </th>
    );
  }

  Todo = () => {
  
    this.setState({
      scheduleOption : false,
      buttonClassName : "todo"
        });
    console.log(this.state.scheduleOption)
  }

  Repo = () => {
   
    this.setState({
      scheduleOption : true,
      buttonClassName : "repo"
    });
    
    console.log(this.state.scheduleOption)
  }

  render() {
    const { month, year } = this.state;
    return (
      <div className="react-daypicker-root">

          <div className = "button-div" >
                <button className={`${this.state.buttonClassName ==='todo' ? 'index-todo-list-todo' : 'index-todo-list'}`} onClick={this.Todo}>TODO</button>
                <button className={`${this.state.buttonClassName ==='repo' ? 'index-repository-list' : 'index-repository'}`} onClick={this.Repo}>GIT</button>
             </div>

        <div className="header">
          <div className="previous-month" onClick={this.previousMonth}>
            ◀
          </div>
          <div className="month-year">
            {this.longMonthName(month)} {year}
          </div>
          <div className="next-month" onClick={this.nextMonth}>
            ▶
          </div>
        </div>
      
        <div style={{padding:20}}>

        </div>
       

       {!this.state.scheduleOption ? (
       
        //개인스케줄 다이얼로그

       <Dialog open={this.state.openModal} onClose={this.handleClose}>
           
           <DialogContent>
           <div className="modal-body">
           <div className="row">
   
           <div className="col-md-4-modal-meta">
              <div className="modal-meta-top">
          <button onClick={this.handleClose} type="button" className="close" >
            <span aria-hidden="true">개인스케줄(닫기)</span>
            <span className="sr-only">Close</span>
         </button>
   
          <div className="img-poster clearfix">
           <a href=""><img className="img-responsive img-circle" src="assets/img/users/18.jpg" alt="Image"></img></a>
           <strong><a style={{fontSize:25}}>2020-05-14</a></strong>
           <br></br>
           <br/>
           <input className="form-control input-sm" type="text" placeholder="ADD your Schedule..."></input>	
          </div>
         
         
          <ul className="img-comment-list">
           <li>
            <div className="comment-text">
             <strong><a>2020.05.14</a></strong> <a href='#'><span style={{fontWeight:"bold", color:'red', fontSize:12 ,fontFamily: " 'Varela Round', sans-serif"}}>삭제</span></a>
             <p>Hello this is a test comment.</p>
             <span className="date sub-text">on December 5th, 2016</span>
            </div>
           </li>
   
           <li>
            <div className="comment-text">
             <strong><a>2020.05.14</a></strong> <a href='#'><span style={{fontWeight:"bold", color:'red', fontSize:12 ,fontFamily: " 'Varela Round', sans-serif"}}>삭제</span></a>
             <p>칼퇴</p>
             <span className="date sub-text">on December 5th, 2016</span>
            </div>
           </li>
   
           <li>
            <div className="comment-text">
             <strong><a>2020.05.14</a></strong> <a href='#'><span style={{fontWeight:"bold", color:'red', fontSize:12 ,fontFamily: " 'Varela Round', sans-serif"}}>삭제</span></a>
             <p>운동</p>
             <span className="date sub-text">on December 5th, 2016</span>
            </div>
           </li>
           <li>
            <div className="comment-text">
             <strong><a>2020.05.14</a></strong> <a href='#'><span style={{fontWeight:"bold", color:'red', fontSize:12 ,fontFamily: " 'Varela Round', sans-serif"}}>삭제</span></a>
             <p>자살</p>
             <span className="date sub-text">on December 5th, 2016</span>
            </div>
           </li>
           <li>
            <div className="comment-text">
             <strong><a>2020.05.14</a></strong> <a href='#'><span style={{fontWeight:"bold", color:'red', fontSize:12 ,fontFamily: " 'Varela Round', sans-serif"}}>삭제</span></a>
             <p>뭐하지 이제</p>
             <span className="date sub-text">on December 5th, 2016</span>
            </div>
           </li>
          </ul>
          </div>
         </div>
        </div>
       </div>
       </DialogContent>
       
       </Dialog>) : 
       
        //commit 기록들 다이얼로그

       ( <Dialog open={this.state.openModal} onClose={this.handleClose}>
        <DialogContent>
         <div className="modal-body">
        <div className="row">

        <div className="col-md-4-modal-meta">
           <div className="modal-meta-top">
       <button onClick={this.handleClose} type="button" className="close" >
         <span aria-hidden="true">깃스케줄(닫기)</span>
         <span className="sr-only">Close</span>
      </button>

       <div className="img-poster clearfix">
        <a href=""><img className="img-responsive img-circle" src="assets/img/users/18.jpg" alt="Image"></img></a>
        <strong><a style={{fontSize:25}}>2020-05-14</a></strong>
        <br></br>
        <br/>
       </div>
      
      
       <ul className="img-comment-list">
        <li>
         <div className="comment-text">
          <strong><a>2020.05.14</a></strong> 
          <p>커밋기록들 저장하면 되겠다.</p>
          <span className="date sub-text">on December 5th, 2016</span>
         </div>
        </li>
       </ul>
			
       </div>
      </div>
     </div>
    </div>
    </DialogContent>
    </Dialog>
    )}
        
       
          

        <div className = 'table-border'>
        <table className='total-table'>
          <thead>
            <tr className='tr'>
              <td className = 'sunday'>{this.renderDayHeader(0)}</td>
              <td>{this.renderDayHeader(1)}</td>
              <td>{this.renderDayHeader(2)}</td>
              <td>{this.renderDayHeader(3)}</td>
              <td>{this.renderDayHeader(4)}</td>
              <td> {this.renderDayHeader(5)}</td>
              <td className = 'saturday'> {this.renderDayHeader(6)}</td>
            </tr>
          </thead>
          <tbody>{this.weeks.map(this.renderWeek)}</tbody>
        </table>
        </div>
        
      </div>
    );
  }
}