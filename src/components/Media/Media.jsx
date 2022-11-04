import React from "react";
import SingleCard from "../Gallery/SingleCard";
import './Media.css'

function Media(){
    return <div className="container border tp1 border-dark shadow-1-strong"> 
    <div className="row">
        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
            <img src="../images/media/media1.jpg" 
                className="rounded shadow-1-strong tp1 border border-dark"
            />
            <br></br>
            <img src="../images/media/media3.jpg" 
                className="rounded shadow-1-strong tp border border-dark sd"
                width={400}
            />
            
        </div>

        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        <img src="../images/media/media2.jpg" 
                className="rounded shadow-1-strong border border-dark mr tp1"
                width={500}
                height={800}
            />
        </div>

        <div className="row">
        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        <img src="../images/media/media4.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
            />
        </div>

        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        <img src="../images/media/media5.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt mr"
                width={500}
            />
        </div>
        </div>


    </div>
    </div>;
}

export default Media;

