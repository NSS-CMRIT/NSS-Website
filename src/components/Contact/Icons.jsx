import React from "react";
import './Contact.css';



function Instagram(){
    
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "9rem"}}>
            <i  className="bi bi-instagram ii card-img-top rounded-circle "></i>
            <div className="card-body">
            <a href="https://www.instagram.com/cmrit.nss/"><p className="para ">@nss.cmrit</p><i class="bi bi-instagram sizes left"></i></a>
            </div>
        </div>
    </div>;
}

function Email(){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "10rem"}}>
            <i  className="bi bi-envelope  ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">@cmrit.nssunit12@gmail.com</p>
            </div>
        </div>
    </div>;
}
function Youtube(){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "9rem"}}>
            <i  className="bi bi-youtube  ii card-img-top rounded-circle "></i>
            <div className="card-body">
            <a href="https://www.youtube.com/channel/UCmj-6V2rmxaFsGB1KB6CAyA/featured"><p className="para ">@cmrit_nss</p><i class="bi bi-twitter sizes right"></i></a>
            </div>
        </div>
    </div>;
}
function Twitter(){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "9rem"}}>
            <i  className="bi bi-twitter  ii card-img-top rounded-circle "></i>
            <div className="card-body">
            <a href="https://twitter.com/cmrit_nss?s=11&t=1prFEDQ3duNaIRMkn0TuLQ"><p className="para ">@cmrit_nss</p><i class="bi bi-twitter sizes right"></i></a>
            </div>
        </div>
    </div>;
}
function Instagram1(){
    
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "10rem"}}>
            <i  className="bi bi-instagram ii card-img-top rounded-circle "></i>
            <div className="card-body">
            <a href="https://www.instagram.com/eco_club_telangana/"><p className="para ">@eco_club_telangana</p><i class="bi bi-instagram sizes left"></i></a>
                
            </div>
        </div>
    </div>;
}
function Phone(props){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "10rem"}}>
            <i  className="bi bi-phone  ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">{props.name}{props.number}</p>
            </div>
        </div>
    </div>;
}

export {Instagram,Email,Youtube,Twitter,Instagram1,Phone};