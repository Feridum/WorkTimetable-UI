import { Router, browserHistory } from 'react-router'
import React from 'react'; 
import App from './app.component';
import Calendar from './routes/Calendar/calendar.component'
import Settings from './routes/Settings/settings.component'

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Calendar },
    childRoutes:[
        {path:'/settings', component: Settings}
    ]
}

export default () => (
    <Router history={browserHistory} routes={routes}></Router>
);


