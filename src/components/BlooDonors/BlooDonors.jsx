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
        
        <TeamCard link="https://docs.google.com/spreadsheets/d/1mZAkqv9CaJ58yyu3Q5bsmBqC2Du--rQd/edit?usp=drive_link&ouid=109981406469423893781&rtpof=true&sd=true" text="O+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1mMhzhdePbXpDCBhfjDjHXB0pgOfJZX3b/edit?usp=drive_link&ouid=109981406469423893781&rtpof=true&sd=true" text="O-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1wOBYQguAh0va8gePUxRwnEqBluyLFfbd/edit?usp=drive_link&ouid=109981406469423893781&rtpof=true&sd=true" text="A+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1X3gH4PU1zoYZp9y1V41yalevXifh7VUK/edit?usp=drive_link&ouid=109981406469423893781&rtpof=true&sd=true" text="A-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1mz7H6s4nTvcjrmqUJqdMsdE2ZDBK14pS/edit?usp=drive_link&ouid=109981406469423893781&rtpof=true&sd=true" text="B+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1yCrOmzsw7sTSr6HZjX0R2v5WGu1LkHrn/edit?usp=drive_link&ouid=109981406469423893781&rtpof=true&sd=true" text="B-ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1nyIdDk4Zfv9dtZ5GFdw6l04V2vo0TLXp/edit?usp=drive_link&ouid=109981406469423893781&rtpof=true&sd=true" text="AB+ve" />
        <TeamCard link="https://docs.google.com/spreadsheets/d/1FGRmc0DoV0NchNzk09RhYiyqCHeGoY4j/edit?usp=drive_link&ouid=109981406469423893781&rtpof=true&sd=true" text="AB-ve" />
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
