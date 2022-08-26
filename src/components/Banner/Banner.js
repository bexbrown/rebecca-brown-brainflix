import "./Banner.scss";
import { Link } from "react-router-dom";


function Banner() {
    return (
        <div className="banner">
            <div className="banner__content">
                <span className="banner__text">Your video uploaded sucessfully!</span>
                <Link to="/" className="banner__button">
                    Go to videos
                </Link>
            </div>
        </div>
    )
}

export default Banner;