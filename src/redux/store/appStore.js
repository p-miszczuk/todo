import { createStore } from 'redux'
import todoAppReducer from '../reducers/appReducer'

const store = createStore(todoAppReducer)

export default store
