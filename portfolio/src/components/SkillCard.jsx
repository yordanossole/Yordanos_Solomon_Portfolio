// import React from "react";

function SkillCard() {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="testimonials-box">
          <h2 className="heading">Testimonials</h2>

          <div className="wrapper"></div>
          <div className="testimonial-item">
            <img src="assets/image.jpg" alt="" />
            <h2>Marilyn</h2>
            <div className="rating">
              <i className="bx bxs-star star"></i>
              <i className="bx bxs-star star"></i>
              <i className="bx bxs-star star"></i>
              <i className="bx bxs-star star"></i>
              <i className="bx bxs-star star"></i>
            </div>
            <p>
              <q>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, hic eum necessitatibus iste facilis neque modi sunt
                quisquam? Impedit harum rem accusamus corrupti eos quibusdam
                distinctio dolor labore, temporibus omnis?
              </q>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillCard;
