import './App.scss';
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  // const [currentVideo, setCurrentVideo] = useState(null);
  // const [nextVideos, setNextVideos] = useState([]);

  // setCurrentVideo = { setCurrentVideo } setNextVideos = { setNextVideos } currentVideo = { currentVideo } nextVideos = { nextVideos }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:id" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;