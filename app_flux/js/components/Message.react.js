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


var ENTER_KEY_CODE = 13;
var Message  = React.createClass({
    getInitialState: function(){
        return {
            text:''
        }
    },

    render:function(){
        return (
            <div className="mess_pos">
                <input type="text" className="message_input" value={this.state.text} onChange={this._onChange} onKeyDown={this._onKeyDown} />
            </div>
        );
    },
    _onChange:function( event , value){
        this.setState({
            text:event.target.value
        })
    },
    _onKeyDown: function(event ){
        console.log('jj');
        if(event.keyCode === ENTER_KEY_CODE){
            console.log("mm");
            event.preventDefault();
            var text = this.state.text.trim();
            if(text){
                MessageAction.receiveMessage(text);
            }

            this.setState({ text:''})
        }

    }
});

module.exports = Message;
