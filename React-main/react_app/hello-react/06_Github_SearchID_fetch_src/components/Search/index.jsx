import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    // add async() to the most recent function, in order to use await
    search = async() => {

        const { keyWordElement: { value: keyword } } = this
        PubSub.publish('search', { isFirst: false, isLoading: true })

        // axios.get(`/api1/search/users?q=${keyword}`).then(
        //     response => {

        //         PubSub.publish('search', { isLoading: false, users: response.data.items })
        //     },
        //     error => {

        //         PubSub.publish('search', { isLoading: true, err: error.message })
        //     }

        // )
        // get internet response by fetch()
        // fetch(`/api1/search/users?q=${keyword}`).then(
        //     response => {
        //         console.log('success (connect server)');
        //         return response.json();

        //     },
        //     error => {
        //         console.log('fail (connect server)');
        //         return new Promise(()=>{})

        //     },
        // ).then(
        //     response => {
        //         console.log('success (request data)', response)
        //     },


        // ).catch(
        //     (error) => {console.log(error)}
        // )
        // advanced version of fetch()
        // fetch(`/api1/search/users?q=${keyword}`).then(
        //     response => {
        //         console.log('success (connect server)');
        //         return response.json();

        //     },
          
        // ).then(
        //     response => {
        //         console.log('success (request data)', response)
        //     },

        // ).catch(
        //     error => { console.log('error:',error) }
        // )
        try {
            const response = await fetch(`/api1/search/users?q=${keyword}`)
            const data = await response.json()
        
            PubSub.publish('search', { isLoading: false, users: data.items })
        } catch (error) {
            console.log('request error:',error)
            PubSub.publish('search', { isLoading: true, err: error.message })
            
        }
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
