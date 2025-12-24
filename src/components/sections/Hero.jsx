import React from "react";

export const Hero = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="tit">안녕하세요,</span>
            <span className="tit">
              저는 <em className="gradient-text">개발자</em>입니다
            </span>
            <p
              className="hero-subtitle"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              창의적인 웹 솔루션을 만드는 프론트엔드 개발자
            </p>
          </h1>
          <div
            className="hero-buttons"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <button className="btn btn-primary">프로젝트 보기</button>
            <button className="btn btn-secondary">연락하기</button>
          </div>
          <div className="hero-image">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
