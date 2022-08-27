import "./Upload.scss";
import { Link } from "react-router-dom";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import Banner from "../Banner/Banner";
import { useState } from "react";




function Upload() {

    const [uploadStatus, setUploadStatus] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        setUploadStatus(true);
    }

    return (
        <>
            <section className="upload">
                <h1 className="upload__title">Upload Video</h1>

                <form className="upload__form"
                    onSubmit={submitHandler} >
                    <div className="upload__container">
                        <div className="upload__media">
                            <h2 className="upload__subheading">Video Thumbnail</h2>
                            <img src={uploadImage} alt="video upload preview" className="upload__image" />
                        </div>
                        <div className="upload__content">
                            <div className="upload__formfields">
                                <label htmlFor="title" className="upload__subheading">Title your video</label>
                                <input type="text" name="title" id="title" placeholder="Add a title to your video" className="upload__input--title" />
                                <label htmlFor="description" className="upload__subheading">Add a video description</label>
                                <textarea name="description" id="description" className="upload__input--description" placeholder="Add a description to your video"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="upload__buttons">
                        <input
                            type="submit"
                            name="submit"
                            value="Publish"
                            className="upload__button"
                        />

                        <Link to="/" className="upload__link">
                            Cancel
                        </Link>
                    </div>

                </form>

            </section >

            {uploadStatus && <Banner className="banner" />}
        </>

    )
}

export default Upload;