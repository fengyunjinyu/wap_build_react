var React = require('react');
var Hello = React.createClass ({
    render(){
        return (
            <h1> { this.props.name} </h1>
        )
    }
})

module.exports=Hello ;
