/*
    结合jquery
    ajax获取数据
*/
var Search = React.createClass({
    getInitialState(){
        return {}
    },
    handleChange(e){
        var value = e.target.value;
        
        $.ajax({
            url: 'http://www.baidu.com/su',
            type: 'GET',
            data: {wd: value},
            dataType: 'jsonp',  //让服务器返回的数据类型
            jsonp: 'cb',        //重写回调函数的名字
            context: this,  //指定回调中的this指针
            processData: true,      //把参数对象序列化成查询字符串追加到url后面
            success: function (result) {
                var data = result.s;

                data = data.map(function (item,index) {
                    return <li key={index}>{item}</li>
                });

                this.setState({content: data});
            }

        })
    },
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <ul>
                    {this.state.content}
                </ul>
            </div>
        )
    }
});

ReactDOM.render(
    <Search />,
    document.querySelector('#app')
);