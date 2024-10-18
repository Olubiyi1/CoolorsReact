import "../HeroPages/HeroOne.css"
import ButtonProps from "../../Component/Reuseable/ButtonProps";
import HeroImg from "../../assets/Images/coolorsImg.png"
import Trophy from "../../assets/Imagess/trophy-svgrepo-com.svg"


const HeroOne = () => {
    return ( 
        <main className="HeroOne">
            <div className="LeftHero">
                <h1 id="Heading">The superfast <br />color palattes <br /> generator</h1>
                <p>Create the perfect palette or get inspired by <br /> thousands of beautiful color schemes.</p>
                <ButtonProps Name="Start the generator" Style="StyleTwo"/>
                <ButtonProps Name="Explore trending palette" Style="StyleThree"/>
                <ButtonProps Image={Trophy} Name="PRODUCT HUNT"  Para="#1 Product of the Month" Style="StyleFour"/>
            </div>
            <img src={HeroImg} alt="" id="HeaderImg"/>
        </main>
    );
}
 
export default HeroOne;
