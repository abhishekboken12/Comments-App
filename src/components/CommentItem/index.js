// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'
// import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachItem, onChangeLikeStatus, onDeleteContact} = props
  const {id, name, comment, isLiked, logoBackgroundColor} = eachItem
  const logo = name[0]
  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const commentTime = formatDistanceToNow(new Date())

  const onClickLikeButton = () => {
    onChangeLikeStatus(id)
  }

  const onClickDeleteButton = () => {
    console.log("hi")
    onDeleteContact(id)
  }

  return (
    <li className="comment-container">
      <div className="commenter-info-container">
        <span className={`logo ${logoBackgroundColor}`}>{logo}</span>
        <div className="name-time-comment-container">
          <div className="name-time-container">
            <p className="name">{name}</p>
            <p className="posted-time">{commentTime}</p>
          </div>
          <p className="comment-description">{comment}</p>
        </div>
      </div>
      <div className="interaction-container">
        <button className="like-button" onClick={onClickLikeButton}>
          <img src={likeImg} alt="like" />
          <span>Like</span>
        </button>
        <button className="delete-button" onClick={onClickDeleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-divider" />
    </li>
  )
}

export default CommentItem
