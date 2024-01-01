/*import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/mockupdashboard">MockupDashboard</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
*/

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Redirect to /mockupdashboard on component mount
  useEffect(() => {
    navigate("/mockupdashboard");
  }, [navigate]);

  return (
    <div className="dhiwise-navigation">
      {/* This Link is optional, as the redirection happens automatically */}
      {/* <li>
        <Link to="/mockupdashboard">MockupDashboard</Link>
      </li> */}
    </div>
  );
};

export default Home;
