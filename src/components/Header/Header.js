import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
    function submitHandler(event) {
        event.preventDefault();
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__link">
                    <img src={Logo} alt="brainflix logo" className="header__logo" />
                </Link>
                <form className="header__form"
                    onSubmit={submitHandler}

                >
                    <div className="header__div">
                        <input type="text" name="search" className="header__input" placeholder="Search" />
                        <img className="header__image header__image--mobile" src={Avatar} alt="avatar" />
                    </div>

                </form>
                <Link to="/upload" className="header__button">
                    Upload
                </Link>
                <img className="header__image header__image--tablet" src={Avatar} alt="avatar" />
            </div>
        </header >
    )
}

export default Header;