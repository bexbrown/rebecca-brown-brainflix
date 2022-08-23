// import {useParams, Navigation} from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

function HomePage(){

        // const { videoId } = useParams();
    // const video = videos.find((video) => video.id === videoId);

    // if (!video) {
    //     return <Navigate to="/"
    // }

    return (
        <>
            <Header />
            <Main />
        </>
    )
}

export default HomePage;