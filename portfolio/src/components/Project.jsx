import ProjectCard from "./cards/ProjectCard";

function Project() {

  const projects = [
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
      <h2 className="heading">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard 
          key={index}
          title={project.title}
          description={project.description} />
        ))}
      </div>
    </section>
  );
}

export default Project;














// // import React from "react";

// function Project() {
//   return (
//     <>
//       {" "}
//       <section className="projects" id="projects">
//         <h2 className="heading">Projects</h2>

//         <div className="projects-container">
//           <div className="project-box">
//             <div className="project-info">
//               <h4>UI Design</h4>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
//                 eaque ipsa fuga molestiae autem? Ut nam voluptates omnis, ea
//                 dolorum amet, reiciendis voluptas fuga, asperiores in inventore
//                 doloribus repellendus nesciunt.
//               </p>
//             </div>
//           </div>

//           <div className="project-box">
//             <div className="project-info">
//               <h4>Frontend Development</h4>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
//                 eaque ipsa fuga molestiae autem? Ut nam voluptates omnis, ea
//                 dolorum amet, reiciendis voluptas fuga, asperiores in inventore
//                 doloribus repellendus nesciunt.
//               </p>
//             </div>
//           </div>

//           <div className="project-box">
//             <div className="project-info">
//               <h4>Backend Development</h4>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
//                 eaque ipsa fuga molestiae autem? Ut nam voluptates omnis, ea
//                 dolorum amet, reiciendis voluptas fuga, asperiores in inventore
//                 doloribus repellendus nesciunt.
//               </p>
//             </div>
//           </div>

//           <div className="project-box">
//             <div className="project-info">
//               <h4>Testing</h4>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
//                 eaque ipsa fuga molestiae autem? Ut nam voluptates omnis, ea
//                 dolorum amet, reiciendis voluptas fuga, asperiores in inventore
//                 doloribus repellendus nesciunt.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Project;
