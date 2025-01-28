import PropTypes from "prop-types";

function ProjectLoadingCard({ status }) {
  return (
    <div className="projects-container">
      <div className="project-box" id="loading">
        <h4>{}</h4>
      </div>
      <div className="project-box" id="loading">
        <h4>{}</h4>
      </div>{" "}
      <div className="project-box" id="loading">
        <h4>{}</h4>
      </div>{" "}
      <div className="project-box" id="loading">
        <h4>{}</h4>
      </div>{" "}
    </div>
  );
}

ProjectLoadingCard.propTypes = {
  status: PropTypes.string,
};

export default ProjectLoadingCard;
