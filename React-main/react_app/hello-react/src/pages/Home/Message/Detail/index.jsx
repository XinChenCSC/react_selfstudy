import React, { Component } from 'react'
// import qs from 'querystring'
const data = [
    {id: '01', content: "hi"},
    {id: '02', content: "dot"},
    {id: '03', content: "hey"}

]
export default class Detail extends Component {
    
    render() {
        console.log(this.props)
        // get params variables
        // const {id, title} = this.props.match.params
        // get search variables
        // const {search} = this.props.location
        // const {id,title} = qs.parse(search.slice(1))
        //get state variable
        const {id,title} = this.props.location.state || {}
        const get_Content = data.find((dataObj)=>{
            return dataObj.id === id
        }) || {}
        return (
            <ul>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <li>Conten: {get_Content.content}</li>
            </ul>
        )
    }
}
