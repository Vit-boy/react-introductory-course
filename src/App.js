import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './component/NameCard'
import LikesButton from './component/LikesButton'
import DigitalClock from './component/DigitalClock'
import CommentBox from './component/CommentBox'

import CommentList from './component/CommentList'
import CommentTool from './component/CommentTool'

const tags = ['恐龙', '足球小子']

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply']
    }

    this.addComment = this.addComment.bind(this)
    this.delComment = this.delComment.bind(this)
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  delComment() {
    let newarr = this.state.comments.slice(0)
    this.setState({
      comments: newarr.slice(0,-1)
    })
  }

  render() {
    const { comments } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <NameCard name="jiaan.cui" number={15141177174} isHuman tags={tags} /> */}
        {/* <LikesButton /> */}
        {/* <DigitalClock /> */}
        {/* <CommentBox /> */}
        <CommentList comments={comments} />
        <CommentTool
          commentsLength={comments.length}
          onAddComment={this.addComment}
          onDelComment={this.delComment}
        />
      </div>
    );
  }
}

export default App;
