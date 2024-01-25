import React from "react";

import "./Home.css";
import LeftArrow from "../../components/LeftArrow";

const Home = () => {
  const handleClick = () => {
    window.location.href = '/old';
  };

  return (
    <>
      <div className="home-header">
        <h1 className="header-principal">
          iTeam <span className="header-secondary">Jobs</span>
        </h1>
      </div>
      <div className="home-content">
        <h2 className="content-title">Suite de soluciones financieras</h2>
        <button className="content-button" onClick={handleClick}>
          INGRESAR
          <LeftArrow />
        </button>
      </div>
    </>
  );
};

export default Home;
