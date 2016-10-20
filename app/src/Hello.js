var React = require('react');
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory , hashHistory , RouteHandler } from 'react-router';
var Hello = React.createClass ({
    render(){
        return (
                <div>
                    <Link to="login">Login Component</Link>
                    <h1 className="app_title"> 默认模块 </h1>
                </div>

        );
    }
});

module.exports=Hello ;
