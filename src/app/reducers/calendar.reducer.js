const calendar = (state =[], action) => {
    switch (action.type) {
        case 'ADD_EVENT': {
            return [
                ...state,
                {
                    'title': action.description,
                    'start': new Date(action.start_date),
                    'end':new Date(action.end_date)
                }
            ]

        }
        default:
            return state;
    }
}


export default calendar;
