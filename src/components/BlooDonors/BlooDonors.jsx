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
        
        <TeamCard link="https://docs.google.com/spreadsheets/d/1cBgW98ML3g-92rT4ZoDuEVy9gkx2nLZh/edit?usp=drive_link&ouid=109828288096250204998&rtpof=true&sd=true" text="O+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1RaRGpoxWt7nOSermKJC1uZeET6HT6uAs/edit?usp=drive_link&ouid=109828288096250204998&rtpof=true&sd=true" text="O-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/12X7FXlXnDc2xI0VGGRJNBWwZDAzljBr5/edit?usp=drive_link&ouid=109828288096250204998&rtpof=true&sd=true" text="A+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1Gs-0UWQ-9DEeJHWurRNYCtln8ls1LbFz/edit?usp=drive_link&ouid=109828288096250204998&rtpof=true&sd=true" text="A-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1uLH1kmFP9zlns8GmlpGcp_OUD1kjy88s/edit?usp=drive_link&ouid=109828288096250204998&rtpof=true&sd=true" text="B+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1yqXCz-C5k242Fw3IM3KEXhaZfeCOdvhl/edit?usp=drive_link&ouid=109828288096250204998&rtpof=true&sd=true" text="B-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1gUpSCn5j-dTmpAh7lXKHiVGFCaccN3l4/edit?usp=drive_link&ouid=109828288096250204998&rtpof=true&sd=true" text="AB+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1JEEPyg35os7N8jVt9gGWo3FeaFi9yHIB/edit?usp=drive_link&ouid=109828288096250204998&rtpof=true&sd=true" text="AB-ve" />
      </div>

      <h4 className="topm">For Blood Contact:</h4>
      <div className="d-flex justify-content-around">
      
      <Phone name="T. Pranit: " number="8369955973" />
    
      <Phone name="B. Balaji: " number="8328116813" />
      
      </div>

      
    </div>
  );
}

export default BlooDonors;
