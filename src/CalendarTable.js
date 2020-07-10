import React, { Component } from "react";
import './Calendar.scss';
import moment from 'moment';



class CalendarTable extends Component {

    render() {

        const today = moment();
        const startWeek = today.clone().startOf('month').week();
        const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

        let calendar = [];

        let commitDays = []

        for (let i = 0; i < this.props.commitList.length; i++) {
            commitDays.push(this.props.commitList[i].slice(this.props.commitList[i].lastIndexOf("-") + 1, this.props.commitList[i].lastIndexOf(' ')));
        }

        for (let week = startWeek; week <= endWeek; week++) {

            calendar.push(
                <div className="row" key={week}>
                    {
                        Array(7).fill(0).map((n, i) => {
                            let current = today.clone().week(week).startOf('week').add(n + i, 'day')
                            let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : ''; //오늘 날짜
                            let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';  //해당 달의 일이 아닌 날짜

                            let formatDay = current.format('D') < 10 ? '0' + current.format('D') : current.format('D')

                            if (isGrayed === 'grayed') {
                                formatDay = ''
                            }

                            return (
                                <div className={`box  ${isSelected} ${isGrayed}`} key={i}>
                                    {(formatDay !== '' && commitDays.includes(formatDay)) ? <span className={'textRepo'}>{formatDay}</span>
                                        :
                                        <span className={'text'} >{formatDay}</span>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            )
        }
        return calendar;
    }



}


export default CalendarTable;