function About() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, It's <span>Yordanos</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <p>
            A passionate full-stack developer with experience in building
            efficient and user-friendly software solutions. My expertise spans
            back-end development using Spring Boot, front-end interfaces with
            React, and database design
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/yordanos-solomon-715a42222?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUoow4QHuQPCaACWXD4c5IA%3D%3D">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/yordanossole">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.instagram.com/yordanossole/">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://t.me/bab_so">
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
          <img src="assets/my-image-light.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default About;
