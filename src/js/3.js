//定义组件

var Message = React.createClass({
    render(){
        return <h1>Baby-贾斯汀·比伯</h1>;
    }
});

ReactDOM.render(
    <Message/>,
    document.querySelector('#app')
);