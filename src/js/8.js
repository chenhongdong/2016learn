/*
* 复合组件
*   多个简单的组件嵌套，构成一个复杂的复合组件，从而完成复杂的交互逻辑
* */
var Panel = React.createClass({
    render(){
        console.log(this.props);
        return (
            <div className="panel panel-default">
                <PanelHead head={this.props.head} data={this.props.data}/>
                <br/>
                <PanelBody body={this.props.body}/>
            </div>
        )
    }
});

var PanelHead = React.createClass({
    render(){
        console.log(this.props);
        return (
            <div className="panel-heading" style={{float:"left"}}>
                {this.props.head}
                <div style={{float:"right"}}>
                    <InHead data={this.props.data}/>
                </div>
            </div>
        )
    }
});

var PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                {this.props.body}
            </div>
        )
    }
});

var InHead = React.createClass({
    render(){
        return (
            <div className="box" style={{color: 'red'}}>
                {this.props.data}
            </div>
        )
    }
});


ReactDOM.render(
    <Panel head="头部" body="正文" data="日不落"/>,
    document.querySelector('#app')
);
