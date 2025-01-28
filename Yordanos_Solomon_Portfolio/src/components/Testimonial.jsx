import Slider from "react-slick";
import TestimonialCard from "./cards/TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const testimonials = [
    {
      name: "Nafargi",
      image: "assets/naf.jpg",
      rating: 5,
      text: "Yordy is one of the most dedicated and innovative developers I've had the pleasure to work with. His ability to break down complex problems and deliver clean, efficient solutions is truly impressive. He’s not just a teammate but an inspiration!",
    },
    {
      name: "Bamlaku",
      image: "assets/bamlaku.jpg",
      rating: 5,
      text: "Working with Yordy is always a fantastic experience. His collaborative spirit, excellent communication skills, and technical expertise make him a key contributor to any project. I’ve learned a lot from him!",
    },
    {
      name: "Smith",
      image: "assets/smith.JPG",
      rating: 5,
      text: "Yordy's commitment to excellence and his focus on delivering impactful solutions are remarkable. He has an incredible ability to blend technical knowledge with a user-centric approach, which makes him a great asset to any team.",
    },
    {
      name: "Ribka",
      image: "assets/muna.jpg",
      rating: 5,
      text: "Yordy is not only a talented developer but also an exceptional problem-solver and leader. His work ethic, drive, and dedication to making a difference through technology are truly inspiring.",
    },
  ];


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="heading">Testimonials</h2>
      <div className="wrapper">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
