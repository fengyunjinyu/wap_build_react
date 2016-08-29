/**
 * 消息模块 动作生成器
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveMessage( message ){
    console.log("ffff");
    var action = {
        type:'receive_message',
        message: message
    };
    AppDispatcher.dispatch(action);
};

module.exports = {
    receiveMessage : receiveMessage
};
