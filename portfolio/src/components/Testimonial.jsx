// import React from "react";
import TestimonialCard from "./cards/TestimonialCard";

function Testimonial() {
  const testimonials = [
    {
      name: "Marilyn",
      image: "assets/image.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eum necessitatibus iste facilis neque modi sunt quisquam? Impedit harum rem accusamus corrupti eos quibusdam distinctio dolor labore, temporibus omnis?",
    },
    {
      name: "John",
      image: "assets/image.jpg",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut blanditiis deserunt quibusdam, nostrum veniam consequatur non amet illo cumque nesciunt numquam illum animi cum dicta aspernatur dignissimos sed repellendus?",
    },
    {
      name: "Marilyn",
      image: "assets/image.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eum necessitatibus iste facilis neque modi sunt quisquam? Impedit harum rem accusamus corrupti eos quibusdam distinctio dolor labore, temporibus omnis?",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Testimonials</h2>
        <div className="wrapper">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
