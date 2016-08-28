/**
 * Near 模块默认访问
 */

import React , {Component} from 'react';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';

var near_data =[
    {id:1,name: "购物" ,path:"near/shopping"},
    {id:2,name:'美食' ,path:'near/foods'},
    {id:3,name:'玩乐'  ,path:'near/players'},
    {id:4,name:'活动'  ,path:'near/activity'}
];


class Index extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var commentNodes = near_data.map(function(list_item){
            return (
                <Link to={list_item.path}  key={list_item.id} >
                    <li>
                        <b className="img_ico"></b>
                        <p className="desc flo clearfid">
                            <span className="flo">{list_item.name}</span>
                            <span className="flo_r ico_flo_r"> &gt; </span>
                        </p>
                    </li>
                </Link>
            );
        });
        return(
            <div className="overline flo">
                <h1 className="app_title">附近</h1>
                <div className="default_list flo clearfid">
                    <ul className="list flo clearfid">
                        {commentNodes}
                    </ul>
                </div>
            </div>

        );

    }
}
module.exports=Index;

