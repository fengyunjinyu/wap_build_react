import React,{Component} from "react";
import { Router, Route, Link } from 'react-router';

class Me extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1 className="app_title">个人中心</h1>
        );
    }
}
module.exports=Me;
