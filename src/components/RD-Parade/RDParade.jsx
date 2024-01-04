import React from "react";
import Card from "../Card/Card";
import PicsCard from "./PicsCard";
import "./RDParade.css";

function Awards() {
  return (
    <div className="awards">
      <h2>REPUBLIC DAY PARADE</h2>
      <hr></hr>
      <div className="row ">
        <div className="col-lg-4 center">
          <Card
            img="../images/RD-Parade/1.jpg"
            title=" T. Akhila  "
            text2= " Participated in Republic Day Parade 2018 at Rajpath, New Delhi  "
          />
        </div>
        <div className="col-lg-4 center">
          <Card
            img="../images/RD-Parade/19.jpg"
            title=" Swaraj Yadav"
            text2= " Participated in Pre Republic Day Parade 2019 at Hema Chandracharya North Gujrath University (HNGU), Gujrath Patan "
          />
        </div>
        <div className="col-lg-4 center">
          <Card
            img="../images/RD-Parade/24.jpg"
            title=" Kanuri Jaya Arpitha "
            text2= " Participated in Republic Day Parade 2018 at Rajpath, New Delhi  "
          />
        </div>
        <div className="col-lg-4 center">
          <Card
            img="../images/RD-Parade/14.jpg"
            title=" Gattu Kritika  "
            text2= " Participated in West Zone NSS Pre-Republic Day Parade Camp - 2023 held at KL University, Vaddeswaram Andhra Pradesh, 2023 "
          />
        </div>
        

  
        <div>
<PicsCard event=" PRE REPUBLIC DAY PARADE AT KL UNIVERSITY VIJAYAWADA 2023  "
        imga="../images/RD-Parade/15.jpg"
        imgb="../images/RD-Parade/16.jpg"
        imgc="../images/RD-Parade/17.jpg"
        imgd="../images/RD-Parade/18.jpg"
        />  
        </div>
  
        <div>
<PicsCard event=" REPUBLIC DAY PARADE AT RAJPATH NEW DELHI 2021  "
        imga="../images/RD-Parade/8.jpg"
        imgb="../images/RD-Parade/9.jpg"
        imgc="../images/RD-Parade/10.jpg"
        imgd="../images/RD-Parade/13.jpg"
        />  
        </div>
        <div>
<PicsCard event=" PRE REPUBLIC DAY PARADE AT HEMA CHANDRACHARYA NORTH GUJRATH UNIVERSITY (HNGU) GUJRATH PATAN  2019  "
        imga="../images/RD-Parade/20.jpg"
        imgb="../images/RD-Parade/21.jpg"
        imgc="../images/RD-Parade/22.jpg"
        imgd="../images/RD-Parade/23.jpg"
        />  
        </div>
        <div>
<PicsCard event=" REPUBLIC DAY PARADE AT RAJPATH NEW DELHI 2018 "
        imga="../images/RD-Parade/2.jpg"
        imgb="../images/RD-Parade/4.jpg"
        imgc="../images/RD-Parade/6.jpg"
        imgd="../images/RD-Parade/7.jpg"
        />  
        </div>
        
        
       
     
      
       
        
            
        </div>
        
        
            </div>
        
    
  );
  
}

export default Awards;
 