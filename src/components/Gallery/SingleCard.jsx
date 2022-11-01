import React from "react";


function SingleCard(props){
    return <div className="container">
      <div className="row">
       <div className="col"><img className="img-fluid rounded thumbnail" src={props.imga}></img></div>
       <div className="col"><img className="img-fluid rounded thumbnail" src={props.imgb}></img></div>
       <div className="col"><img className="img-fluid rounded thumbnail" src={props.imgc}></img></div>
      </div>   
    </div>
}

export default SingleCard;

