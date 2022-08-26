import "./Main.scss";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import Info from "../Info/Info";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Main() {

    const API_URL = "https://project-2-api.herokuapp.com/videos/";
    const API_KEY = "?api_key=a35b16e2-add7-4cee-ab5b-bdab22f566ec";

    const { id } = useParams();

    const [currentVideo, setCurrentVideo] = useState(null);
    const [nextVideos, setNextVideos] = useState([]);


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
                }
                else {
                    axios
                        .get(API_URL + id + API_KEY)
                        .then(videoResponse => {
                            setCurrentVideo(videoResponse.data);
                        })
                }
            })
    }, [id]);

    if (!currentVideo) {
        return <p>Loading video...</p>
    }

    if (!nextVideos) {
        return <p>Loading videos...</p>
    }

    const filteredVideos = nextVideos.filter((video) => video.id !== currentVideo.id)

    return (
        <main className="main">

            <CurrentVideo image={currentVideo.image} />,

            <div className="main__content">
                <div className="main__comments">
                    <Info
                        currentVideo={currentVideo}
                    />,
                    <Comments
                        currentVideo={currentVideo}
                    />
                </div>
                <NextVideos videos={filteredVideos} />
            </div>
        </main>
    )
}

export default Main; 