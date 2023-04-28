import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
    >
      <div className="text-center my-5">
        <h1 style={{ fontSize: "100px", color: "red" , fontWidth: "600" }}>404</h1>
        <h4 >SOMETHING WRONG!! PAGE NOT FOUND</h4>
        <h6 className="text-muted">
          Sorry, the page you're looking for doesn't exist. you can return to
          home and look for another.
        </h6>
        <NavLink to="/home">
          <button className="btn btn-primary">Return to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
