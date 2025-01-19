import { NavLink } from "react-router-dom";

function Header() {
  const handleMenuIconClick = () => {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  };

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          Amelia <span>Morgan</span>
        </a>
        <i
          className="bx bx-menu"
          id="menu-icon"
          onClick={handleMenuIconClick}
        ></i>

        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
