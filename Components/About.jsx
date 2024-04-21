import React, { useState } from "react";
import axios from "axios";

const About = () => {
  const data = { fname: "", lname: "" };
  const [inputdata, setinputdata] = useState(data);
  const handleChange = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  //post
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputdata)
      .then((response) => {
        console.log("mine data: ", response);
      });
  };

  // put 
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", inputdata)
      .then((response) => {
        console.log(response);
      });
  };

  // Delete
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/${`id`}", inputdata)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <h1>CRUD</h1>
      <div className="about">
        <input
          name="fname"
          type="text"
          value={inputdata.fname}
          onChange={handleChange}
          placeholder="Yourname"
        />
        <input
          name="lname"
          type="text"
          value={inputdata.lname}
          onChange={handleChange}
          placeholder="Lastname"
        />
        <button type="button" className="bton" onClick={handlesubmit}>
          Post Data
        </button>
        <button type="button" className="bton" onClick={handleUpdate}>
          Edit Data
        </button>
        <button type="button" className="bton" onClick={handleDelete}>
          Delete Data
        </button>
      </div>
    </>
  );
};

export default About;
