import React , {Component} from 'react';
import { Router, Route, Link } from 'react-router'

class Message extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h1 className="app_title">消息</h1>
        );
    }
}
module.exports=Message;