import "./AppCards.css"

const AppCards = ({Img,AppName,Desc,Hidden,Styles}) => {
    return ( 
        <div className={`AppCards ${Styles}`}>
            <img src={Img} alt="" />
            <h1>{AppName}</h1>
            <p>{Desc}</p>
            <div id="Hidden">{Hidden}</div>
        </div>
     );
}
 
export default AppCards;