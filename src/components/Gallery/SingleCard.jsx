import React from "react";


function SingleCard(props){
    return <div className="container">
      <div className="row">
       <div className="col"><img className="img-fluid rounded thumbnail" src={props.imga} alt="imgA"></img></div>
       <div className="col"><img className="img-fluid rounded thumbnail" src={props.imgb} alt="imgB"></img></div>
       <div className="col"><img className="img-fluid rounded thumbnail" src={props.imgc} alt="imgC"></img></div>
      
      </div>   
    </div>
}

export default SingleCard;

