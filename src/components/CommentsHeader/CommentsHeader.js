import "./CommentsHeader.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";

function CommentsHeader({ numOfComments }) {
    return (
        <section className="comments-header">
            <h2 className="comments-header__count">{numOfComments} Comments</h2>
            <div className="comments-header__header">
                <img src={Avatar} alt="avatar"
                    className="comments-header__image comments-header__image--main" />
                <div className="comments-header__div">
                    <h2 className="comments-header__heading">Join the Conversation</h2>
                    <form action="" className="comments-header__form">
                        <textarea placeholder="Add a new comment" className="comments-header__input"></textarea>
                        <input type="submit" value="Comment" className="comments-header__button" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CommentsHeader;