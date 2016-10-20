/**
 * 项目入口路由规则
 */
var React = require('react');
var ReactDom = require('react-dom');
import {Router , Route , Link} from 'react-router';



const rootroutes = {
    path:'/',
    component:App,
    childRoutes:[
        require("./routes/me.route"),
        require('./routes/near.route'),
        {path : 'friends' ,component : Friends},
        {path : 'message' , component: Message },
        {path : 'login' , component : Login }
    ],
    indexRoute:{
        component:Hello
    }
};
ReactDom.render(
<Router history={hashHistory} routes={rootroutes}>
</Router>
    ,
    document.getElementById("app")
);
