import "./NextVideo.scss";

function addElipsis(title) {
    for(let i=32; i<title.length; i++){
        if (title[i] === " ") {
            return title.slice(0, i) + "...";
            }
    }
    }

function checkTitleLength(title) {
    for (let i=0; i<title.length; i++) {
        if (title.length < 40) {
            return title;
        } else {
            return addElipsis(title);
        }
    }
}

function NextVideo({ video, handleCurrentVideo }) {
    return (
        <section onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
            handleCurrentVideo(video.id);
        }} className="next-video">
            <img src={video.image} alt="next video placeholder" className="next-video__image" />
            <div className="next-video__content">
                <h2 className="next-video__title">{checkTitleLength(video.title)}</h2>
                <span className="next-video__channel">{video.channel}</span>
            </div>
        </section>
    )
}

export default NextVideo;