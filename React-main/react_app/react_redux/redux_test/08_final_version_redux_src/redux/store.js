import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
// applyMiddleware for async, composeWithDevTools for redux extension
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))