import { combineReducers } from 'redux'
import userReducer from './userReducer'
import postReducer from './postReducer'
import todosReducer from './todosReducer'

export default combineReducers({
	users: userReducer,
	posts: postReducer,
	todos: todosReducer
})
