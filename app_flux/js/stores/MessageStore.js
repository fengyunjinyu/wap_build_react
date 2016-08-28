/**
 * 消息服务
 * 存储仓库
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _message = {};

function _addMessage( rawMessage) {

}

var MessageStore = assign({} , EventEmitter.prototype , {
    receiveMessage:function(message){
        console.log(message);

    },
    emitChange:function(){
        this.emitChange('change');
    },

    addChangeListener: function( callback ){
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
    }

});

function handlerAction( action ){
    switch(action.type){
        case 'receive_message':
            console.log("jxxx");
            MessageStore.receiveMessage(action.message);
            break;
    }
}

MessageStore.dispatchToken = AppDispatcher.register(handlerAction);

module.exports = MessageStore;


