import count from './count'
import person from './person'
import {combineReducers} from 'redux'

export default combineReducers({

    sum: count,
    people: person,
})