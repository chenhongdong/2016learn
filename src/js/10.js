/*
* DOM操作
*
* */

var Focus = React.createClass({
    getInitialState(){
        return {
            value: 'o(>﹏<)o千万别'
        }
    },
    handelClick(){
        console.log(this.props.value)
        console.log(this.refs.msg.value);       //o(>﹏<)o千万别
        this.refs.msg.focus();
    },
    render(){
        return (
           <div>
               <input type="text" ref="msg" value={this.state.value}/>
               <button onClick={this.handelClick}>获取</button>
           </div>
        )
    }
});

ReactDOM.render(
    <Focus value="哈哈"/>,
    document.getElementById('app')
);