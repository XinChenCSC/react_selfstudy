import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class list extends Component {
    state = {
        users: [],
        isFirst: true, //first time open page
        isLoading: false, // loading controller
        err: '', // error infomation
    }
    componentDidMount() {
        this.token = PubSub.subscribe('search', (_, stateObj) => {
  
            this.setState(stateObj )
        })  
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token )
    }
    render() {
        const { state: { users, isFirst, isLoading, err } } = this
        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <h2>Enter Keyword and Click Search Button</h2> :
                            isLoading ? <h2>Loding...</h2> :
                                err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                    users.map((userObj) => {
                                        return (
                                            <div key={userObj.id} className="card">
                                                <a rel="noreferrer" href={userObj.html_url} target="_blank" >
                                                    <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                                </a>
                                                <p className="card-text">{userObj.login}</p>
                                            </div>
                                        )
                                    })}

                </div>

            </div>
        )
    }
}
