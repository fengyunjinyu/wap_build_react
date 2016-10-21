/**
 * Created by Administrator on 2016/10/20.
 */

import React from "react";
import {  Link } from 'react-router';

var Index = React.createClass({
    render:function(){
        return (
                <div>
                    <h2>Index Routes</h2>
                    <p><Link to="message">message</Link></p>
                    <p><Link to="account">account</Link></p>
                    <p><Link to="login">login</Link></p>
                </div>

        )
    }

});

module.exports=Index;