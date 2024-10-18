import LogoProps from "../../Component/Reuseable/LogoProps";
import Disney from "../../assets/Imagess/disney.svg"
import Dreamworks from "../../assets/Imagess/dreamworks.svg"
import Warner from "../../assets/Imagess/warner-bros.svg"
import Netflix from "../../assets/Imagess/netflix.svg"
import Airbnb from "../../assets/Imagess/airbnb.svg"
import Dropbox from "../../assets/Imagess/dropbox.svg"
import Hasbro from "../../assets/Imagess/Hasbro.png"
import Ubisoft from "../../assets/Imagess/ubisoft.svg"
import EA from "../../assets/Imagess/ea.svg"
import Apple from "../../assets/Imagess/apple.svg"
import Windows from "../../assets/Imagess/windows.png"
import "./HeroThree.css"


const HeroThree = () => {
    return ( 
        <div className="HeroThree">
            <h2 id="HeroThreeHeader">Used by 5+ million designers and by top companies</h2>
            <div className="HeroThreeImages">
                <LogoProps Imagees={Disney}/>
                <LogoProps Imagees={Dreamworks}/>
                <LogoProps Imagees={Warner}/>
                <LogoProps Imagees={Netflix}/>
                <LogoProps Imagees={Airbnb}/>
                <LogoProps Imagees={Dropbox}/>
                <LogoProps Imagees={Hasbro}/>
                <LogoProps Imagees={Ubisoft}/>
                <LogoProps Imagees={EA}/>
                <LogoProps Imagees={Apple}/>
                <LogoProps Imagees={Windows}/>
            </div>
        </div>
     );
}
 
export default HeroThree;