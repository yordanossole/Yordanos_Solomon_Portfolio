import PropTypes from 'prop-types'

function ProjectCard({ title, description }) {

  return (
    <div className="project-box">
      <div className="project-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  

export default ProjectCard;
