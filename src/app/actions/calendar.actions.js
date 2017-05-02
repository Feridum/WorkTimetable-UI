
export const addEvent = (newEvent) => {
  console.log(newEvent)
  return {
    type: 'ADD_EVENT_ASYNC',
    description: Math.abs(newEvent.end -newEvent.start) / 36e5,
    start_date: newEvent.start.toUTCString(),
    end_date: newEvent.end.toUTCString()
  }
}


export const getEvents = () => {
  console.log('get events')
  return {
    type: 'GET_EVENTS_ASYNC'
  }
}