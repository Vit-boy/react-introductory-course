import React from 'react'

class CommentTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    this.props.onAddComment(this.state.value)
    this.setState({
      value: ''
    })
    event.preventDefault()
  }

  handleDelete(event) {
    this.props.onDelComment()
    event.preventDefault()
  }

  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入内容"
            value={this.state.value}
            onChange={this.handleChange}
          />
          {/* <input
            type="text"
            className="form-control"
            placeholder="非控制组件"
            ref={(textInput) => {this.textInput = textInput}}
          /> */}
        </div>
        <button type="submit" className="btn btn-primary">
          留言
        </button>
        <button type="button" className="btn btn-danger" onClick={this.handleDelete}>
          删除
        </button>
        <p>已有{this.props.commentsLength}条评论</p>
      </form>
    )
  }
}

export default CommentTool