/**
 * 主界面
 */

var React = require('react');
var Message = require("./Message.react");

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Message />
            </div>
        );
    }
});

module.exports = App;
