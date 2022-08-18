import "./Comment.scss";

function Comment(props) {
    return (
        <div className="comment">
            <span className="comment__image"></span>
            <div className="comment__div">
                <div className="comment__heading">
                    <h2 className="comment__name">{props.comments.name}</h2>
                    <span className="comment__date">{props.comments.date}</span>
                </div>
                <p className="comment__text">{props.comments.comment}</p>
            </div >
        </div>
    )
}

export default Comment;