/**
 * 主界面
 */

var React = require('react');
import {  Link, IndexLink } from 'react-router';


var App = React.createClass({
        render: function(){
            return (
                <div>
                    {this.props.children ||  "First module"}
                    <hr>
                    <Link to="message">message</Link>
                     <hr>
                    <Link to="account" message</Link>
                </div>


            )
        }
});

module.exports = App;

/*
var React = require('react');
var Message = require("./Message.react");

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Message />
            </div>
        )
    }
});
module.exports = App;

*/
