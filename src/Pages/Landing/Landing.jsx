import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export function Landing() {

  return(
    <div className="landing">
      <h1>InterLinked</h1>
      <img src="src/assets/logos/InterLinked_transparent copy.jpeg" alt="Logo" />
      <p>Best New Socal Media App</p>

      <Link to={"/login"} className="btn btn-primary linktag">LogIn</Link>
      <Link to={"/signup"} className="btn btn-primary linktag">SignUp</Link>
    </div>
  )
}