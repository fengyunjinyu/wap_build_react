/**
 * Created by Administrator on 2016/8/26.
 */
import React from 'react';

var Store = React.createClass({
    getInitialState:function(){
        return {
            data:[]
        }
    },
    componentWillMount:function(){
        console.log(this.props);

    },
    render:function(){
        return (
            <h1>Hello World</h1>
        );

    },
    componentDidMount:function(){

    },
    componentWillUnmount:function(){

    }


});
module.exports = Store;
