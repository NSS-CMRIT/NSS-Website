import React from "react";
import './Contact.css';
import {Instagram1,Instagram,Email,Youtube,Phone, Twitter} from './Icons';
function SingleEntry()
{
    return<div className="container overflow-auto" style={{marginTop:"4%"}}>
    <div className="row">
     
    <div className='col'><Instagram /> </div>
    <div className='col'><Email  /></div>
    <div className='col'><Youtube /></div>
    <div className='col'><Twitter /> </div>
    <div className='col'><Instagram1 /> </div>
    <div className='col'><Phone name=""  number="9030518815"/></div>
    </div>
  </div>;
}

export default SingleEntry;