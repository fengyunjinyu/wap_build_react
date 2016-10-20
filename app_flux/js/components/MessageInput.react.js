/**
 * message
 * 消息模块组件
 */

var React = require('react');
/**
 * 载入模块数据仓库地址
 * @type {exports}
 */
var MessageStore = require('../stores/MessageStore');
/**
 * 载入模块动作生成器
 * @type {exports}
 */
var MessageAction = require('../actions/MessageActionCreator');

var MessageList = require("./Messagelist.react");

var ENTER_KEY_CODE = 13;
var MessageInput  = React.createClass({
    getInitialState:function(){
        return {
            text:''
        }
    },
    render:function(){
        return (
            <div className="mess_pos">
                <input type="text" placeholder="请输入留言内容" className="message_input" value={this.state.text} onChange={this._onChange} onKeyDown={this._onKeyDown} />
            </div>
        );
    },
    _onChange:function( event , value){
        console.log("jojo");
        this.setState({
            text:event.target.value
        });
    },
    _onKeyDown: function(event ){
        if(event.keyCode === ENTER_KEY_CODE){
            event.preventDefault();
            var text = this.state.text.trim();
            if(text){
                MessageAction.receiveMessage(text);
                //MessageStore.createMessage(text);
            }
            this.setState({ text:''})
        }

    }
});

module.exports = MessageInput;
