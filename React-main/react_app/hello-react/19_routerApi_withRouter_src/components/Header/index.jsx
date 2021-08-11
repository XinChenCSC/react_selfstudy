import React, { Component } from 'react'
import { withRouter } from 'react-router'
class Header extends Component {
    back = ()=>{
        this.props.history.goBack()
    }
    forward = () =>{
        this.props.history.goForward()
    }
    refresh = ()=>{
        this.props.history.go(0)
    }
    render() {
        return (

            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick = {this.back}>back</button>&nbsp;
                <button onClick = {this.forward}>forward</button>
                <button onClick = { this.refresh}>refresh</button>
            </div>

        )
    }
}
export default withRouter(Header)
