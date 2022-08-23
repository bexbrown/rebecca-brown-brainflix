import './App.scss';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/upload" element={<UploadPage />}/>
        <Route path="/upload/:videoId" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
