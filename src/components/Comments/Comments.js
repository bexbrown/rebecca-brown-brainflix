import "./Comments.scss";
import CommentsHeader from "../CommentsHeader/CommentsHeader";
import Comment from "../Comment/Comment";
import { v4 as uuid } from 'uuid';


function Comments({ currentVideo, postComment }) {

    let comments = currentVideo.comments;

    return (
        <section className="comments">
            <CommentsHeader
                numOfComments={currentVideo.comments.length}
                postComment={postComment} />
            {
                comments.map((comment) => {
                    return <Comment key={uuid()} comment={comment} />
                })
            }
        </section>
    )
}

export default Comments;