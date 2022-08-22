import "./Comment.scss";
import createTimestamp from "../utility/utils";

function Comment({ comment }) {
    return (
        <div className="comment">
            <span className="comment__image"></span>
            <div className="comment__div">
                <div className="comment__heading">
                    <h2 className="comment__name">{comment.name}</h2>
                    <span className="comment__date">{createTimestamp(comment.timestamp)}</span>
                </div>
                <p className="comment__text">{comment.comment}</p>
            </div >
        </div>
    )
}

export default Comment;