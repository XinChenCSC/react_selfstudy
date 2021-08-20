import count from './count'
import people from './person'
import {combineReducers} from 'redux'

export default combineReducers({

    sum: count,
    people
})