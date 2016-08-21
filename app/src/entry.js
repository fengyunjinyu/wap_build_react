var React = require('react');
var ReactDom = require('react-dom');
var Hello = require('./Hello');
import { Router , Route , hashHistory } from 'react-router';

var CommentBox = React.createClass({
    render:function(){
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
})
ReactDom.render(

    <Router history={hashHistory}>
        <Route path="/" component={CommentBox} />
    </Router>,
    document.getElementById("app")
);