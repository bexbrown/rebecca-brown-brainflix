import "./CurrentVideo.scss";

function CurrentVideo({ image }) {
    console.log(image);


    return (
        <div className="video">
            <div className="video__container" >
                <video className="video__viewport" controls poster={image}>
                    <source src="" type="video/mp4" />
                </video>
            </div>
        </div>
    )

}

export default CurrentVideo;