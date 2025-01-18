export default function Home() {
  let info = ['This is for test', 'This one is another text'];

  let el = null;



  return (
    <div className="my-container">
      <div className="home">
        <div>
          <h1 className="name">Hi I am Yordanos Solomon</h1>
        </div>
        <div>
          <h2 className="changing-heading" id="changing">WEB DESIGNE REPUBLIC |</h2>
        </div>
        <div>
          <p className="description">
            Hello i am Sen Maxuale, wb designer and photography, public figure.
            welcome to my website, i am best photography and designer, I am
            happy with my work, you have any help please let me know
          </p>
        </div>
        <div className="link-container">
          <ul className="icons">
            <li>
              <a href="#">
                <img className="linkedin" src="/src/assets/linkedin-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/github-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/instagram-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/telegram-icon.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

{
  /*
    <div className="container-lg">
      <div className="col-lg-6">
        <h1 className="row col-lg">Hi I'm Yordanos Solomon</h1>
        <h2 className="row col-lg">WEB DESIGNE REPUBLIC</h2>
        <p className="row col-lg">
          Hello i'm Sen Maxuale, wb designer and photography, public figure.
          welcome to my website, i am best photography and designer, I am happy
          with my work, you have any help please let me know
        </p>
        <ul className="d-flex border p-lg-0">
          <li className="mx-lg-2">i</li>
          <li className="mx-lg-2">i</li>
          <li className="mx-lg-2">i</li>
          <li className="mx-lg-2">i</li>
        </ul>
      </div>
    </div>*/
}
