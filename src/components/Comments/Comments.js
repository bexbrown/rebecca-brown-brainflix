import "./Comments.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import Comment from "../Comment/Comment";

function Comments() {
    return (

        <section className="comments">
            <h2 className="comments__count">3 Comments</h2>
            <div className="comments__header">
                <img src={Avatar} alt="avatar"
                    className="comments__image comments__image--main" />
                <div className="comments__div">
                    <h2 className="comments__heading">Join the Conversation</h2>
                    <form action="" className="comments__form">
                        <textarea placeholder="Add a new comment" className="comments__input"></textarea>
                        <input type="submit" value="Comment" className="comments__button" />
                    </form>
                </div>
            </div>
        </section>,

        <Comment />


    )
}

export default Comments;