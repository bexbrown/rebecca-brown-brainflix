import './App.scss';
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import Info from "./components/Info/Info";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import data from "./data/video-details.json";
import { v4 as uuid } from 'uuid';

function App() {

  console.log(data);
  return (

    <>
      <Header />
      <CurrentVideo
        image={data[0].image}
      />,
      <Info
        key={uuid()}
        title={data[0].title}
        channel={data[0].channel}
        description={data[0].description}
        views={data[0].views}
        likes={data[0].likes}
        timestamp={data[0].timestamp}
      />
      <Comments />
      <NextVideos />
    </>
  );
}

export default App;
