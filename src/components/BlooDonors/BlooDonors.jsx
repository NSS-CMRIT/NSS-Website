import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import Team from "../Team/Team";
import "./BlooDonors.css";
import { Link } from "react-router-dom";


function BlooDonors() {
  return (
    <div className="BlooDonors">
      <h4>Blood Donors</h4>
      <hr></hr>
      <div className="row">
        
        <TeamCard link="" text="O+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1U6l6NnEQhWZUcnbx-zBGSnHY0hb-Peo0/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="O-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/19R9xoegcdX4gfvwjeCEVt4ZjywKEEw61/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="A+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1walyP1eE2V5eP6CuD1oWikhYBzEfM9-n/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="A-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1kO_qSAyzP73udzhlQTu_RBRhOyT2bqGy/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="B+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1taLXSh63-qpqi5ZtRQ352U0QbDlmSyzy/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="B-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1g7HhH4dglklq-ya7dzr58YDIHUX9XYhQ/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="AB+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1Jl4wJ1vOH9r2TpkY2-14Zkw8syksCa9_/edit?usp=share_link&ouid=111143533313144970021&rtpof=true&sd=true" text="AB-ve" />
      </div>

      
    </div>
  );
}

export default BlooDonors;
