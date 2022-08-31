// import {useParams, Navigation} from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

function HomePage({ currentVideo, setCurrentVideo, nextVideos, setNextVideos }) {

    return (
        <>
            <Header />
            <Main setCurrentVideo={setCurrentVideo} setNextVideos={setNextVideos} currentVideo={currentVideo} nextVideos={nextVideos} />
        </>
    )
}

export default HomePage;