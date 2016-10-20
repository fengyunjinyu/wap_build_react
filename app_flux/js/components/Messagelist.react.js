/**
 * 消息 列表信息
 */

var React = require('react');
var MessageStore = require('../stores/MessageStore');

var MessageList = React.createClass({
    getInitialState:function() {
        return {
            message:MessageStore.getMessageList()
        }
    },
    render:function(){
        var MessageItemd = this.state.message.map(function(item , i) {
            return (
                <MessageItem
                    key = {i}
                    message = {item}
                />

            );
        });


        return (
            <div className="overline flo">
                <ul className="list messagelist overline flo">
                    <li>
                        <div className="user_ico user_ico_left"></div>
                        <p className="user_text">
                            <b className="text_ico text_ico_left"></b>
                             Helloworld SMP  UserBass单独
                        </p>
                    </li>


                    {MessageItemd}
                </ul>
            </div>
        );
    },
    _onChange:function(){
        this.setState({
            message:MessageStore.getMessageList()
        });

    },

    componentDidMount:function(){
        MessageStore.addChangeListener(this._onChange);

    },
    componentWillUnmount: function(){
        MessageStore.removeChangeListener(this._onChange);

    }

});

/**
 * 消息列表每一条详细信息
 */

var MessageItem = React.createClass({
    render: function(){
        var message_object = this.props.message;
        return (
            <li>
                <div className="user_ico user_ico_left"></div>
                <p className="user_text">
                    <b className="text_ico text_ico_left"></b>
                    {message_object.text}
                </p>
            </li>
        );
    }
});

module.exports=MessageList;
