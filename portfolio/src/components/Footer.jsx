
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="social">
          <a href="">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="">
            <i className="bx bxl-github"></i>
          </a>
          <a href="">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="">
            <i className="bx bxl-telegram"></i>
          </a>
        </div>

        <ul className="list">
          <li>
            <a href="#home">FAQ</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#home">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <p className="copyright">© Yordanos Solomon | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;
