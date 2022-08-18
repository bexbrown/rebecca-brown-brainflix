import "./Comments.scss";
import CommentsHeader from "../CommentsHeader/CommentsHeader";
import Comment from "../Comment/Comment";


function Comments(props) {

    let comments = props.data.comments

    return (
        <section className="comments">
            <CommentsHeader />
            <Comment comments={comments[0]} />
            <Comment comments={comments[1]} />
            <Comment comments={comments[2]} />
        </section>
    )
}

export default Comments;