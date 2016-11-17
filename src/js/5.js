/*
* this.props.children   组件的所有子节点
* 举个栗子
* 组件Man
*       在他里面有span,p,em这些都是他的子节点
* */

var Man = React.createClass({
    render(){
        console.log(this.props);
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>
                    })
                }
            </ol>
        )
    }
});

ReactDOM.render(
    <Man>
        <span>大毛</span>
        <span>二毛</span>
        <span>三毛</span>
        <p>Day by Day</p>
        <em ref="T-ara">T-ara</em>
    </Man>,
    document.querySelector('#app')
);