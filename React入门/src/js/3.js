//定义组件

var Message = React.createClass({
    render(){
        return <h1>Baby-贾斯汀·比伯{this.props.name}</h1>;
    }
});

ReactDOM.render(
    <Message name="github.com"/>,
    document.querySelector('#app')
);

