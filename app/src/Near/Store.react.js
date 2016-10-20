/**
 * Created by Administrator on 2016/8/26.
 */
import React from 'react';
import { browserHistory, Router } from 'react-router';
import Shopstore from '../Store/Shops.store';

var Shopcart = React.createClass({
    getInitialState:function(){

    },

    addNumberClick:function(id){

    },
    reduceNumberClick:function(id){

    },

    resetNumberClick:function(id){

    },

    render:function(){
        return (
            <div>


            </div>
        );
    }
});

var Store = React.createClass({
    getInitialState:function(){
        return {
            shops:[]
        }
    },
    componentWillMount:function(){
        console.log(this.props);
        const location = this.props.location;
        //this.props.history.replace('/login');

        /*
        $.get(
            "http://localhost/wap_build_react/data/user/login.json",
            {},
            function(){

            }
        )
        */

    },
    render:function(){


        var nodeitems = this.state.shops.map(function(item){
            return (
                <li key={item.goodid}>
                    <p className="goodname">{item.goodname}</p>
                    <span>￥{item.price}</span>
                </li>
            );
        });



        return (
            <ul className="goodslist">
                 {nodeitems}
            </ul>
        );
    },
    componentDidMount:function(){
        var me = this;
        $.ajax({
            type: 'GET',
            url: Shopstore.goods ,
            data: {id:me.props.params.id} ,
            success: function(data){
                console.log(data.data);
                if(data.status=10000){
                    this.setState(
                        { shops: data.data }
                    )
                }

            }.bind(this) ,
            error: function(data){

            }.bind(this),
            dataType: "json"

        });



    },
    componentWillUnmount:function(){

    }


});
module.exports = Store;
