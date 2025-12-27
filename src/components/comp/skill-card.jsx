export const SkillCard = ({ dataAos, title, desc, icon }) => {
  return (
    <div className="skill-card" data-aos={dataAos} data-aos-delay="100">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="skill-bar">
        <div className="skill-progress" data-width="90"></div>
      </div>
    </div>
  );
};
