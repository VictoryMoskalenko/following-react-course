import {combineReducers} from 'redux'
import quizReducer from './quizReducer'
import createReducer from './createReducer'
import authReducer from './authReducer'

export default combineReducers({
  // reducers will be here
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer

})