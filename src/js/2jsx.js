let persons = ['优酷土豆','爱奇艺','腾讯视频','搜狐视频'];
let style = {color : 'blue'}

ReactDOM.render(
    <div>
      {
        persons.map( person =>
          <div style={style}>Hello, {person}</div>
        )
      }
    </div>,
    document.getElementById('app')
);
