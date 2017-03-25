import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.scss'
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {

    constructor() {
        super();
        this.state = {
        selectable : true
        }
    }

    onViewChange = (event) => {
        console.log(event, event !== 'week', this.refs.calendar)
        if (event === 'week') {
           this.setState({selectable:true})
        } else {
            this.setState({selectable:false})
        }
    
    };

    render() {
        const { calendar, onAddEvent } = this.props;
        return (
            <div className="calendar">
                <BigCalendar
                    ref='calendar'
                    selectable={this.state.selectable}
                    defaultView='week'
                    onView={this.onViewChange}
                    events={calendar}
                    onSelectSlot={(event) => onAddEvent(event)}
                />
            </div>
        )
    }
}


export default Calendar;