import { createStore, combineReducers } from 'redux'
import todoAppReducer from '../reducers/appReducer'

const rootReducer = combineReducers({ todoAppReducer })
const store = createStore(rootReducer)

export default store
