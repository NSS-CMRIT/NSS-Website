import React from "react";
import './Media.css'

function Media(){
    return <div className="container border tp1 border-dark shadow-1-strong"> 
    <div className="row">
        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
            <img src="../images/media/media1.jpg" 
                className="rounded shadow-1-strong tp1 border border-dark"
                alt="images"
                // width={300}
            />
            <br></br>
            <img src="../images/media/media3.jpg" 
                className="rounded shadow-1-strong tp border border-dark sd"
                width={500}
                height={600}
                alt="images"
            />
            
        </div>

        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        <img src="../images/media/media2.jpg" 
                className="rounded shadow-1-strong border border-dark mr tp1"
                width={500}
                height={400}
                alt="images"
            />
            <img src="../images/media/media4.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
        </div>

        /* <div className="row">
        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        
        </div> */

        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        <img src="../images/media/media5.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
            <img src="../images/media/media6.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
        </div>
        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        <img src="../images/media/media7.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
            <img src="../images/media/media8.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
        </div>
        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        <img src="../images/media/media9.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
            <img src="../images/media/media10.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
        </div>
        <div className="col col-lg-6 col-sm-12 mb-4 mb-lg-0">
        <img src="../images/media/media11.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
            <img src="../images/media/media12.jpg" 
                className="rounded shadow-1-strong border border-dark tp1 bt"
                width={400}
                height={500}
                alt="images"
            />
        </div>
        </div>


    </div>
    </div>;
}

export default Media;

