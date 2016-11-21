/*
* 组件的属性
*
*   属性可以通过 this.props 取出
*   propTypes可以定义传入组件属性的名称和类型
*   getDefaultProps
*
* */

var Person = React.createClass({
    //类似于定义一个接口文档
    propTypes:{
        name: React.PropTypes.string.isRequired,
        age: React.PropTypes.number.isRequired,
        gender: React.PropTypes.string.isRequired
    },
    getDefaultProps(){
        return {name: '无名'}
    },
    render(){
        //属性可以通过属性对象this.props取出
        return (
            <h3>
                {this.props.name}
                {this.props.age}
                {this.props.gender}
            </h3>
        )
    }

});

var props = {
    name: 'chd',
    age: 18,
    gender: '男'
};

ReactDOM.render(
    <Person {...props} />,  //...   是解构赋值里的剩余属性特效，把未知属性批量提取出来
    document.querySelector('#app')
);

/*
* 举个栗子
* var { x, y, ...z } = { x: 1, y: 2, a: 4, b: 5 }
* x = 1
* y = 2
* z = {a: 4, b: 5}
* */