Develop_book
author : Fengyun
Date: 2016-08-21
/***************************/

npm install -g react-tools
安装React开发工具包 包括Reactjs  jsx文件解析等

npm install -g webpack
使用webpack 打包机制

npm install babel-loader babel-core babel-preset-es2015 --save-dev
安装babel-loader插件 ，主要处理jsx语法

$ npm install babel-preset-react --save-dev
$ npm install babel-preset-stage-0 --save

npm install --save-dev browserify react reactify react-dom
下载react 开发需要的组件包



2 使用路由
文档  http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu

2.1 安装路由
$ npm install react-router --save-dev
2.2 载入路由组件
import { Router } from 'react-router';
2-3 路由组件定义

<Router history={hashHistory}>
  <Route path="/" component={App}/>
  <Route path="/repos" component={Repos}/>
  <Route path="/about" component={About}/>
</Router>

2-4 路由嵌套
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Route>
</Router>

子路由单独传入
let routes = <Route path="/" component={App}>
  <Route path="/repos" component={Repos}/>
  <Route path="/about" component={About}/>
</Route>;

<Router routes={routes} history={browserHistory}/>

2-5 path属性  路由匹配规则定义
<Route path="inbox" component={Inbox}>
   <Route path="messages/:id" component={Message} />
</Route>

2-6 路由的统配规则
<Route path="/hello/:name">
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/hello(/:name)">
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/files/*.*">
// 匹配 /files/hello.jpg
// 匹配 /files/hello.html

<Route path="/files/*">
// 匹配 /files/
// 匹配 /files/a
// 匹配 /files/a/b

<Route path="/**/*.jpg">
// 匹配 /files/hello.jpg
// 匹配 /files/path/to/file.jpg

2-7 IndexRoute组件

2-8 Redirect组件
<Redirect>组件用于路由的跳转，即用户访问一个路由，会自动跳转到另一个路由。

<Route path="inbox" component={Inbox}>
  {/* 从 /inbox/messages/:id 跳转到 /messages/:id */}
  ＜Redirect from="messages/:id" to="/messages/:id" />
</Route>

2-9 IndexRedirect组件
IndexRedirect组件用于访问根路由的时候，将用户重定向到某个子组件。
<Route path="/" component={App}>
  ＜IndexRedirect to="/welcome" />
  <Route path="welcome" component={Welcome} />
  <Route path="about" component={About} />
</Route>

2-10 link 组件 跳转
Link组件用于取代<a>元素，生成一个链接，允许用户点击后跳转到另一个路由。
它基本上就是<a>元素的React 版本，可以接收Router的状态。

render() {
  return <div>
    <ul role="nav">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/repos">Repos</Link></li>
    </ul>
  </div>
}

如果希望当前的路由与其他路由有不同样式，这时可以使用Link组件的activeStyle属性。

<Link to="/about" activeStyle={{color: 'red'}}>About</Link>
<Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link>

另一种做法是，使用activeClassName指定当前路由的Class。

<Link to="/about" activeClassName="active">About</Link>
<Link to="/repos" activeClassName="active">Repos</Link>

2-11 IndexLink
如果链接到根路由/，不要使用Link组件，而要使用IndexLink组件。
这是因为对于根路由来说，activeStyle和activeClassName会失效，
或者说总是生效，因为/会匹配任何子路由。而IndexLink组件会使用路径的精确匹配。

<IndexLink to="/" activeClassName="active">
  Home
</IndexLink>

另一种方法是使用Link组件的onlyActiveOnIndex属性，也能达到同样效果。
<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
  Home
</Link>



