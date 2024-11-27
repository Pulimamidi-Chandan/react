import React from "react";
import "./Hero.css";

const Hero = () => {
  // Function to handle button click
  const handleButtonClick = () => {
    alert("Button Clicked");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>React Outreach: Empowering Tomorrows Web Developer</h1>
        <p>
        In today's digital landscape, developing interactive and user-friendly web
applications is crucial, and React has become a leading tool for building
dynamic user interfaces.
The short-term course on React Outreach: Empowering Tomorrow's Web
Developer is designed to equip participants with essential React skills
through expert-led sessions covering key concepts like components, state
management, and routing that can enhance their performance at their
workplaces.
        </p>
        <button className="try-free" onClick={handleButtonClick}>
          Click Here
        </button>
      </div>
      <div className="hero-image">
        {/* Add an appropriate image */}
        <img
          src="11.jpeg"
          alt="TeamPassword Hero"
        />
      </div>
    </section>
  );
};

export default Hero;
