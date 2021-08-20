import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
class Person extends Component {

    addNameAge = () =>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h1>Person Component</h1>
                <h2>sum: {this.props.sum}</h2>
                <input ref = {c => this.nameNode = c}type="text" placeholder = 'enter name'/>
                <input ref = {c => this.ageNode = c}type="text" placeholder = 'enter age'/>
                <button onClick = {this.addNameAge}>add</button>
                <ul>
                    {
                    this.props.people.map((pObj)=>{
                        return <li key = {pObj.id}> {pObj.name}---- {pObj.age}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({people:state.people , sum:state.sum}),
    {addPerson:createAddPersonAction }
)(Person)