import { SkillCard } from "../comp/skill-card";
import { TitleComp } from "../title-comp";

export const Skills = () => {
  const data = [
    {
      dataAos: "fade-right",
      icon: "🌐",
      title: "Frontend",
      desc: "HTML, CSS, JavaScript, React",
    },
    {
      dataAos: "fade-up",
      icon: "🎨",
      title: "Design",
      desc: "Figma, Photoshop, Illustrator",
    },
    {
      dataAos: "fade-left",
      icon: "⚙️",
      title: "Backend",
      desc: "Node.js, Express, MongoDB",
    },
    {
      dataAos: "fade-down",
      icon: "📱",
      title: "Mobile",
      desc: "React Native, Responsive Design",
    },
  ];
  return (
    <>
      <section id="skills" className="skills">
        <div className="container">
          <TitleComp title="Skills" />
          <div className="skills-grid">
            {data.map((data) => (
              <SkillCard
                dataAos={data.dataAos}
                icon={data.icon}
                title={data.title}
                desc={data.desc}
              />
            ))}
            {/*             <SkillCard
              dataAos={"fade-right"}
              icon={"🌐"}
              title={"Frontend"}
              desc={"HTML, CSS, JavaScript, React"}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};
