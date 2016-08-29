/**
 * 消息服务
 * 存储仓库
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var data_message_list = require("../data/messagelist");

var _message = {};
var data_message = data_message_list.getList();

function _addMessage( rawMessage) {

}

var MessageStore = assign({} , EventEmitter.prototype , {
    receiveMessage:function(message) {
        console.log(message);
        data_message.push({text: message});
    },
    createMessage:function(message){
        data_message.push({text: message});
    },
    emitChange:function() {
        console.log('emit-change');
        this.emit('change');
    },
    addChangeListener: function( callback ){
        console.log("jsxx");
        this.on('change' , callback);
    },
    removeChangeListener: function( callback ){
        this.removeListener('change' , callback);
    },
    get: function( id ){
        return _message[id];
    },
    getAll: function(){
        return _message;
    },
    getMessageList:function(){
        return data_message;
    }
});

function handlerAction( action ){
    switch(action.type){
        case 'receive_message':
            console.log("store_act");
            MessageStore.receiveMessage(action.message);
            console.log(data_message);
            MessageStore.emitChange();
            break;
    }
}

MessageStore.dispatchToken = AppDispatcher.register(handlerAction);

module.exports = MessageStore;


