import PropTypes from "prop-types";
import { useState } from "react";

function ProjectCard({ status, name, description, language, link, id }) {
  const storedLikeCount = localStorage.getItem(`likeCount_${id}`) || 0;
  const [likeCount, setCount] = useState(Number(storedLikeCount));

  const handleLikeClick = () => {
    const newLikeCount = likeCount + 1;
    setCount(newLikeCount);
    localStorage.setItem(`likeCount_${id}`, newLikeCount);
  };

  return (
    <div className="project-box">
      <h4>{status || name}</h4>
      <p>{description}</p>
      <div>
        <p>
          <a href={link} target="blank">
            More
          </a>
        </p>
        <p id="lang">{language}</p>
        <p>
          {likeCount} <i className="bx bxs-like" onClick={handleLikeClick}></i>{" "}
        </p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  status: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  id: PropTypes.number,
  link: PropTypes.string,
};

export default ProjectCard;
