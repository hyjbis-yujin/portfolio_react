export const NavLinks = ({ link, menu }) => {
  return (
    <>
      <li>
        <a href={link} className="nav-link">
          {menu}
        </a>
      </li>
    </>
  );
};
