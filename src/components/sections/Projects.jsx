import { ProjectCard } from "../comp/project-card";
import { TitleComp } from "../title-comp";

export const Projects = () => {
  const data = [
    {
      dur: "1000",
      num: "1",
      title: "E-Commerce Platform",
      sub: "온라인 쇼핑몰 플랫폼",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      dur: "1500",
      num: "2",
      title: "Dashboard App",
      sub: "데이터 시각화 대시보드",
      skills: ["Vue.js", "Chart.js", "Firebase"],
    },
    {
      dur: "2000",
      num: "3",
      title: "Social Media App",
      sub: "실시간 소셜 네트워크",
      skills: ["React", "Socket.io", "PostgreSQL"],
    },
    {
      dur: "2500",
      num: "4",
      title: "Task Management",
      sub: "협업 프로젝트 관리 도구",
      skills: ["Angular", "RxJS", "Docker"],
    },
  ];

  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <TitleComp title={"Projects"} />
          <div className="projects-grid">
            <div className="projects-row">
              {data.map((data) => (
                <ProjectCard
                  dur={data.dur}
                  num={data.num}
                  title={data.title}
                  sub={data.sub}
                  skills={data.skills}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
