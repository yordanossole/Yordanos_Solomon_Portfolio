import { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./cards/ProjectCard";
import ProjectLoadingCard from "./cards/ProjectLoadingCard";

function Project() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/yordanossole/repos"
        );
        setRepos(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch repositories");
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading)
    return (
      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
          <ProjectLoadingCard status={"Loading"} language={''} link={''} />
      </section>
    );
  if (error)
    return (
      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
          <ProjectLoadingCard status={error} />
      </section>
    );

    const truncateTxt = (txt, maxSize) => {
      return txt.length > maxSize ? txt.slice(0, maxSize) + '...' : txt;
    };

  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>

      <div className="projects-container">
        {repos.map((repo, index) => (
          <ProjectCard
            key={index}
            name={repo.name}
            description={truncateTxt(repo.description, 110)}
            language={repo.language}
            star={repo.stargazers_count}
            link={repo.html_url}
            id={repo.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;