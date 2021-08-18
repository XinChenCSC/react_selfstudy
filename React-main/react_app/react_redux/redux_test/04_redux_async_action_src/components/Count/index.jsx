import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
export default class Count extends Component {


    state = { count: 0 }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }
    increnment = () => {

        const { value } = this.selectNumber
        store.dispatch(createIncrementAction(value*1))

    }
    decrenment = () => {

        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    increnmentIfOdd = () => {

        const { value } = this.selectNumber
        const count  = store.getState()
        if (count% 2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }
    increnmentIfAsync = () => {

        const { value } = this.selectNumber
        // setTimeout(() => {
            store.dispatch(createIncrementAsyncAction(value*1,500))
        // }, 500);
    }
    render() {
        return (
            <div>
                <h1>sum: {store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increnment}>+</button> &nbsp;
                <button onClick={this.decrenment}>-</button> &nbsp;
                <button onClick={this.increnmentIfOdd}>odd +</button> &nbsp;
                <button onClick={this.increnmentIfAsync}>async +</button> &nbsp;
            </div>
        )
    }
}
