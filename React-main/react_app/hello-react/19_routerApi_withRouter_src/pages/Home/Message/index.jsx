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
    replaceShow = (id, title) => {
        // replace() with params
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)
        // replace() with search
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
        // replace() with state
        this.props.history.replace(`/home/message/detail`, { id, title })
    }

    pushSHow = (id, title) => {
        // push() with params
        // this.props.history.push(`/home/message/detail/${id}/${title}`)
        // push() with search
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
        // replace() with state
        this.props.history.push(`/home/message/detail`, { id, title })

    }
    back = () =>{
        this.props.history.goBack()
    }
    forward = () =>{
        this.props.history.goForward()
    }
    refresh = () =>{
        this.props.history.go(0)
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
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/*  save content to state and pass it to route component*/}
                                    <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
                                    &nbsp;<button onClick={() => this.pushSHow(msgObj.id, msgObj.title)}>push</button>
                                    &nbsp;<button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace</button>
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
                    {/* <Route path="/home/message/detail" component={Detail} /> */}
                    {/* get state */}
                    <Route path="/home/message/detail" component={Detail} />

                </Switch>

                <button onClick = {this.back}>go back</button>
                <button onClick = {this.forward}>forward</button>
                <button onClick = {this.refresh}>refresh</button>
            </div>
        )
    }
}
