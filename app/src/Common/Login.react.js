var React = require('react');
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory , hashHistory , RouteHandler } from 'react-router';
var Userstore = require('../Store/User.store');
var Login = React.createClass({
    getInitialState: function(){
        return {
            username:'',
            password:''
        }
    },
    handleChange:function(e){
        console.log('jq');
        var newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);

    },
    resolveData: function(data){
        console.log("MMM");
        console.log(data);
    },
    handleClick: function(){
        var data = {
            username:this.state.username,
            password:this.state.password
        };
        Userstore.Login(data , this.resolveData).bind(this);
    },
    render:function(){
        return (
            <div className="overline flo pad_16">
                <div className="overline flo form_area">
                    <p>用户名</p>
                    <input className="input_normal" type="text"  name="username"  value={this.state.username} onChange={this.handleChange}  placeholder="输入用户名" />
                    <p>密码</p>
                    <input className="input_normal" type="password" name="password"  value={this.state.password} onChange={this.handleChange}  placeholder="输入密码" />

                </div>
                <div className="pad_tb_16 overline flo">
                    <button className="btn_normal red" onClick={this.handleClick} > 登录 </button>
                </div>
            </div>
        );
    }
});

module.exports = Login;