import "./CommentsHeader.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
// import useState from "react";


function CommentsHeader({ numOfComments, postComment }) {


    // const [formIsValid, setFormIsValid] = useState(true);

    function formValidation(event, postBody) {
        if (event.target.comment.value.length < 2) {
            event.target.comment.classList.add("comments-header__input--invalid");
            return;
        } else {
            event.target.comment.classList.remove("comments-header__input--invalid");
        }
        postComment(postBody);
        event.target.reset();
    }

    function submitHandler(event) {
        event.preventDefault();

        let comment = event.target.comment.value;
        let name = 'BrainFlix User';
        let postBody = {
            "name": name,
            "comment": comment,
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
                            className="comments-header__input"
                            name="comment"></textarea>
                        <input type="submit" value="Comment" className="comments-header__button" />
                    </form>


                </div>
            </div>
        </section>
    )
}


export default CommentsHeader;