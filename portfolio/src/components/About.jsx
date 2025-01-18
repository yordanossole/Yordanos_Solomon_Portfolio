// import React from "react";

function About() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, It's <span>Amelia</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            officiis a dolores ipsa, reiciendis velit ducimus iure et, corporis
            iusto atque tenetur blanditiis illum, ratione nostrum dicta
            perspiciatis minima ut.
          </p>
          <div className="social-icons">
            <a href="">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="">
              <i className="bx bxl-github"></i>
            </a>
            <a href="">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="">
              <i className="bx bxl-telegram"></i>
            </a>
          </div>

          <div className="btn-group">
            <a href="#" className="btn">
              Hire
            </a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
        </div>

        <div className="home-img">
          <img src="assets/image.jpg" alt="" />
        </div>
      </section>
    </>
  );
}

export default About;
