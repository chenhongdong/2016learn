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
        return {name: '╮(╯_╰)╭'}
    },
    handelClick(){
        this.setState({
            happy: !this.state.happy
        })
    },
    render(){
        var heart = this.state.happy ? '开心' : '不开森';
        return (
            <p>
                {this.props.name} {heart}<br/>
                <button onClick={this.handelClick}>变心</button>
            </p>
        )
    }
});

ReactDOM.render(
    <MM name="T-ara"/>,
    document.getElementById('app')
);