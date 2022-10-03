import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import Heading from "./Heading";
import "./JobRow.css";
import facebook from '../assets/images/facebook.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg'

function Details() {

  // const {id} = useParams();

const [jobsDetailsData, setJobsDetailsData]=useState();

const getDetailsData=async()=>{
  const resp = await axios.get("https://demo.jobsoid.com/api/v1/jobs")

setJobsDetailsData(resp.data)
console.log("details",resp.data);
}
useEffect=(()=>{
  getDetailsData();
},[])

// const getDetailsData=async(id)=>{
//   const resp = await axios.get(`https://demo.jobsoid.com/api/v1/jobs/${id}`);
//   setJobsDetailsData(resp.data);
//   console.log("details",resp.data);
// }

// useEffect=(()=>{
//   getDetailsData(id);
// },[id])

  return (
    <>
    <div className="main_wrapper"> <div className="details-main">
       
       </div>
       <div className="job_row mt-4">
         <div className="row">
           <h5>Development Department at Teknorix System Goa</h5>
           <div className="col-6 left">
             <h1>Job Title</h1>
             <div className="details">
               <span className="qa">Developpment </span>
               <span className="location">Verna, Goa</span>
 
               <label className="timing" htmlFor="#">
                 Type
               </label>
             </div>
             <div className="col-6 right">
               <button className="button_color">Apply</button>
             </div>
           </div>
         </div>

         <hr/>
 
         <div className="row">
           <div className="col-8">
           <h2> unable to fetch details api </h2>
             {/* <div className="description"   dangerouslySetInnerHTML={{__html: jobsDetailsData}}>
                     
                     
             </div> */}
           </div>
           <div className="col-4">
             <div className="side_card">
               <Heading text='Other Job Opening'/>
               <div className=" left mt-4">
             <h4 className='w-100'>Quality Assurance Analyst</h4>
             <div className="details mt-3 w-100">
               <span className="qa">Quality Assurance</span>
               <span className="location ">Verna Goa</span>
              
             
             </div>
           </div>
 
             </div>
             <div className="social mt-4 d-flex " style={{
              columnGap:'50px'
             }}>
           <div>
             
             <img src={facebook} alt="" />
           </div>
           <div>
           <img src={linkedin} alt="" />
           </div>
           <div>
           <img src={twitter} alt="" />
           </div>
         </div>
           </div>
         </div>
       
       </div></div>
     
    </>
  );
}

export default Details;
