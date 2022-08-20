import "./Header.scss";
import Logo from "../../assets/logos/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {

    return (
        <header className="header" id="header">
            <a href="/" className="header__link">
                <img src={Logo} alt="brainflix logo" className="header__logo" />
            </a>
            <form className="header__form">
                <div className="header__div">
                    <input type="text" name="search" className="header__input" placeholder="Search" />
                    <img className="header__image header__image--mobile" src={Avatar} alt="avatar" />
                </div>
                <div className="header__div">
                    {/* <span className="header__icon--upload"></span> */}
                    <input type="submit" className="header__button" value="Upload" />

                    <img className="header__image header__image--tablet" src={Avatar} alt="avatar" />
                </div>
            </form>
        </header >
    )
}

export default Header;