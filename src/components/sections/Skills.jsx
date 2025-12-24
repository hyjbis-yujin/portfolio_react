import React from "react";

export const Skills = () => {
  return (
    <>
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div
              className="skill-card"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="skill-icon">🌐</div>
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React</p>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90"></div>
              </div>
            </div>
            <div className="skill-card" data-aos="fade-up" data-aos-delay="250">
              <div className="skill-icon">🎨</div>
              <h3>Design</h3>
              <p>Figma, Photoshop, Illustrator</p>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85"></div>
              </div>
            </div>
            <div
              className="skill-card"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="skill-icon">⚙️</div>
              <h3>Backend</h3>
              <p>Node.js, Express, MongoDB</p>
              <div className="skill-bar">
                <div className="skill-progress" data-width="70"></div>
              </div>
            </div>
            <div
              className="skill-card"
              data-aos="fade-down"
              data-aos-delay="550"
            >
              <div className="skill-icon">📱</div>
              <h3>Mobile</h3>
              <p>React Native, Responsive Design</p>
              <div className="skill-bar">
                <div className="skill-progress" data-width="75"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
