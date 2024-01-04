import React from "react";
import './Card.css';

function Card(props) {
  return (
    <div className="card wd">
      <div class="card wd">
        <div class="card-body ">
        <img class="card-img-top" src={props.img} alt="Card image cap"></img>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text1">
            {props.text1}
          </p>
          <p class="card-text2">
            {props.text2}
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
