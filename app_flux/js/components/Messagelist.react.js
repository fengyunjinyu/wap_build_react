/**
 * 消息 列表信息
 */

var React = require('react');

var MessageList = React.createClass({
    getInitialState:function() {
        return {
            data:[]
        }
    },
    render:function(){
        return (
            <ul></ul>
        );
    },

    componentDidMount:function(){

    },
    componentWillMount: function(){

    }

});

/**
 * 消息列表每一条详细信息
 */

var MessageItem = React.createClass({
    render: function(){
        return (
            <li></li>
        );
    }
})
