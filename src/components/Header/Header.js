import "./Header.scss";
import Logo from "../../assets/logos/BrainFlix-logo.svg";

function Header() {

    return (
        <header className="header">
            <a href="/" className="header__link">
                <img src={Logo} alt="brainflix logo" className="header__logo" />
            </a>
            <form className="header__form">
                <div className="header__div">
                    <span className="header__icon--search"></span>
                    <input type="text" name="search" className="header__input" placeholder="Search" />
                    <div className="header__image header__image--mobile"></div>
                </div>
                <div className="header__div">
                    <span className="header__icon--upload"></span>
                    <input type="submit" className="header__button" value="Upload" />

                    <div className="header__image header__image--tablet"></div>
                </div>
            </form>
        </header >
    )
}

export default Header;