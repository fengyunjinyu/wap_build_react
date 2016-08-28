/**
 * 附近  购物模块
 "shopid": "2",
 "shopname": "牛肉面",
 "shopdesc": "This is *another* comment",
 "shopimg":"static/images/b.jpg"
 *
 */
import React , {Component} from 'react';
import { Router, Route, Link } from 'react-router'
var Shopping = React.createClass({

    getInitialState: function() {
        return {data: []}
    },
    componentDidMount: function(){
        $.ajax({
            url:'http://localhost/wap_build_react/data/store_shops.json',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({data:data});
            }.bind(this),
            error:function(xhr , status , err){
                console.log(err.toString());

            }.bind(this)
        });
    },

    render : function(){
        var commentnode = this.state.data.map(function( itemnode ){
            var url = 'near/store/'+itemnode.shopid;
            return (
                <Link to={url} key={itemnode.shopid} data={itemnode} >
                    <li>
                        <img src={itemnode.shopimg} />
                        <div className="shopinfo">
                            <h3>{itemnode.shopname}</h3>
                            <p>{itemnode.shopdesc}</p>
                        </div>
                    </li>
                </Link>
            );
        });

        return (
            <div className="overline flo">
                <h1 className="app_title"> 购物模块 </h1>
                <ul className="list shoplist flo">
                   {commentnode}
                </ul>
            </div>

        )
    }
});

module.exports= Shopping;

