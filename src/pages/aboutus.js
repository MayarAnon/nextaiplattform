function Aboutus() {
  return (
    <div>
      <nav>
        <div className="nav-center">
          <div className="nav-container">
            <h1 className="welcome">Welcome to AI-Overview</h1>
          </div>
        </div>
      </nav>
      <div className="aboutus">
        <p className="lead">
          Your all-in-one resource for everything related to AI tools!
        </p>
        <div className="aboutus-container">
          <p>
            Our website was created with the mission of providing a
            comprehensive overview of the available AI tools on the internet. We
            know that the world of artificial intelligence can be overwhelming,
            and that's why we've done the research for you. Our team has
            carefully curated and organized the best AI tools available in
            various categories, so you can find exactly what you need without
            having to spend hours searching. We're passionate about making AI
            more accessible to everyone, and we believe that our website can
            help achieve that goal. Thank you for visiting our website, and we
            hope you find it helpful!
          </p>
        </div>
        <div className="info">
          <button
            className="btn"
            aria-label="Go to impressum.html"
            onClick={() => {
              window.open("/impressum.html").focus();
            }}
          >
            Company Details (De)
          </button>
          &nbsp;
          <button
            className="btn"
            aria-label="Go to datenschutz.html"
            onClick={() => {
              window.open("/datenschutz.html").focus();
            }}
          >
            Privacy policy(De)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
