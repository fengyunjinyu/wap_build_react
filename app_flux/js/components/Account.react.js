/**
 * creater by Fengyun
 * Account components
 */
import React from 'react';
var Account = React.createClass({
        render:function() {
            return (
                <header id="header">
                    <h1>todos</h1>
                </header>
            )
        },
        _onSave:function(text){
            console.log(text);
        }
    }
);

module.exports = Account;


