/**
 * creater by Fengyun
 * Account components
 */
import React from 'react';
var Account = React.createClass({
        render:function() {
            return (
                <div className="overline flo account_tab" >
                    <p>
                        <span>Hello</span><span className="active">Smater</span>
                    </p>
                </div>
            )
        },
        _onSave:function(text){
            console.log(text);
        }
    }
);

module.exports = Account;


