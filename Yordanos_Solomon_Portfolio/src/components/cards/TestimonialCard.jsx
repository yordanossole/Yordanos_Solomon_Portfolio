import PropTypes from "prop-types";

function TestimonialCard({ name, image, rating, text }) {
  // Generate star ratings dynamically with empty stars for better visuals
  const maxStars = 5;
  const filledStars = Array(rating)
    .fill(0)
    .map((_, index) => (
      <i key={`filled-${index}`} className="bx bxs-star star filled-star"></i>
    ));
  const emptyStars = Array(maxStars - rating)
    .fill(0)
    .map((_, index) => (
      <i key={`empty-${index}`} className="bx bxs-star star"></i>
    ));

  return (
    <div className="testimonial-item">
      <img
        src={image || "assets/default-image.jpg"}
        alt={`${name}'s testimonial`}
        onError={(e) => (e.target.src = "assets/default-image.jpg")}
      />
      <h2>{name}</h2>
      <div className="rating">
        {filledStars}
        {emptyStars}
      </div>
      <p>
        <q>{text}</q>
      </p>
    </div>
  );
}

// Define PropTypes for validation
TestimonialCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  text: PropTypes.string,
};

export default TestimonialCard;
