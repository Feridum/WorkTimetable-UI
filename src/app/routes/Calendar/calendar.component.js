import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.scss'
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    render() {
        return (
            <div className="calendar">
                <BigCalendar
                    events={[]}
                    startAccessor='startDate'
                    endAccessor='endDate'
                />
            </div>
        )
    }
}


export default Calendar;