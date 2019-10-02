import { combineReducers } from 'redux'
import titles from './titles';
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  titles,
  visibilityFilter
})
