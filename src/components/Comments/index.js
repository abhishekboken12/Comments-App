import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const initailCommentList = [
  {
    id: v4(),
    name: 'Abhishek Boken',
    comment: 'Hi my name is abhishek',
    isLiked: true,
    logoBackgroundColor: 'light-blue',
  },
]

class Comments extends Component {
  state = {
    commentList: initailCommentList,
    name: '',
    comment: '',
  }

  onChangeLikeStatus = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDeleteContact = id => {
   const {commentList} = this.state
   const newCommentList = commentList.filter(eachItem => {
    eachItem.id !== id
   })

   this.setState({commentList:newCommentList})
    
  }

  submitForm = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const logoBackgroundColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: v4(),
      name,
      comment,
      isLiked: false,
      logoBackgroundColor,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  inputName = event => {
    this.setState(prevState => ({
      name: event.target.value,
    }))
  }

  inputComment = event => {
    this.setState(prevState => ({
      comment: event.target.value,
    }))
  }

  commentItems = () => {
    const {commentList} = this.state

    return commentList.map(eachItem => (
      <CommentItem
        eachItem={eachItem}
        key={eachItem.id}
        onChangeLikeStatus={this.onChangeLikeStatus}
        onDeleteContact={this.onDeleteContact}
      />
    ))
  }

  render() {
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="comment-img-content-container">
            <div className="comment-content-container">
              <h1 className="title">Comments</h1>
              <p className="descreption">
                Say Something about 4.0 technologies
              </p>
              <form className="form-container" onSubmit={this.submitForm}>
                <input
                  className="name-input"
                  type="text"
                  placeholder="Your Name"
                  onChange={this.inputName}
                />
                <br />
                <textarea
                  className="comment-box"
                  placeholder="Your comment"
                  rows="8"
                  onChange={this.inputComment}
                />
                <br />
                <button type="submit" className="form-button">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr />
          <div className="comment-cout-container">
            <span className="counter">0</span>
            <p className="comment-descreption">Comments</p>
          </div>
          <ul className="comment-list">{this.commentItems()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
