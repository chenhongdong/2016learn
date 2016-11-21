/*
* 插件实现双向数据绑定
*   页面引入react-with-addons.js
* */

var Double = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState(){
        return {msg: '脉动回来'}
    },
    render(){
        return (
            <div>
                <input type="text" valueLink={this.linkState('msg')} />
                <p>{this.state.msg}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Double />,
    document.getElementById('app')
);