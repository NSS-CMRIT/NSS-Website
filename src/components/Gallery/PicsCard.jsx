import React from "react";
import SingleCard from "./SingleCard";


function PicsCard(props){
    return <div>
        <h4 style={{textAlign:"center"}}>
        {props.event}
        </h4>

        <SingleCard imga={props.imga} imgb={props.imgb} imgc={props.imgc} />
       
    </div>;
}

export default PicsCard;