import React, { useEffect, useState } from "react";
import search from "../assets/images/search.svg";
import "./Form.css";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Heading from "./Heading";
import JobRow from "./JobRow";


const Form = () => {
  // const [jobData, setJobData] = useState();
  // const [filteredData, setFilteredData] = useState();
  const [departmentData, setDepartmentData] = useState();
  const [locationData, setLocationData] = useState();
  const [functionsData, setFunctionsData] = useState();
  const [getValue, setGetValue] = useState([]);
  const [jobsData, setJobsData] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    selectedText: undefined,
    selectedDepartment: undefined,
    selectedLocation: undefined,
    selectedFunction: undefined,
  });
  const [divisionData, setDivisionData] = useState();


  // const []

  const handleDelete = (id) => {
    const filtered = getValue.filter((item, ind) => ind !== id);
    setGetValue(filtered);
  };
  const getFilteredData = async (params) => {
    const resp = await axios.get(`https://demo.jobsoid.com/api/v1/jobs`, {
      params: {
        q: params.selectedText,
        loc: params.selectedLocation,
        dept: params.selectedDepartment,
        func: params.selectedFunction,
      },
    });
    setJobsData(resp.data);

    // dummy start
    const resp2 = await axios.get("https://demo.jobsoid.com/api/v1/jobs")
        .then((resp)=>{
            console.log( 'details',resp)
        })
  };
  const getJobData = async () => {
    const resp = await axios.get("https://demo.jobsoid.com/api/v1/jobs");

    setJobsData(resp.data);
  };
  const getDepartmentData = async () => {
    const dept = await axios.get("https://demo.jobsoid.com/api/v1/departments");
    setDepartmentData(dept.data);
  };
  const getLocationData = async () => {
    const loc = await axios.get("https://demo.jobsoid.com//api/v1/locations");
    setLocationData(loc.data);
  };
  const getfunctions = async () => {
    const func = await axios.get("https://demo.jobsoid.com/api/v1/functions");
    setFunctionsData(func.data);
  };
  const getDivision = async () => {
    const divi = await axios.get("https://demo.jobsoid.com/api/v1/divisions");
    setDivisionData(divi.data);
    console.log(divi.data);
  };
  useEffect(() => {
    getJobData();
    getDepartmentData();
    getLocationData();
    getfunctions();
    getDivision();
  }, []);
  // const SearchChange = (e) => {
  //   let value = e.target.value.toLowerCase();
  //   let result = [];
  //   console.log(value);
  //   result = jobData.filter((data) => {
  //     return data.title.search(value) != -1;
  //   });
  //   setFilteredData(result);
  // };

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  const handleSelectChange = (e) => {
    if (e.target.name !== "selectedText") {
      setGetValue([...getValue, e.target.value]);
    }
    const newObj = { ...selectedValues };
    newObj[e.target.name] = e.target.value;
    setSelectedValues({ ...newObj });
    getFilteredData(newObj);
  };

  console.log("get value", jobsData);
  return (
    <>
    <div className="main_wrapper">
    <div className="form_container">
      <h1>List</h1>
        <div className="upper_section">
          <div className="row gy-3">
            <div className="col-12">
              <div className="search_wrapper">
                <input
                  type="text"
                  placeholder="Search "
                  name="selectedText"
                  id="selectedText"
                  onChange={handleSelectChange}
                />
                <img src={search} alt="" />
              </div>
            </div>
            <div className="col-4">
              <select
                class="form-select"
                aria-label="Default select example"
                name="selectedDepartment"
                onChange={handleSelectChange}
              >
                <option selected>Department</option>
                {departmentData &&
                  departmentData?.map((item) => {
                    return (
                      <option value={item.title} name={item.title}>
                        {item.title}
                      </option>
                    );
                  })}

                {/* <option value="2">Two</option>
              <option value="3">Three</option> */}
              </select>
            </div>
            <div className="col-4">
              <select
                class="form-select"
                aria-label="Default select example"
                name="selectedLocation"
                onChange={handleSelectChange}
              >
                <option selected>Location</option>
                {locationData &&
                  locationData?.map((item) => {
                    return (
                      <option value={item.title} name={item.title}>
                        {item.title}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="col-4">
              <select
                class="form-select"
                aria-label="Default select example"
                name="selectedFunction"
                onChange={handleSelectChange}
              >
                <option selected>Functions</option>
                {functionsData &&
                  functionsData?.map((item) => {
                    return (
                      <option value={item.title} name={item.title}>
                        {item.title}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </div>
        <div className="lower_section">

          <div className="chips_container ">
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
                p: 0.5,
                m: 0,
              }}
              component="ul"
            >
              {getValue.map((data, index) => {
                return (
                  <ListItem key={data} name={data}>
                    <Chip label={data} onDelete={() => handleDelete(index)} />
                  </ListItem>
                );
              })}
            </Paper>
            <button className="clear_btn" >Clear All</button>
          </div>
        </div>
      </div>
      {/* {divisionData &&
        jobsData &&
        divisionData.map((item) => {
          return (
            <div>
              <Heading text={item.title} />
              {jobsData?.map((job) => {
                return (
                  <div>
                    {item.id === job.division?.id ? (
                      <JobRow jobData={job} />
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        })} */}

      {
        <div>
          <Heading text={jobsData.title} />
          {jobsData?.map((job) => {
            return (
              <div>
               
                <JobRow jobData={job} /> 
              </div>
            );
          })}
        </div>
      }

    </div>
     
    </>
  );
};

export default Form;
