import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects'


function fetchGetEvents(){
    return fetch('http://127.0.0.1:5000/api/events',{
       method: 'GET',
   }).then(response => response.json())
     .then(function(data){
       for (var i=0; i<data.length; i++) {
                data[i].start = new Date(data[i].start)
                data[i].end = new Date(data[i].end)
        }

        return data
   })
}

function fetchPostEvent(data){
console.log(data)
     return fetch('http://127.0.0.1:5000/api/events',{
       method: 'POST',
       headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
       body: data
   }).then(response=>response.json())
}

function* getEvents() {
    console.log('saga get events')
    try{
        const events = yield call(fetchGetEvents);
        console.log(events)
        yield put({ type: 'GET_EVENTS_SUCCESS', events:events  })
    }catch(e){
         yield put({ type: 'GET_EVENTS_FAILURE', message:e.message  })
    }
}


function* addEvent(action){
    console.log(action)
    let data = {
        "title":action.description.toString(),
        "start":new Date(action.start_date),
        "end":new Date(action.end_date)
    }

    try{
       const resp = yield call(fetchPostEvent,JSON.stringify(data));
       console.log(resp)
         yield put({ type: 'ADD_EVENT_SUCCESS', data  })
    }catch(e){
            console.log(e)
    }
}

export function* getEventsAsync() {
  yield takeEvery('GET_EVENTS_ASYNC', getEvents)
}

export function* addEventAsync() {
  yield takeEvery('ADD_EVENT_ASYNC', addEvent)
}