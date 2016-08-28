import React,{Component} from "react";
import { Router, Route, Link } from 'react-router';

class Near extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="overline flo">
                {this.props.children}
            </div>

        );
    }
}
module.exports=Near;
