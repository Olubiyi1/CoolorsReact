import "./ButtonProps.css"

const ButtonProps = ({Name,Image,Para,Style}) => {
    return ( 
       <div className={`BtnProps ${Style}`}>
        <img src={Image} alt="" />
        <div id="contentDiv">
          <p id="Nheader">{Name}</p> 
          <p id="Rank">{Para}</p>
        </div>
       </div>
     );
}
 
export default ButtonProps;