import axios from 'axios'
import React, { useEffect } from 'react'

const Dummy = () => {
    const getDetailsData=async()=>{
        const resp = await axios.get("https://demo.jobsoid.com/api/v1/jobs")
        .then((resp)=>{
            console.log(resp)
        })
      
    //   setJobsDetailsData(resp.data)
      }
    useEffect(()=>{
        getDetailsData();

    },[])
  return (
    <div>Dummy</div>
  )
}

export default Dummy