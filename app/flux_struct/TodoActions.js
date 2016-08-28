var AppDispather = require('./AppDispather');
var TodoConstants = require('./TodoConstants');

var TodoActions = {
    create:function(text){
        AppDispather.dispath({
            actionType:TodoConstants.TODO_CREATE,
            text:text
        })
    },
    updateText:function(id , text){
        AppDispather.dispath({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id:id,
            text:text
        });
    },
    toggleCompleteAll:function(){
        AppDispather.dispath({
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        })

    }
}