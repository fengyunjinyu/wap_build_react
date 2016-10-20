/**
 * Created by Administrator on 2016/8/28.
 */


var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory , hashHistory , RouteHandler } from 'react-router';




var App = React.createClass({
    render: function(){
        return (
            <div>
               {this.props.children ||  "First module"}
                <Link to="message">message</Link>
                <Link to="account">account</Link>

            </div>
        )
    }
});

module.exports = App;


const rootroutes = {
    path:'/',
    component:App,
    childRoutes:[
        {path : 'message' ,component:require("./js/components/Message.react")},
        {path : 'account' , component : require("./js/components/Account.react")},
        //{path : 'near' , component : Near},
        //{path : 'message' , component: Message }

    ],
    indexRoute:{
        component:require("./js/components/Index.react")
    }
};

ReactDOM.render(
    <Router history={hashHistory} routes={rootroutes}>
    </Router>,
    document.getElementById('example')
)

