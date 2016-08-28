import React, { Component } from 'react';
import { render } from 'react-dom'

class Friends extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="overline flo">
                <h1 className="app_title">朋友</h1>
                {this.props.children}
            </div>

        );
    }
}



module.exports=Friends;
