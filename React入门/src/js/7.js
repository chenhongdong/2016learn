/*
* 表单元素双向数据绑定
* */

var Input = React.createClass({
    getInitialState(){
        return {value: '输入你喜欢的数字'}
    },
    handelChange(e){
        //e.target.value获取的是input的value值
        this.setState({
            value: e.target.value
        })
    },
    render(){
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handelChange} />
                <p>{value}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Input />,
    document.querySelector('#app')
);