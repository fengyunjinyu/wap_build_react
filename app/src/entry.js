var React = require('react');
var ReactDom = require('react-dom');
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory , hashHistory , RouteHandler } from 'react-router';
var Footmenu = require('./Footmenu.react');

var data = [
    {name: "消息" , classname:'ftmenu_ico ftmenu_ico_user',path:"/message"},
    {name:'朋友' , classname:'ftmenu_ico ftmenu_ico_friend',path:'/friends'},
    {name:'附近' , classname:'ftmenu_ico ftmenu_ico_find' ,path:'/near'},
    {name:'我' , classname:'ftmenu_ico ftmenu_ico_me' ,path:'/me'}
];

var App = React.createClass({
    componentDidMount:function(){
        console.log('mod:index');
    },
    render:function(){
        return (
            <div>
                <Footmenu data={data} />
                    <div className="overline flo">
                       {this.props.children ||  "First module"}
                    </div>
            </div>
        );
    }
});

/*

const CourseRoute = {
    path:'course:/courseId',
    getChildRoutes(location , callback){
        require.ensure([] , function(  require ){
            callback(null , [
                require('./routes/Announcements'),
                require('./routes/Assignments'),
                require('./routes/Grades'),
            ])

        })

    },
    getIndexRoute(location , callbacl){
        require.ensure([] , function( require ){
            callback(null , require('./components/Index'))
        })
    },
    getComponents(location , callback){
        require.ensure([] , function(require){
            callback(null , require("./components/Course"))

        })
    }
}

*/


const routes = {
    path: '/',
    component: App
    /*,
    childRoutes: [
        {path : 'friends' ,component : Friends},
        {path : 'me' , component : Me},
        {path : 'near' , component : Near},
        {path : 'message' , component: Message }
    ],
    indexRoute:{
        component:Hello
    }

    */
};
const rootroutes = {
    path:'/',
    component:App,
    childRoutes:[

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