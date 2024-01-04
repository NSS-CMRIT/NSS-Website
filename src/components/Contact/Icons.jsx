import React from "react";
import './Contact.css';



function Instagram(){
    
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "12rem"}}>
            <i  className="bi bi-instagram ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">@nss.cmrit</p>
            </div>
        </div>
    </div>;
}

function Email(){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "12rem"}}>
            <i  className="bi bi-envelope  ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">@cmrit.nssunit12@gmail.com</p>
            </div>
        </div>
    </div>;
}
function Twitter(){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "12rem"}}>
            <i  className="bi bi-twitter  ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">@cmrit_nss</p>
            </div>
        </div>
    </div>;
}
function Instagram1(){
    
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "12rem"}}>
            <i  className="bi bi-instagram ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">@eco_club_telangana</p>
            </div>
        </div>
    </div>;
}
function Phone(props){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "12rem"}}>
            <i  className="bi bi-phone  ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">{props.name}{props.number}</p>
            </div>
        </div>
    </div>;
}

export {Instagram,Email,Twitter,Instagram1,Phone};