/*
* 留言板
* */

var Canon = React.createClass({
    getInitialState(){
        return {
            tips: '请输入',
            msg: this.props.msg
        }
    },
    clear(){
        this.refs.text.value = '';
    },
    saveMsg(){
        this.state.msg.push( this.refs.text.value );

        //将消息保存在localStorage里
        localStorage.setItem('message', JSON.stringify(this.state.msg));

        //设置msg状态
        this.setState({
            msg: this.state.msg
        }, function() {
            this.refs.text.value = '';
        })

    },
    render(){
        var result = this.state.msg;
        return (
            <div>
                <h3>{this.props.title}</h3>
                <input type="text" ref="text" onClick={ this.clear } defaultValue={this.state.tips} />
                <button onClick={ this.saveMsg }>留言</button>
                <ul>
                    {
                        result.map( (item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
});


var data = {
    title: '脉动回来',
    msg: JSON.parse(localStorage.getItem('message')) || []
};

ReactDOM.render(
    <Canon {...data}/>,
    document.getElementById('app')
);