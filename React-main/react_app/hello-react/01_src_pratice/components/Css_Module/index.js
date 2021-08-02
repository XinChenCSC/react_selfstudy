import React,{Component} from 'react'
import css_module from './index.module.css'

export default class Module extends Component{
    render(){
        return(<h2 className = {css_module.title}>Module Css</h2>)
    }
}