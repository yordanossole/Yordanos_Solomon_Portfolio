import SkillCard from "./cards/SkillCard";

function Skill() {

  const skills = [
    {
      title: "UI Design",
      description:
        "Creating intuitive and visually appealing user interfaces to enhance user experience.",
    },
    {
      title: "Frontend Development",
      description:
        "Developing responsive and interactive web applications using modern frameworks.",
    },
    {
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications and APIs.",
    },
    {
      title: "Testing",
      description:
        "Ensuring software quality through comprehensive testing strategies.",
    },
  ];
  
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Skills</h2>

      <div className="projects-container">
        {skills.map((skill, index) => (
          <SkillCard 
          key={index}
          title={skill.title}
          description={skill.description} />
        ))}
      </div>
    </section>
  );
}

export default Skill;