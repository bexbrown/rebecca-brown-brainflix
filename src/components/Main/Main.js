import "./Main.scss";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import Info from "../Info/Info";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideo/NextVideo";
import currentData from "../../data/video-details.json";
import nextData from "../../data/videos.json";
// import { v4 as uuid } from 'uuid';

function Main() {

    console.log(nextData);

    return (
        <main className="main">
            <CurrentVideo image={currentData[0].image} />,
            <div className="main__content">
                <div className="main__comments">
                    <Info
                        // key={uuid()}
                        title={currentData[0].title}
                        channel={currentData[0].channel}
                        description={currentData[0].description}
                        views={currentData[0].views}
                        likes={currentData[0].likes}
                        timestamp={currentData[0].timestamp}
                    />,
                    <Comments
                    />
                </div>
                <NextVideos />
            </div>
        </main>
    )
}

export default Main; 