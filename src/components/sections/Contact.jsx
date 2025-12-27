import { ContactInfo } from "../comp/contact-info";
import { TitleComp } from "../title-comp";

export const Contact = () => {
  const data = [
    { icon: "📧", tit: "Email", info: "developer@example.com" },
    { icon: "📱", tit: "Phone", info: "+82 10-1234-5678" },
    { icon: "🌐", tit: "Website", info: "www.portfolio.com" },
  ];

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <TitleComp title={"Contact Me"} />
          <div className="contact-content">
            <div className="contact-info">
              {data.map((data) => (
                <ContactInfo icon={data.icon} tit={data.tit} info={data.info} />
              ))}
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
