var React = require('react');
var ReactDom = require('react-dom');
var Hello = require('./Hello');
import { Router , Route , hashHistory } from 'react-router';
var Home = require('./Sodu.react');
var Footmenu = require('./Footmenu.react');


var data = [
    {name: "消息" , classname:'ftmenu_ico ftmenu_ico_user'},
    {name:'朋友' , classname:'ftmenu_ico ftmenu_ico_friend'},
    {name:'附近' , classname:'ftmenu_ico ftmenu_ico_find'},
    {name:'我' , classname:'ftmenu_ico ftmenu_ico_me'}
];

var CommentBox = React.createClass({
    render:function(){
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

var FootMenuMain = React.createClass({
    render:function(){
        return <Footmenu data={data} />
    }
})
ReactDom.render(
    <Router history={hashHistory}>
        <Route path='/' component={FootMenuMain}>
            <Route path="account" component={Accounts} />
            <Route path="friends" component={Friends} />

        </Route>
    </Router>

    ,
    document.getElementById("app")
);