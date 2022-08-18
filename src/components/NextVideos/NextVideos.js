import "./NextVideos.scss";
import NextVideo from "../NextVideo/NextVideo";

function NextVideos() {



    return (
        <section className="next-videos">
            <h2 className="next-videos__heading">Next Videos</h2>

            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />

        </section>
    )
}

export default NextVideos;