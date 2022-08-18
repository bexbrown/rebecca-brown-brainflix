import "./Main.scss";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import Info from "../Info/Info";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import currentData from "../../data/video-details.json";
import nextData from "../../data/videos.json";
import { useState } from "react";

function Main() {

    const [currentVideo, setCurrentVideo] = useState(currentData[0]);

    const handleCurrentVideo = (clickedId) => {
        const selectedVideo = currentData.find((data) => data.id === clickedId);

        setCurrentVideo(selectedVideo);
    }


    return (
        <main className="main">
            <CurrentVideo image={currentVideo.image} />,
            <div className="main__content">
                <div className="main__comments">
                    <Info
                        data={currentVideo}
                    />,
                    <Comments
                        data={currentVideo}
                    />
                </div>
                <NextVideos videos={nextData} handleCurrentVideo={handleCurrentVideo} />
            </div>
        </main>
    )
}

export default Main; 