import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }
    increnment = () => {
        const { count } = this.state
        const { value } = this.selectNumber
        this.setState({ count: count + value * 1 })

    }
    decrenment = () => {
        const { count } = this.state
        const { value } = this.selectNumber
        this.setState({ count: count - value * 1 })
    }
    increnmentIfOdd = () => {
        const { count } = this.state
        const { value } = this.selectNumber
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })
        }
    }
    increnmentIfAsync = () => {
        const { count } = this.state
        const { value } = this.selectNumber
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 500);
    }
    render() {
        return (
            <div>
                <h1>sum: {this.state.count}</h1>
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
