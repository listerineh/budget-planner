import { Link } from "react-router-dom";
import LeftArrow from "../../components/icons/LeftArrow";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="upper-side">
        <img className="welcome-image"
          src="/images/monet-logo.png"
          alt="Monet Logo"
        />
        <h2 className="welcome-header">Suite de soluciones financieras</h2>
      </div>
      <div className="bottom-side">
        <Link to='/services' className="content-button">
          INGRESAR
          <LeftArrow />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
