React组件开发
代码格式与规范

代码片段1
//a.js
var React = require('react');
var HelloWorldComponent = React.createClass({
  displayName: 'HelloWorldComponent',
  render: function() {
    return (<div>Hello world</div>);
  }
});
module.exports = HelloWorldComponent;

使用 Require('a.js');


代码片段2
//HelloWorldComponent.js
import React from 'react';
export default class HelloWorldComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (<div>Hello World</div>);
  }
}

其他组件中使用

import HelloWorldComponent from './HelloWorldComponent'





代码片段3
define(function( require ){
    var React = require('react');
    function App(){
        this.AppView = React.createClass({
              render: function () {
                return (
                  <div>
                    <p>Hello, React!</p>
                  </div>
                );
              }
            });
    }

    App.prototype.init = function () {
        React.render(<this.AppView />, document.body);
      };

    return App
})



