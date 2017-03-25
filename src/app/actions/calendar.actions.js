
export const addEvent = (newEvent) => {
  return {
    type: 'ADD_EVENT',
    description: Math.abs(newEvent.end -newEvent.start) / 36e5,
    start_date: newEvent.start.toUTCString(),
    end_date: newEvent.end.toUTCString()
  }
}
