/*
* 组件的生命周期
*
*
* */

var MessageBox = React.createClass({
    getInitialState(){
        console.log('2-组件定义初始状态');
        return {
            count: 0
        }
    },
    getDefaultProps(){
        console.log('1-定义默认属性 会合并到this.props里')
    },
    componentWillMount(){
        console.log('3-在首次渲染前触发');
    },
    componentDidMount(){
        console.log('5-初始化渲染后立即调用一次');
    },
    componentWillUnmount(){
        console.log('9-在组件在DOM中移除的时候调用');
    },
    shouldComponentUpdate(newProps,newState){
        console.log('6-接收到新的props或者state，渲染前调用');
        if (newState.count > 10) return false;
        return true;
    },
    componentWillUpdate(){
        console.log('7-更新前的准备工作');
    },
    componentDidUpdate(){
        console.log('8-更新后触发');
    },
    killMySelf(){
        ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
    },
    doUpdate(){
        this.setState({
            count: this.state.count + 1
        });
    },
    render(){
        console.log('4-渲染');
        return (
            <div>
                <h1>计数： {this.state.count}</h1>
                <button onClick={this.killMySelf}>卸掉这个组件</button>
                <button onClick={this.doUpdate}>手动更新组件</button>
                <Submsg count={this.state.count} />
            </div>
        )
    }
});

var Submsg = React.createClass({
    componentWillReceiveProps(newProps){
        console.log('先：子组件在组件接到新的props时调用');
    },
    shouldComponentUpdate(newProps,newState){
        console.log('后：子组件在接收到新的props，渲染前调用');
        if (newProps.count > 5) return false;
        return true;
    },
    render(){
        return (
            <div>
                当前计数是：{this.props.count}
            </div>
        )
    }
});

ReactDOM.render(
    <MessageBox />,
    document.querySelector('#app')
);
