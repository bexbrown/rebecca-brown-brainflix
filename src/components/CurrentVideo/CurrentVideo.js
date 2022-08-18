import "./CurrentVideo.scss";

function CurrentVideo({ image }) {


    return (

        // <video width="320" height="240" controls poster={props.image}>
        //     <source src={props.video} type="video/mp4" />
        // </video>

        < div className="video" >
            <img src={image} alt="main video" className="video__image" />
        </div >
    )

}

export default CurrentVideo;