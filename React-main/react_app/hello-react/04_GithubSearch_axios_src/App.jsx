import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {

    state =  {
        users:[],
        isFirst: true, //first time open page
        isLoading: false, // loading controller
        err:'', // error infomation
    } 

    updateAppState = (stateObj) =>{
        this.setState(stateObj)
    }   
    render() {
        
        return (
            <div>
                <div className="container">
                    <Search updateAppState = {this.updateAppState}/>
                    <List {...this.state}/>
                </div>
            </div>
        )
    }
}
