import React from "react";
import "./JobRow.css";
import parse from "html-react-parser";
import { Link, useNavigate } from "react-router-dom";
import {useParam} from 'react';


const JobRow = (props) => {
  
  // const navigate = useNavigate(null);  

  return (
    <>
      <div className="job_row mt-5">
        <div className="row">

          <div className="col-6 left">
            <h4>{props.jobData.title}</h4>
            <div className="details mt-3">
              <span className="qa">{props.jobData.title}</span>
              <span className="location ">{props.jobData.location.title}</span>
             
              {props.jobData.type ?  <label className="timing" htmlFor="#">
             {props.jobData.type} 
              </label> : null}
            </div>
          </div>

          <div className="col-6 right d-flex justify-content-end">
            <button className="button_apply" >Apply</button>
            
            {/* <Link className="view" to={`/details/${props.jobData.id}`}>View</Link> */}
            <Link className="view" to='/details'>View</Link>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default JobRow;
