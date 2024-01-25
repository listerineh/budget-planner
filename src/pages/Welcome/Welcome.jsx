import { Link } from "react-router-dom";
import LeftArrow from "../../components/icons/LeftArrow";
import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="welcome-header">
        <h1 className="header-principal">
          iTeam <span className="header-secondary">Jobs</span>
        </h1>
      </div>
      <div className="welcome-content">
        <h2 className="content-title">Suite de soluciones financieras</h2>
        <Link to='/services' className="content-button">
          INGRESAR
          <LeftArrow />
        </Link>
      </div>
    </>
  );
};

export default Welcome;
