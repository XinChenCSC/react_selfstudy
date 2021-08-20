import {createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const allReducers = combineReducers({

    sum: countReducer,
    people: personReducer,
})
// applyMiddleware for async, composeWithDevTools for redux extension
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))