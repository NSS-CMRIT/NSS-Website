import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import Team from "../Team/Team";
import "./BlooDonors.css";
import {Instagram,Email,Phone} from "../Contact/Icons"
import { Link } from "react-router-dom";


function BlooDonors() {
  return (
    <div className="BlooDonors">
      <h4>Blood Donors</h4>
      <hr></hr>
      <div className="row">
        
        <TeamCard link="https://docs.google.com/spreadsheets/d/1ETpYgMUQjQwguUX2617p0p1a31Bi9PWo/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="O+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1U6l6NnEQhWZUcnbx-zBGSnHY0hb-Peo0/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="O-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/19R9xoegcdX4gfvwjeCEVt4ZjywKEEw61/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="A+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1walyP1eE2V5eP6CuD1oWikhYBzEfM9-n/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="A-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1kO_qSAyzP73udzhlQTu_RBRhOyT2bqGy/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="B+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1taLXSh63-qpqi5ZtRQ352U0QbDlmSyzy/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="B-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1g7HhH4dglklq-ya7dzr58YDIHUX9XYhQ/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="AB+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1Jl4wJ1vOH9r2TpkY2-14Zkw8syksCa9_/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="AB-ve" />
      </div>

      <h4 className="topm">For Blood Contact:</h4>
      <div className="d-flex justify-content-around">
      
      <Phone name="Ch.Sai Devika: " number="9618078483" />
    
      <Phone name="S. Jeethendra: " number="9160046715" />
      
      </div>

      
    </div>
  );
}

export default BlooDonors;
