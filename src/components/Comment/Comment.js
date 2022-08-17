import "./Comment.scss";

function Comment() {
    return (
        <div className="comment">
            <span className="comment__image"></span>
            <div className="comment__div">
                <div className="comment__heading">
                    <h2 className="comment__name">Michael Lyons</h2>
                    <span className="comment__date">09/08/2021</span>
                </div>
                <p className="comment__text">jkbkjfsb fdhkjfdsbk fdjkafdbkj fadjkfadbk fdanjfdkanfda dnjbak. jkbkjfsb fdhkjfdsbk fdjkafdbkj fadjkfadbk fdanjfdkanfda dnjbak jkbkjfsb fdhkjfdsbk fdjkafdbkj fadjkfadbk fdanjfdkanfda dnjbak.</p>
            </div>
        </div>
    )
}

export default Comment;