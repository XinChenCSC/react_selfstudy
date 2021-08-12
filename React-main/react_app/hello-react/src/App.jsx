import React, { Component } from 'react'
import {Button, DatePicker} from 'antd'
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
const {RangePicker} = DatePicker
export default class App extends Component {
    render() {
        return (
            <div>
                App....
                <Button type = 'primary'>click me</Button>
                <Button type = 'link'>click me</Button>
                <WechatOutlined />
                <br/>
                <Button type = 'primary' icon = {<SearchOutlined/>}>Search</Button>
                <br />
                <DatePicker />
                <RangePicker />
            </div>
        )
    }
}
