import React, { Component } from 'react'
const data = [
    {id: '01', content: "hi"},
    {id: '02', content: "dot"},
    {id: '03', content: "hey"}

]
export default class Detail extends Component {
    
    render() {
        // get params variable
        const {id, title} = this.props.match.params
        const get_Content = data.find((dataObj)=>{
            return dataObj.id === id
        })
        return (
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{get_Content.content}</li>
            </ul>
        )
    }
}
