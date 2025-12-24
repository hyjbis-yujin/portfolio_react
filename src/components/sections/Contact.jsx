import React from "react";

export const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <p>developer@example.com</p>
              </div>
              <div className="info-item">
                <div className="info-icon">📱</div>
                <h3>Phone</h3>
                <p>+82 10-1234-5678</p>
              </div>
              <div className="info-item">
                <div className="info-icon">🌐</div>
                <h3>Website</h3>
                <p>www.portfolio.com</p>
              </div>
            </div>
            <form className="contact-form" data-aos="fade-left">
              <input type="text" placeholder="이름" required />
              <input type="email" placeholder="이메일" required />
              <textarea placeholder="메시지" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">
                보내기
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
