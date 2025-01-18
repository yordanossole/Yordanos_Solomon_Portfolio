import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import ProjectCard from "./components/ProjectCard";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");
  
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a [href*=" + id + " ]")
            .classList.add("active");
        });
      }
    });
  };
  
  return (
    <>
      <Header></Header>
      <About></About>
      <Education></Education>
      <ProjectCard></ProjectCard>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>

    </>
  );
}

export default App;
