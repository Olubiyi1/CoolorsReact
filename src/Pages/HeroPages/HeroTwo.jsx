import AppCards from "../../Component/Reuseable/AppCards";
import ImageOne from "../../Component/../assets/Imagess/apple.svg"
import ImageTwo from "../../Component/../assets/Imagess/android-logo-svgrepo-com.svg"
import ImageThree from "../../Component/../assets/Imagess/figma-svgrepo-com.svg"
import ImageFour from "../../Component/../assets/Imagess/chrome-svgrepo-com.svg"
import ImageFive from "../../Component/../assets/Imagess/adobe-svgrepo-com.svg"


const HeroTwo = () => {
    return ( 
        <section style={{display:"flex",gap:"50px",justifyContent:"center"}}>
            <AppCards Img={ImageOne}  AppName="iOS App" Desc="Create, browse and save palettes on the go." Hidden="View on the App Store" Styles="StylesOne"/>
            <AppCards Img={ImageTwo}  AppName="Andriod App" Desc="Thousands of palettes in your pocket." Hidden="View on the Play Store" Styles="StylesTwo"/>
            <AppCards Img={ImageThree}  AppName="Figma Plugin" Desc="All palettes right in your workspace." Hidden="Install Now" Styles="StylesThree"/>
            <AppCards Img={ImageFour}  AppName="Chrome Extension" Desc="Get and edit a palette every new tab." Hidden="Add to Chrome" Styles="StylesFour"/>
            <AppCards Img={ImageFive}  AppName="Adobe Extension" Desc="Use coolors with your favorite tools." Hidden="Download" Styles="StylesFive"/>
           
        </section>
     );
}
 
export default HeroTwo;
