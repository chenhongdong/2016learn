/*
* mixin公共部分抽取出来，实现代码复用
* 把公用的功能写入mixin里，其他组件直接复用
* */

//可复用的部分，放入一个对象内
var Mix = {
    getInitialState(){
        return {count: 0}
    },
    componentWillUpdate(){
        console.log('更新前的准备工作')
    },
    handleClick(){
        this.setState({count: this.state.count + 1});
    }
};

var Counter1 = React.createClass({
    mixins: [Mix],
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>增加</button>
                {this.state.count}
            </div>
        )
    }
});

var Counter2 = React.createClass({
    mixins: [Mix],
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>增加2</button>
                {this.state.count}
            </div>
        )
    }
});

ReactDOM.render(
    <div>
        <Counter1/>
        <Counter2/>
    </div>,
    document.querySelector('#app')
);