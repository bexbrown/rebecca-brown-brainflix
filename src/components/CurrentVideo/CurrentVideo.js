import "./CurrentVideo.scss";

function CurrentVideo(props) {

    return (
        // <video width="320" height="240" controls>
        //     <source src={props.video} type="video/mp4" />
        // </video>

        <div className="video">
            <img src={props.image} alt="main video" className="video__image" />
        </div>
    )

}

export default CurrentVideo;