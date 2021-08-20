
import React, { Component } from 'react'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'
import { connect } from 'react-redux'



// function c(dispatch){
//     return {minus:(number)=>{
//         dispatch({type:DECREMENT,data:number})
//     }}
// }

class Count extends Component {


    

  
    increnment = () => {

        const { value } = this.selectNumber
        this.props.add(value*1)
     

    }
    decrenment = () => {

        const { value } = this.selectNumber
        this.props.minus(value*1)
       
    }
    increnmentIfOdd = () => {

        const { value } = this.selectNumber
        if (this.props.count%2 !== 0){
            this.props.add(value*1)
        }
 
    }
    increnmentIfAsync = () => {

        const { value } = this.selectNumber
        this.props.addAsync(value*1,500)
 
    }
    render() {
        return (
            <div>
                <h1>sum: {this.props.count}</h1>
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


export default connect(
    state => ({ count: state }),
    //     dispatch => (
    //     {
    //         add: (number) => { dispatch(createIncrementAction(number)) },
    //         minus: (number) => { dispatch(createDecrementAction(number)) },
    //         addAsync: (number,time) => { dispatch(createIncrementAsyncAction(number,time))},
    //     }
    // )
    {
        add: createIncrementAction,
        minus: createDecrementAction,
        addAsync: createIncrementAsyncAction
    }
)(Count)


