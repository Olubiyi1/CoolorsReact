import HeroOne from "../HeroPages/HeroOne.jsx"
import HeroThree from "../HeroPages/HeroThree.jsx";
import HeroTwo from "../HeroPages/HeroTwo.jsx"

const HomePage = () => {
    return ( 
        <main className="Homepage">
            <HeroOne/>
            <div className="HeroTwo">
                <HeroTwo/>
            </div>
            <HeroThree/>

        </main>
     );
}
 
export default HomePage;