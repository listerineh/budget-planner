import Bell from "../icons/Bell"
import "./Appbar.css"

const Appbar = ({ sectionName }) => {
  return (
    <>
      <div className="appbar-container">
        <h2 className="appbar-text">iTeams <span className="text-secondary">Jobs</span></h2>
        <Bell />
      </div>
      <h3 className="section-name">{sectionName}</h3>
    </>
  )
}

export default Appbar
