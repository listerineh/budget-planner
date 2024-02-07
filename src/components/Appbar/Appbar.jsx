import { Link } from "react-router-dom";
import AvatarButton from "../AvatarButton/AvatarButton";
import "./Appbar.css";

const Appbar = ({ sectionName }) => {
  return (
    <>
      <div className="appbar-container">
        <div className="icon-separator">
          <h2 className="appbar-text">
            <Link to="/services" className="appbar-anchor">
              Monet
            </Link>
          </h2>
          <AvatarButton />
        </div>
      </div>
      <h3 className="section-name">{sectionName}</h3>
    </>
  );
};

export default Appbar;  
