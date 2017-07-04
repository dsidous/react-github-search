import { combineReducers } from 'redux'
import user from './user'
import repos from './repos'

const reducers = combineReducers({
  user,
  repos
})

export default reducers;
