/**
 * use login frame
 * 用户登录组件
 */

import React from 'react';
var Login =  React.createClass({
    render:function(){
        return (
                <div className="overline flo">
                    <h3 className="mod_title">注册</h3>
                    <div className="overline flo login_area">
                        <p><input type="text" name="username" placeholder="输入用户名" /></p>
                        <p> <input type="text" name="pwd" placeholder="输入密码" />
                           <span className="pos_pwd">获取验证码</span>
                   </p>
                    </div>
                    <div className="overline flo pad_lr_15">
                        <a  className="btn_normal" onClick={this._onLoad}>登录</a>
                    </div>
                </div>
        );
    },
    _onLoad:function(){
        console.log("jsx");

    },
    _ongetMessage:function(){

    }
});

module.exports=Login;
