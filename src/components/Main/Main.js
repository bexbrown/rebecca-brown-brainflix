import "./Main.scss";
import Info from "../Info/Info"
import data from "../../data/video-details.json";
import { v4 as uuid } from 'uuid';


function Main() {
    console.log(data)

    return (
        // <CurrentVideo image={data[0].image} />,

        <Info
            key={uuid()}
            title={data[0].title}
            channel={data[0].channel}
            description={data[0].description}
            views={data[0].views}
            likes={data[0].likes}
            timestamp={data[0].timestamp}
        />
    )
}

export default Main;