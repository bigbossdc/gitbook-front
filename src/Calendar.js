import React, { Component } from "react";
import './Calendar.scss';
import CalendarTable from "./CalendarTable";



class Calendar extends Component {

  constructor(props) {
    super(props);

    const now = new Date();

    this.state = {
      thisYear : now.getFullYear(),
      thisMonth : now.getMonth()+1,
      getCommitList: ''
    }
  }

  render() {

    return (
      <div className="Calendar" >

        <div className="body" >

          <div className="row">
            <div className="box">
              <span className="text">SUN</span>
            </div>
            <div className="box">
              <span className="text">MON</span>
            </div>
            <div className="box">
              <span className="text">TUE</span>
            </div>
            <div className="box">
              <span className="text">WED</span>
            </div>
            <div className="box">
              <span className="text">THU</span>
            </div>
            <div className="box">
              <span className="text">FRI</span>
            </div>
            <div className="box">
              <span className="text">SAT</span>
            </div>
          </div>

          <CalendarTable 
            commitList = {this.state.getCommitList}
          />
        </div>
      </div>
    );
  }

componentDidMount(){

   let formatMonth = this.state.thisMonth < 10 ? ('0' + this.state.thisMonth) : this.state.thisMonth;
   let path = this.state.thisYear+'-'+formatMonth  // ex)2020-06

  fetch(`${global.API_URL}/gitbook/Schedule/${this.props.userid}/naviCommitList/${path}`, {
    method: 'get',
    headers: global.API_HEADERS
  })
    .then(response => response.json())
    .then(json => {

      this.setState({
        getCommitList: json.data.map((list) => list.checkDate)
      });
     
    })
    .catch(err => console.error(err));
}


}
export default Calendar;