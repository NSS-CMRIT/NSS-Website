import React from "react";
import "./Team.css";
import Card from "../Card/Card";
import TeamCard from "../TeamCard/TeamCard";

function Team() {
  return (
    <div className="team">
      <h2>Teams</h2>
      <hr></hr>
      <div className="row">
        <div className="col-lg-6 space">
          <Card
            img="https://drive.google.com/uc?export=view&id=16CT9CtqFbFVtnQTtKq1iZPIpK8LUzVmN"
            title="Dr. P. Pavan Kumar"
            text="Cheif Organizer"
          />
        </div>
        <div className="col-lg-6 space">
          <Card
            img="https://drive.google.com/uc?export=view&id=164PoE7hLfTMuYKdfedHNGTfI877fBiXW"
            title="Mr.G. Nanda Gopal"
            text="NSS PO Unit - I"
          />
        </div>
        <div className="col-lg-12 space">
          <Card
            img="https://drive.google.com/uc?export=view&id=162QMQiR8kRIpwY39lkuYroqNoBMjtPq-"
            title="Ms. O. Nikhila"
            text="NSS PO Unit - II"
          />
        </div>
        
        <div className="h4">
          <h4>Student Coordinators:  </h4>
        </div>
        <div className="row">
          <TeamCard link="/2021" text="Committee Members" />
          {/* <TeamCard link="#" text="Batch 2020" />
          <TeamCard link="#" text="Batch 2019" />
          <TeamCard link="#" text="Batch 2018" /> */}
          
        </div>
        </div>
    </div>
  );
}

export default Team;
