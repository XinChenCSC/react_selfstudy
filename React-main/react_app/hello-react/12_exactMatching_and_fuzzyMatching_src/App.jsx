import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}
                            {/* fuzzy matching */}
                            <MyNavLink to="/about">About</MyNavLink> 
                            
                            <MyNavLink to="/home/">Home</MyNavLink>
                            {/* <MyNavLink to="/home/a/b">Home</MyNavLink> */ }
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About} a='a' b='b' />
                                    <Route path="/home" component={Home} />
                                    {/* <Route exact path="/home" component={Home} />  use exact mathing it when the error on the fuzzy matching */ } 
                            
                                </Switch>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
