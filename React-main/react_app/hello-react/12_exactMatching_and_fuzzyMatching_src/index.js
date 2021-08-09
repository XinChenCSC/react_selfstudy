import React from 'react'
import ReactDOM from 'react-dom'
// import { HashRouter } from 'react-router-dom' // losing css from refresh page
import { BrowserRouter } from 'react-router-dom' 
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
        {/* <HashRouter>
      <App />
    </HashRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);







