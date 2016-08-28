/**
 * React组件定义模型
 */
var React = require("react");
var CommentBox = React.createClass({
    /**
     * 组件初始化 ，当前组件需要使用的数据初始化。
     * 通过this.props从父级传递过来的数据除外
     * @returns {{data: string}}
     */
    getInitialState: function(){
        return {
            data:''
        }
    },
    /**
     * 该方法是在上述方法之后调用，它会在react组件即将插入DOM时被调用，
     */
    componentWillMount:function(){

    },
    /**
     * 这个方法是第三个被调用，
     * 它在React将组件插入到Dom之后立即被调用，更新后的Dom现在可以被访问
     * 这意味着这个方法是初始化其他需要访问这些Dom的Javascript库的最佳地方
     */
    componentDidMount:function(){
        $.ajax({
            url:'',
            dataType:'json',
            success:function(data){
                //修改state初始化数据
                this.setState({
                    data:data
                });

            }.bind(this)
        });
    },
    /**
     * 渲染阶段 将数据模板混合数据输出到页面上
     * @returns {XML}
     */
    render:function(){
        return (
            <h1>this.state.data</h1>
        );
    },
    /**
     * 在React即将从DOM中删除并销毁组件之前被调用，对于清理组件或者
     * 在安装或者更新阶段创建的数据， 这个方法很有用。
     */
    componentWillUnmount:function(){

    }
});


