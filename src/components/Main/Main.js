import "./Main.scss";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import Info from "../Info/Info";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "../NotFound/NotFound";
import Loading from "../Loading/Loading";

function Main() {

    const API_URL = "https://project-2-api.herokuapp.com/videos/";
    const API_KEY = "?api_key=a35b16e2-add7-4cee-ab5b-bdab22f566ec";

    const { id } = useParams();

    const [currentVideo, setCurrentVideo] = useState(null);
    const [nextVideos, setNextVideos] = useState([]);
    const [errorStatus, setErrorStatus] = useState(false);
    const [commentPosted, setCommentPosted] = useState(false);


    const postComment = (postBody) => {

        let currentVid = currentVideo;

        axios
            .post(API_URL + currentVideo.id + "/comments" + API_KEY, postBody)
            .then(response => {
                let comment = response.data;

                let commentArray = [];
                currentVideo.comments.map((comment) => {
                    return commentArray.push(comment);
                })
                currentVid.comments.push(comment);
                setCurrentVideo(currentVid);
                setCommentPosted(true);

            })

            .catch(error => {
                setErrorStatus(true);
            })
        setCommentPosted(false);
    }

    useEffect(() => {

        axios
            .get(API_URL + API_KEY)
            .then(videosResponse => {
                setNextVideos(videosResponse.data);

                if (!id) {
                    axios
                        .get(API_URL + videosResponse.data[0].id + API_KEY)
                        .then(videoResponse => {
                            setCurrentVideo(videoResponse.data);

                        })
                        .catch(error => {
                            setErrorStatus(true);
                        })
                }
                else {
                    axios
                        .get(API_URL + id + API_KEY)
                        .then(videoResponse => {
                            setCurrentVideo(videoResponse.data);

                        })
                        .catch(error => {
                            setErrorStatus(true);
                        })
                }
            })
            .catch(error => {
                setErrorStatus(true);
            })
    }, [id, commentPosted]);

    if (!currentVideo) {
        return (
            <Loading />
        )
    }

    if (!nextVideos) {
        return (
            <Loading />
        )
    }

    const filteredVideos = nextVideos.filter((video) => video.id !== currentVideo.id)

    return (
        <main className="main">
            {errorStatus && <NotFound />}

            <CurrentVideo image={currentVideo.image} />

            <div className="main__content">
                <div className="main__comments">
                    <Info
                        currentVideo={currentVideo}
                    />,
                    <Comments
                        currentVideo={currentVideo}
                        postComment={postComment}
                    />
                </div>
                <NextVideos videos={filteredVideos} />

            </div>
        </main>
    )
}

export default Main; 