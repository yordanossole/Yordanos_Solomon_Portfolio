import SkillCard from "./cards/SkillCard";

function Skill() {
  const skills = [
    {
      title: "Java",
      percent: 90,
    },
    {
      title: "Spring Boot",
      percent: 90,
    },
    {
      title: "HTML, CSS, Javascript",
      percent: 80,
    },
    {
      title: "Relational Database Expertise",
      percent: 80,
    },
    {
      title: "Python",
      percent: 70,
    },
    {
      title: "AI",
      percent: 70,
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
