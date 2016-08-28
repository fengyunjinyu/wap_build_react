var React = require('react');
var TodoStore = require('./TodoStore');

function getTodoState() {
    return {
        allTodos : TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    };
}

var TodoApp = React.createClass({
    getInitialState: function(){
        return getTodoState();
    },

    componentDidMount: function(){
        TodoStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        TodoStore.removeChangeListener(this._onChange);
    },
    render: function(){
        return (
            <div></div>
        );
    },
    _onChange:function(){
        this.setState(getTodoState());
    }

})