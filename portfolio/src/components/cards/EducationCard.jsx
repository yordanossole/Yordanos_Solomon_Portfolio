import PropTypes from "prop-types";

function EducationCard({ date, title, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

EducationCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EducationCard;
