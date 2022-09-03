import "./CommentsHeader.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import { useState } from "react";


function CommentsHeader({ numOfComments, postComment }) {

    const [inputClass, setInputClass] = useState("comments-header__input");
    const [isInvalid, setIsInvalid] = useState(false);

    function formValidation(event, postBody) {
        if (event.target.comment.value.length < 3) {
            setInputClass("comments-header__input--invalid");
            setIsInvalid(true);
            return;
        } else {
            setInputClass("comments-header__input");
            setIsInvalid(false);
        }
        postComment(postBody);
        event.target.reset();
    }

    function submitHandler(event) {
        event.preventDefault();
        let commentText = event.target.comment.value;
        let name = 'BrainFlix User';
        let postBody = {
            "name": name,
            "comment": commentText,
        }
        formValidation(event, postBody);
    }

    return (
        <section className="comments-header">
            <h2 className="comments-header__count">{numOfComments} Comments</h2>
            <div className="comments-header__header">
                <img src={Avatar} alt="avatar"
                    className="comments-header__image comments-header__image--main" />
                <div className="comments-header__div">
                    <h2 className="comments-header__heading">Join the Conversation</h2>
                    <form className="comments-header__form"
                        onSubmit={submitHandler}>
                        <textarea
                            placeholder="Add a new comment"
                            className={inputClass}
                            name="comment"></textarea>
                        <input type="submit" value="Comment" className="comments-header__button" />
                    </form>
                    {isInvalid && <span>Comment must be at least 3 characters.</span>}
                </div>
            </div>
        </section>
    )
}

export default CommentsHeader;