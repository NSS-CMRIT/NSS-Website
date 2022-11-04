import React from "react";
import './Contact.css';

function Instagram(){
    
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "18rem"}}>
            <i  className="bi bi-instagram ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">@nss.cmrit</p>
            </div>
        </div>
    </div>;
}

function Email(){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "18rem"}}>
            <i  className="bi bi-envelope  ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">cmrit.nssunit12@gmail.com</p>
            </div>
        </div>
    </div>;
}

function Phone(){
    return <div className="overflow-auto">
        <div className="card cards" style={{width: "18rem"}}>
            <i  className="bi bi-phone  ii card-img-top rounded-circle "></i>
            <div className="card-body">
                <p className="para ">98235674xx</p>
            </div>
        </div>
    </div>;
}

export {Instagram,Email,Phone};