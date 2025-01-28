import SkillCard from "./cards/SkillCard";

function Skill() {
  const skills = [
    {
      title: "HTML, CSS, Javascript",
      description:
        "Creating intuitive and visually appealing user interfaces to enhance user experience.",
      percent: 85,
      type: "CSS",
    },
    {
      title: "Relational Database Expertise",
      description:
        "Developing responsive and interactive web applications using modern frameworks.",
      percent: 80,
      type: "CSS",
    },
    {
      title: "Java",
      description:
        "Building robust and scalable server-side applications and APIs.",
      percent: 90,
      skill: "CSS",
    },
    {
      title: "Spring Boot",
      description:
        "Ensuring software quality through comprehensive testing strategies.",
      percent: 70,
      skill: "CSS",
    },
    {
      title: "Python",
      description:
        "Ensuring software quality through comprehensive testing strategies.",
      percent: 70,
      skill: "CSS",
    },
    {
      title: "AI",
      description:
        "Ensuring software quality through comprehensive testing strategies.",
      percent: 40,
      skill: "CSS",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="heading">Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            percent={skill.percent}
            type={skill.type}
          />
        ))}
      </div>
    </section>
  );
}

export default Skill;
