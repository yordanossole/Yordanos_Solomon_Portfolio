import EducationCard from "./cards/EducationCard";

function Education() {
  const educationData = [
    {
      date: "2021",
      title: "High School",
      description:
        "Completed high school with a focus on science and mathematics, achieving excellent grades.",
    },
    {
      date: "2022",
      title: "University",
      description:
        "Pursued a bachelor's degree in Computer Science, learning programming, algorithms, and software development.",
    },
    {
      date: "2023",
      title: "Internship",
      description:
        "Worked as a software development intern, gaining hands-on experience in web development and team collaboration.",
    },
    {
      date: "2024",
      title: "Job",
      description:
        "Started a full-time position as a software engineer, working on large-scale applications and cutting-edge technologies.",
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















// // import React from "react";

// function Education() {
//   return (
//     <>
//       <section className="education" id="education">
//         <h2 className="heading">Education</h2>

//         <div className="timeline-items">
//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2021</div>
//             <div className="timeline-content">
//               <h3>High School</h3>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Quisquam eum nemo ducimus nisi facere enim, et unde natus
//                 voluptatem maxime molestiae tempora.
//               </p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2022</div>
//             <div className="timeline-content">
//               <h3>University</h3>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Quisquam eum nemo ducimus nisi facere enim, et unde natus
//                 voluptatem maxime molestiae tempora.
//               </p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2023</div>
//             <div className="timeline-content">
//               <h3>Internship</h3>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Quisquam eum nemo ducimus nisi facere enim, et unde natus
//                 voluptatem maxime molestiae tempora.
//               </p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2024</div>
//             <div className="timeline-content">
//               <h3>Job</h3>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Quisquam eum nemo ducimus nisi facere enim, et unde natus
//                 voluptatem maxime molestiae tempora.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Education;
