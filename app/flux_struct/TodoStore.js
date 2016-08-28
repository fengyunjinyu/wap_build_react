var AppDispather = require("./AppDispather");
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('./TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _todos = {};

function create(text) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todos[id] = {
        id:id,
        complete: false,
        text:text
    };
}

function update( id , updates) {
    _todos[id] = assign({} , _todos[id] , updates);
}

var TodoStore = assign( {} , EventEmitter.prototype , {
    getAll:function() {
        return _todos;
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT , callback);
    }
});

AppDispather.register(function( action ){
    var text;
    switch(action.actionType){
        case TodoConstants.TODO_CREATE:
            text = action.text.trim();
            if(text!== ''){
                create(text);
            }
            TodoStore.emitChange();
            break ;
        case TodoConstants.TODO_UPDATE_TEXT:
            text = action.text.trim();
            if(text !== ''){
                update(action.id , { text:text});
            }
            TodoStore.emitChange();
            break;
    }

});