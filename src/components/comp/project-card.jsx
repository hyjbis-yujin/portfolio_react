export const ProjectCard = ({ dur, num, title, sub, skills }) => {
  return (
    <div
      className="project-card"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration={dur}
    >
      <div className="project-image">
        <div className="project-overlay">
          <button className="btn-view" data-project={num}>
            View Project
          </button>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{sub}</p>
        <div className="project-tags">
          {skills.map((s, idx) => (
            <span className="tag" key={`${s}-${idx}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
