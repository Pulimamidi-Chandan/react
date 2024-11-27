import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Keep Projects Moving",
      description: "Your team apps are accessible anywhere.",
    },
    {
      title: "Share Logins and Passwords",
      description: "Designed for collaboration.",
    },
    {
      title: "Protect Your Assets",
      description: "Control access to critical assets.",
    },
  ];

  return (
    <section className="features">
      <h1>Features</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
