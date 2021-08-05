import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    search = () => {

        const { keyWordElement: { value: keyword } } = this
        PubSub.publish('search', { isFirst: false, isLoading: true })

        axios.get(`/api1/search/users?q=${keyword}`).then(
            response => {

                PubSub.publish('search', { isLoading: false, users: response.data.items })
            },
            error => {
                
                PubSub.publish('search', { isLoading: true, err: error.message })
            }

        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>

            </div>
        )
    }
}
