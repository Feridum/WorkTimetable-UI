import { connect } from 'react-redux'
import Calendar from './calendar.component'
import { addEvent,getEvents } from '../../actions/calendar.actions'
const mapStateToProps = (state) => {
  return {
    calendar: state.calendar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEvent: (newEvent) => { dispatch(addEvent(newEvent)) },
    getEvents:() =>dispatch(getEvents()),
  }
}

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default CalendarContainer