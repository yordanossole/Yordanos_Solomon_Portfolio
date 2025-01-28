import PropTypes from "prop-types";

function ProjectCard({ title, description, percent, skill }) {
  return (
    <div className="skill-box">
      {/* <div className="skill-info"> */}
      {/* <h4>{title}</h4>
        <p>{description}</p> */}
      <div className="progress-container">
        <div id="progress-title">
          <p>{title}</p>
          <p id="progress-percent">{percent}%</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  skill: PropTypes.string,
};

export default ProjectCard;
