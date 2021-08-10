import React, { Component } from 'react'
import {Link,Route,Redirect,Switch} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'message 1' },
            { id: '02', title: 'message 2' },
            { id: '03', title: 'message 3' },

        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* save content in params and pass params to route component */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
                    <hr/>
                  
                    <Switch>
                    <Route path = "/home/message/detail/:id/:title" component = {Detail}/>
                    <Redirect to= "/home/message/detail"/>
                    </Switch>
                    
                    
            </div>
        )
    }
}
