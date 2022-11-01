import React from "react";
import SingleCard from "./SingleCard";

const  imgA="../images/awards/awards1.jpg";
function PicsCard(props){
    return <div>
        <h4 style={{textAlign:"center"}}>
        {props.event}
        </h4>

        <SingleCard imga={imgA} imgb={imgA} imgc={imgA} />
       
    </div>;
}

export default PicsCard;