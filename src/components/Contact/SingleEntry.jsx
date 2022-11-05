import React from "react";
import './Contact.css';
import {Instagram,Email,Phone} from './Icons';
function SingleEntry()
{
    return<div className="container overflow-auto" style={{marginTop:"4%"}}>
    <div className="row">
    <div className='col'><Instagram /> </div>
    <div className='col'><Email  /></div>
    <div className='col'><Phone name=""  number="7732048815"/></div>
    </div>
  </div>;
}

export default SingleEntry;