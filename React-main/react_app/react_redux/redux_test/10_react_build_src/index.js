import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.render(
    // all the child component of App can access or recesive content from redux store
    <Provider store ={store}>
        <App />
    </Provider>,
document.getElementById('root'))



