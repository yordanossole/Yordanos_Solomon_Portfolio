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

  let darkmode = localStorage.getItem("darkmode") || "active";

  const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
  };

  const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
  };

  if (darkmode === "active") enableDarkmode();

  const themeHandler = () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  };

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          Yo<span>Sol</span>
        </a>
        <div className="menu-dark-light-toggle">
          <div id="theme-switch" onClick={themeHandler}>
            <i className="fa-solid fa-moon"></i>
            <i className="fa-solid fa-sun"></i>
          </div>
          <i
            className="bx bx-menu"
            id="menu-icon"
            onClick={handleMenuIconClick}
          ></i>
        </div>

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
