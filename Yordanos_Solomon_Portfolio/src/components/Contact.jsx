import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form before submission
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation: Make sure it's not empty
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    // Email validation: Make sure it's not empty and has a valid format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Message validation: Make sure it's not empty
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.split(/\s+/).length > 500) {
      newErrors.message = "Message cannot exceed 500 words.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (validateForm()) {
      setSubmitStatus("Submitting...");

      // Standard form submission to Getform.io
      fetch("https://getform.io/f/bpjjqgyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            setSubmitStatus("Form submitted successfully!");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          } else {
            setSubmitStatus("Something went wrong. Please try again.");
          }
        })
        .catch((error) => {
          setSubmitStatus("Error in submission: " + error.message);
        });
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          action="https://getform.io/f/bpjjqgyb"
          method="post"
        >
          <div className="input-group">
            <div className="input-box">
              {/* Display submission status */}
              {submitStatus && <p className="submit-status">{submitStatus}</p>}
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                placeholder="Full Name"
                value={formData.name}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-box">
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>

          <div className="input-group-2 input-box">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;