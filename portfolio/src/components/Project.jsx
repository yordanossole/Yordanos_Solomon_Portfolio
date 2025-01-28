import { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./cards/ProjectCard";

function Project() {
  // Test data
  const projects = [
    {
      name: "UI Design",
      description:
        "Creating intuitive and visually appealing user interfaces to enhance user experience.",
    },
    {
      name: "Frontend Development",
      description:
        "Developing responsive and interactive web applications using modern frameworks.",
    },
    {
      name: "Backend Development",
      description:
        "Building robust and scalable server-side applications and APIs.",
    },
    {
      name: "Testing",
      description:
        "Ensuring software quality through comprehensive testing strategies.",
    },
  ];

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
        // setRepos(projects);
      } catch (err) {
        setError(err.message || "Failed to fetch repositories");
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();

    console.log(repos);
  }, []);

  if (loading)
    return (
      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="projects-container">
          <ProjectCard status={"Loading"} />
        </div>
      </section>
    );
  if (error)
    return (
      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="projects-container">
          <ProjectCard status={error} />
        </div>
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
            // name={truncateTxt(repos.name, 20)}
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