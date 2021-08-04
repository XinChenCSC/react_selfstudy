import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    search = () =>{
        // console.log(this.keyWordElement.value)
        // const {value }  = this.keyWordElement
        // console.log(value)
        // const {keyWordElement} = this
        // console.log(keyWordElement.value)
        // const {keyWordElement:{value}} = this
        // console.log(value)

       
        // github Api
        // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        //     response => {console.log('success',response.data)},
        //     error => {console.log('fail',error)}
        // )

        // axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
        //     response => {console.log('success',response.data);},
        //     error => {console.log('fail',error);}
        // )
        const {keyWordElement:{value:keyword}} = this
        this.props.updateAppState({isFirst:false,isloading:true})
      
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response => {
                this.props.updateAppState({isloading:false  ,users:response.data.items})
                
            },
            error => {
                this.props.updateAppState({isloading:true,err:error.message})
            }
            
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref ={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                        <button onClick = {this.search}>Search</button>
                    </div>
                </section>

            </div>
        )
    }
}
