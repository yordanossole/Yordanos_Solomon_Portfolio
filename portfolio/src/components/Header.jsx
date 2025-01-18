// import React from "react";

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
        <a href="#" className="logo">
          Amelia <span>Morgan</span>
        </a>
        <i
          className="bx bx-menu"
          id="menu-icon"
          onClick={handleMenuIconClick}
        ></i>

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
