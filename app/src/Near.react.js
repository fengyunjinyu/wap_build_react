import React,{Component} from "react";
import { Router, Route, Link } from 'react-router';

class Near extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1 className="app_title">附近</h1>
        );
    }
}
module.exports=Near;
