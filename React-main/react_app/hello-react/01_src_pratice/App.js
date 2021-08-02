import React, {Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome'
import Module  from './components/Css_Module'
export default class App extends Component{
  render(){
    return(
      <div>
        <Hello/>
        <Welcome/>
        <Module/>

      </div>
    )
  }
}
