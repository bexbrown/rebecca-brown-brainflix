import Header from "../components/Header/Header";
import Upload from "../components/Upload/Upload";

function UploadPage({ currentVideo, setCurrentVideo, nextVideos, setNextVideos }) {
    return (
        <>
            <Header />
            <Upload setNextVideos={setNextVideos} />
        </>
    )
}

export default UploadPage;