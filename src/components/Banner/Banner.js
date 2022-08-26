import "./Banner.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/BrainFlix-logo.svg";


function Banner() {
    return (
        <div className="banner">
            <div className="banner__container">
                <Link to="/" className="banner__link">
                    <img src={Logo} alt="brainflix logo" className="banner__logo" />
                </Link>
                <div className="banner__content">
                    <span className="banner__text">Your video uploaded sucessfully!</span>
                    <Link to="/" className="banner__button">
                        Go to videos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;