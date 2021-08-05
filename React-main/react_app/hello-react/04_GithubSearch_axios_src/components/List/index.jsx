import React, { Component } from 'react'
import './index.css'
export default class list extends Component {
    render() {
        const { props: { users, isFirst, isLoading, err } } = this
        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <h2>Enter Keyword and Click Search Button</h2> :
                        isLoading ? <h2>Loding...</h2> :
                        err? <h2 style = {{color:'red'}}>{err}</h2> :
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
