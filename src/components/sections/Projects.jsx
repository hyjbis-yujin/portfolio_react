import React from "react";

export const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="projects-row">
              <div
                className="project-card"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <button className="btn-view" data-project="1">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>E-Commerce Platform</h3>
                  <p>온라인 쇼핑몰 플랫폼</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">MongoDB</span>
                  </div>
                </div>
              </div>
              <div
                className="project-card"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <button className="btn-view" data-project="2">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>Dashboard App</h3>
                  <p>데이터 시각화 대시보드</p>
                  <div className="project-tags">
                    <span className="tag">Vue.js</span>
                    <span className="tag">Chart.js</span>
                    <span className="tag">Firebase</span>
                  </div>
                </div>
              </div>
              <div
                className="project-card"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <button className="btn-view" data-project="3">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>Social Media App</h3>
                  <p>실시간 소셜 네트워크</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Socket.io</span>
                    <span className="tag">PostgreSQL</span>
                  </div>
                </div>
              </div>
              <div
                className="project-card"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500"
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <button className="btn-view" data-project="4">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>Task Management</h3>
                  <p>협업 프로젝트 관리 도구</p>
                  <div className="project-tags">
                    <span className="tag">Angular</span>
                    <span className="tag">RxJS</span>
                    <span className="tag">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
