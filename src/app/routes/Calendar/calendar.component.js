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

componentWillMount(){
    console.log('willMount')
    console.log(this.props)
    this.props.getEvents();
}
    onViewChange = (event) => {
        if (event === 'week') {
           this.setState({selectable:true})
        } else {
            this.setState({selectable:false})
        }
    
    };

    render() {
        const { calendar, onAddEvent } = this.props
        console.log(calendar)
        return (
            <div className="calendar">
                <BigCalendar
                    ref='calendar'
                    selectable={this.state.selectable}
                    defaultView='week'
                    onView={this.onViewChange}
                    events={calendar.events}
                    onSelectSlot={(event) => onAddEvent(event)}
                />
            </div>
        )
    }
}


export default Calendar;