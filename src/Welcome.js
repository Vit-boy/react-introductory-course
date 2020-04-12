import React from 'react'

class Welcome extends React.Component {
  render() {
    const todoList = ['Learn React', 'Learn Redux']
    const isLogin = true
    const str = '哈哈哈'
    const test = <h1> Hello Jiaan</h1>
    console.log(test)

    return (
      <div className="this" htmlFor="">
        <h1> Hello React </h1>
        {'viking'}<br />
        {12 + 34}<br />
        {[1, 2, 3]}<br />
        {<p>this is new</p>}
        <ul>
          {
            todoList.map(item =>
              <li>{item}</li>
            )
          }
        </ul>
        { isLogin ? <p>{str} + 你已经登录</p> : <p>请登录</p>}
      </div>
    )
  }
}

export default Welcome