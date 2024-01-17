/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100 align-items-center">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4">Welcome to Secure Secrets App</h1>
          <p className="lead">Discover and share secrets with our community.</p>
          <div className="mt-4">
            <Link to="/register" className="btn btn-danger mx-2">
              <span>Register</span>
            </Link>
            <Link to="/login" className="btn btn-success mx-2">
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
