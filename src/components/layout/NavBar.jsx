import { NavLinks } from "../comp/nav-links";

export const NavBar = () => {
  const data = [
    { link: "#home", menu: "Home" },
    { link: "#about", menu: "About" },
    { link: "#skills", menu: "Skills" },
    { link: "#projects", menu: "Projects" },
    { link: "#contact", menu: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" data-aos="fade-right">
            Portfolio
          </div>
          <ul className="nav-menu">
            {data.map((data) => (
              <NavLinks link={data.link} menu={data.menu} />
            ))}
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};
