import App from './app.component';
import CalendarContainer from './routes/Calendar/calendar.container'
import Settings from './routes/Settings/settings.component'

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: CalendarContainer },
    childRoutes:[
        {path:'/settings', component: Settings}
    ]
}

export default routes;


