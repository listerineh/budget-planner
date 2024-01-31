import { Link } from "react-router-dom"
import Bell from "../icons/Bell"
import "./Appbar.css"

const Appbar = ({ sectionName }) => {
  return (
    <>
      <div className="appbar-container">
        <h2 className="appbar-text"><Link to="/services" className="appbar-anchor">Monet</Link></h2>
        <Bell />
      </div>
      <h3 className="section-name">{sectionName}</h3>
    </>
  )
}

export default Appbar
