import LogoImage from "../assets/Images/logo.svg"
import ButtonProps from "./Reuseable/ButtonProps";
import "./Header.css"
const Header = () => {
    return ( 
        <header>
            <img src={LogoImage} alt="logo" />
            <div className="rightNav">
                <a href="#">Tools</a>
                <a href="#" id="Animate">Go Pro</a>
                <a href="#" id="SignIn">Sign in</a>
                <ButtonProps Name="Sign Up" Style="StyleOne"/>
                
            </div>
        </header>
    );
}
 
export default Header;