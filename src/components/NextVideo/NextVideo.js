import "./NextVideo.scss";

function NextVideo({ video, handleCurrentVideo }) {
    return (
        <section onClick={() => handleCurrentVideo(video.id)} className="next-video">
            <img src={video.image} alt="next video placeholder" className="next-video__image" />
            <div className="next-video__content">
                <h2 className="next-video__title">{video.title}</h2>
                <span className="next-video__channel">{video.channel}</span>
            </div>
        </section>
    )
}

export default NextVideo;