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
    handleClick(){

        console.log(this.refs.msg.value);
        this.refs.msg.focus();
        
    },
    render(){
        return (
           <div>
               <input type="text" ref="msg" value={this.props.value} onChange={this.handleClick}/>
               <button onClick={this.handleClick}>获取</button>
           </div>
        )
    }
});

ReactDOM.render(
    <Focus value="哈哈"/>,
    document.getElementById('app')
);