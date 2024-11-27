import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Karthick Panneerselvam is an accomplished faculty member at School of Computer Science and Engineering, Lovely Professional University.",
      author: "Dr. Karthick Panneerselvam",
    },
    {
      quote: "Mr. Vimal Gunasekar is currently working as a Technical Lead at TD in the Greater Toronto Area, Canada, a position he has held since September 2021.",
      author: "Mr. Vimal Gunasekar",
    },
  ];

  return (
    <section className="testimonials">
      <h1>What Our Resource Persons Say</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.quote}"</p>
            <h4>- {testimonial.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
