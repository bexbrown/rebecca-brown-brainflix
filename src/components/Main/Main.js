import "./Main.scss";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import Info from "../Info/Info";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import currentData from "../../data/video-details.json";
import nextData from "../../data/videos.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Main() {

    const API_URL = "https://project-2-api.herokuapp.com/videos/";
    const API_KEY = "?api_key=a35b16e2-add7-4cee-ab5b-bdab22f566ec";

    const { id } = useParams();

    const [currentVideo, setCurrentVideo] = useState(currentData[0]);

    useEffect(() => {
        axios
            .get(API_URL + id + API_KEY)
            .then(videoResponse => {
                setCurrentVideo(videoResponse.data);
            });
    }, [id]);



    // const handleCurrentVideo = (clickedId) => {

    //     const selectedVideo = currentData.find((data) => data.id === clickedId);
    //     console.log("this:", selectedVideo.id);
    //     setCurrentVideo(selectedVideo);
    // }

    const filteredVideos = nextData.filter((video) => video.id !== currentVideo.id)

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