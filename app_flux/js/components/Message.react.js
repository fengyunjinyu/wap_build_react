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

/**
 * 消息列表
 * @type {exports}
 */
var MessageList = require("./Messagelist.react");
/**
 * 消息输入框
 * @type {exports}
 */
var MessageInput = require("./MessageInput.react");




var ENTER_KEY_CODE = 13;
var Message  = React.createClass({
    getInitialState:function(){
        return {
            text:''
        }
    },
    render:function(){
        return (
            <div className="overline flo">
                <MessageList />
                <MessageInput />
            </div>
        );
    },
    _onchange:function(){

    }
});

module.exports = Message;
