import EducationCard from "./cards/EducationCard";

function Education() {
  const educationData = [
    {
      date: "2022",
      title: "High School",
      description:
        "Completed high school with a focus on science and mathematics, achieving excellent grades.",
    },
    {
      date: "2023",
      title: "University",
      description:
        "Joined a bachelor's degree in Information System, learning programming, algorithms, and software development.",
    },
    {
      date: "2024",
      title: "Summer Camp",
      description:
        "Graduated from INSA Summer Camp with greate skill in backend development.",
    },
    {
      date: "2025",
      title: "Internship",
      description:
        "I got internship in top tech company in Ethiopia, working on large-scale applications and cutting-edge technologies.",
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>

      <div className="timeline-items">
        {educationData.map((item, index) => (
          <EducationCard
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;