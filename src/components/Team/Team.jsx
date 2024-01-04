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
            img="../images/Coordinators/1.jpg"
            title=" Prof. P. Pavan Kumar "
            text2= " Cheif Organizer  "
          />
        </div>
        <div className="col-lg-6 space">
          <Card
            img="../images/Coordinators/2.jpg"
            title=" Mr. M. Sathish "
            text2="NSS PO Unit - I"
          />
        </div>
        <div className="col-lg-12 space">
          <Card
            img="../images/Coordinators/3.jpg"
            title="Ms. O. Nikhila"
            text2="NSS PO Unit - II"
          />
        </div>
        
        <div className="h4">
          {/*<h4>Student Coordinators:  </h4>*/}
        </div>
        <div className="row">
          <TeamCard link="/committeemembers" text="Committee Members" />

          {/* <TeamCard link="#" text="Batch 2020" />
          <TeamCard link="#" text="Batch 2019" />
          <TeamCard link="#" text="Batch 2018" /> */}
          
        </div>
        </div>
    </div>
  );
}

export default Team;
