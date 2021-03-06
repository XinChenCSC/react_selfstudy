import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
export default class Home extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <h2>This is Home</h2>
                </div>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>

                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>

                        </li>
                    </ul>
                    <Switch>
                        <Route path = "/home/news" component = {News}/>
                        <Route path = "/home/message" component = {Message}/>
                        <Redirect to = "/home/news"/>
                     
                    </Switch>

                </div>

            </div>
        )
    }
}
