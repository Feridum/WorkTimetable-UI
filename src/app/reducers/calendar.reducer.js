const initialState = {events:[], error:null};

const calendar = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_EVENT_SUCCESS': {
            return {
                events:[
                    ...state.events,
                    {
                    'title': action.data.title,
                    'start': action.data.start,
                    'end':action.data.end
                    }
                ],
                error:null
            }

        }
        case 'GET_EVENTS_SUCCESS': {
            console.log(state,action,action.events)
            return{
              events:[...state.events,...action.events],
              error:null
            }    
        }
        default:
            return state;
    }
}


export default calendar;
