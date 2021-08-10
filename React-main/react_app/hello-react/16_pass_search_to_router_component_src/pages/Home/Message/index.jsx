import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
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
                                    {/* save content to params and pass it to route component */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/* save content to search and pass it to route component  */}
                                    <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
                <hr />

                <Switch>
                    {/* get params  */}
                    {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
                    {/* get search */}
                    <Route path="/home/message/detail" component={Detail} />
                    
                </Switch>


            </div>
        )
    }
}
