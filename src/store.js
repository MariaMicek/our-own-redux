import { createStore, combineReducers } from './redux'
import users, {setUsersActionCreator} from './state/users'
import  events, {setEventsActionCreator}from './state/events'

const rootReducer = combineReducers({
    users: users,
    events: events,
}) 

const store = createStore(rootReducer)

store.dispatch(setUsersActionCreator(['marysia', 'basia']))
store.dispatch(setEventsActionCreator(['event1', 'event2']))

console.log(store.getState())
