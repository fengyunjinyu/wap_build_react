/**
 * Created by Administrator on 2016/8/28.
 */


var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory , hashHistory , RouteHandler } from 'react-router';


var App = React.createClass({
    render: function(){
        return (
            <div className="">
               {this.props.children ||  "First module"}
                


                <ul className="footmenu">
                     <li>menu1</li>
                     <li>menu2</li>
                     <li>menu3</li>
                </ul>
            </div>
        )
    }
});

module.exports = App;


const rootroutes = {
    path:'/',
    component:App,
    childRoutes:[
        {path : 'message' , component:require("./js/components/Message.react")},
        {path : 'account' , component : require("./js/components/Account.react")},
        {path : 'login'   , component : require("./js/components/Login.react")},
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

