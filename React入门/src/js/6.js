/*
* 组件的状态  state
*   状态改变后会触发界面重新渲染
*
*   getInitialState 用来定义初始状态
* */

var MM = React.createClass({
    getInitialState(){
        return {happy: true}
    },
    getDefaultProps(){
        //添加默认属性，如果组件上的name没有，就显示return内容
        return {name: '╮(╯_╰)╭'}
    },
    handelClick(){
        //点击设置状态 happy取反
        this.setState({
            happy: !this.state.happy
        })
    },
    render(){
        var heart = this.state.happy ? '开心' : '不开森';
        var face = this.state.happy ? 'happy' : 'unhappy';
        return (
            <p>
                {this.props.name}<br/>
                <p className={face}>{heart}</p>
                <button onClick={this.handelClick}>变心</button>
            </p>
        )
    }
});

ReactDOM.render(
    <MM name="T-ara"/>,
    document.getElementById('app')
);