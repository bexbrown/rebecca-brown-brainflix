import "./NextVideos.scss";
import NextVideo from "../NextVideo/NextVideo";

function NextVideos({ videos, handleCurrentVideo }) {

    return (
        <section className="next-videos">
            <h2 className="next-videos__heading">Next Videos</h2>

            {videos.map((video) => {
                return (
                    <NextVideo key={video.id} video={video} handleCurrentVideo={handleCurrentVideo}></NextVideo>
                )
            })};
        </section>
    )
}

export default NextVideos;