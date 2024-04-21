import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Style.css";

const Home = () => {
   const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((responce) => {
      setData(responce.data);
    });
  });

  return (
    <div className="home-card">
      {data.map((data) => {
        return (
          <div className="card">
            <div className="api-id">
              <strong>ID: </strong>
              {data.id}
            </div>
            <div className="api-name">
              <strong>NAME: </strong>
              {data.name}
            </div>
            <div className="api-username">
              <strong>USERNAME: </strong>
              {data.username}
            </div>
            <div className="api-email">
              <strong>EMAIL: </strong>
              {data.email}
            </div>
            <div className="api-address">
              <strong>CITY: </strong>
              {data.address.city}
            </div>
            <div className="api-phone">
              <strong>PHONE: </strong>
              {data.phone}
            </div>
            <div className="api-website">
              <strong>WEBSITE: </strong>
              {data.website}
            </div>
            <div className="company">
              <strong>COMPANY NAME: </strong>
              {data.company.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

