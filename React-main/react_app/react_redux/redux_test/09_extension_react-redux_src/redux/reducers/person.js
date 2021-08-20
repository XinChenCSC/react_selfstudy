import {Add_Person} from '../constant'
const initState = [{id:'001',name:'tom',age:18}]

export default function personReducer(preState=initState,action ){
    const {type,data} = action
    switch (type) {
        case Add_Person:
            return [data,...preState]
           
    
        default:
            return preState
    }

}