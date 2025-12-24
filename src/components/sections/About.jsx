import React from "react";

export const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-wrapper">
                <div className="profile-card">
                  <div className="card-content">
                    <div className="card-icon">👨‍💻</div>
                    <h3>Frontend Developer</h3>
                    <p>새로운 기술을 배우고 도전하는 것을 좋아합니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-text">
              <p className="highlight-text">
                새로운 아이디어를 현실로 만드는 것을 즐깁니다.
              </p>
              <p>
                사용자 경험을 최우선으로 생각하며, 아름답고 직관적인
                인터페이스를 만드는 것이 저의 목표입니다. 최신 웹 기술을
                활용하여 반응형이고 성능이 뛰어난 웹 애플리케이션을 개발합니다.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number" data-target="50">
                    0
                  </div>
                  <div className="stat-label">프로젝트 완료</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-target="30">
                    0
                  </div>
                  <div className="stat-label">만족한 클라이언트</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-target="5">
                    0
                  </div>
                  <div className="stat-label">연차</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
