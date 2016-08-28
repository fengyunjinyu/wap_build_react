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
            <div className="overline flo">
               <ul className="list messagelist"></ul>
            </div>
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
            <li>
                <div className="user_ico user_ico_left"></div>
                <p className="user_text">
                    <b className="text_ico text_ico_left"></b>
                    Helloworld SMP  UserBass单独
                </p>
            </li>
        );
    }
});

module.exports=MessageList;
