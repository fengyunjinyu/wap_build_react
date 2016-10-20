var Nearcomp = require("../Near.react");
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory , hashHistory , RouteHandler } from 'react-router';
function hasLogin(){
    return false;
}

/**
 * Userstore 集合 与用户相关的一系列操作
 * 注册  login
 * 登录  register
 * 是否在线  haslogin
 * 退出  signout
 * 使用localstorage来存储登录信息
 * 用户退出后，删除掉当前用户的sccesstoken 和用户姓名
 *
 * 当用户登录失效， 即服务器端的accessToken失效后， json返回结果处理， 并返回到登录页面执行登录
 */
/*
var User_store = {
    hasLogin:function(){

    }
}

*/
function requireAuth(nextState , replaceState){
    console.log("JOJO");
    if(!hasLogin()){
        replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
}

module.exports={
    path:'near',
    component:Nearcomp,
    //onEnter:requireAuth,
    childRoutes:[
        {path:'shopping' , component: require('../Near/Shopping.react')},
        {path:'store/:id' , component: require("../Near/Store.react") }

    ],
    indexRoute:{
        component:require("../Near/Index.react")
    }
}