function App() {
  return (
    <div className="App" id="home">
      <div className="sticky-top bg-light">
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm" id="mainNav">
          <div className="container px-5">
            <div className="">
              <a className="btn btn-outline-warning text-warning rounded-circle me-2" href="https://www.linkedin.com/in/syaswen/" role="button"><i className="bi-linkedin"></i></a>
              <a className="btn btn-outline-warning text-warning rounded-circle me-2" href="https://github.com/newsay/" role="button"><i className="bi-github"></i></a>
              <a className="btn btn-outline-warning text-warning rounded-circle me-2" href="https://twitter.com/y_swen/" role="button"><i className="bi-twitter"></i></a>
              <a className="btn btn-outline-warning text-warning rounded-circle me-2" href="mailto:syaswen@gmail.com" role="button"><i className="bi-envelope-fill"></i></a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto my-3 my-lg-0">
                <li className="nav-item"><a className="nav-link me-lg-3" href="#home">Home</a></li>

                <li className="nav-item"><a className="nav-link me-lg-3" href="#work">Work</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <header className="bg-grad">
        <div className="container p-5">
          <div className="row align-items-center conth">
            <div className="col">
              <div className="text-lg-start text-center align-text-bottom">
                <img src="/assets/profile.jpg" className="rounded-circle m-3 profile" alt="profile" />
                <h1 className="display-1 name text-grad">SHOSHANA YASWEN</h1>
                <h2 className="text-dark tagline">Software Developer in Washington, D.C.</h2>
              </div>
              <div className="col">
              </div>
            </div>

          </div>
        </div>
      </header>

      <section className="bg-col" id="work">
        <div className="container px-5">
          <div className="row align-items-center justify-content-center conth">
            <div className="col-12 col-lg-4">
              <h2 className="display-4">Work</h2>
              <p className="lead fw-normal text-muted">Check out my latest project live:</p> <a role="button" href="https://wintech-web-app.web.app/" className="btn btn-outline-primary">WintechCorp <i class="bi bi-box-arrow-up-right"></i>
              </a>


            </div>

            <div className="col-12 col-lg-8">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="5000">
                    <img src="/assets/w1.png" className="img-fluid" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img src="/assets/w2.png" className="img-fluid" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img src="/assets/w3.png" className="img-fluid" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img src="/assets/n1.png" className="img-fluid" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img src="/assets/n2.png" className="img-fluid" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img src="/assets/n3.png" className="img-fluid" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img src="/assets/n4.png" className="img-fluid" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Prev</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white" id="about">
        <div className="container px-5">
          <div className="row conth gx-5 align-items-center justify-content-center justify-content-lg-between">
            <div className="col-sm-8 col-md-6">
              <img src="/assets/img1.jpg" className="profile rounded-circle m-3 " alt="" />
            </div>
            <div className="col-12 col-lg-5">
              <h2 className="display-4 lh-1 mb-4">About</h2>
              <p className="lead fw-normal text-muted mb-5 mb-lg-0">tagline</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light" id="contact">
        <div className="container">
          <div className="row align-items-center justify-content-center conth">
            <div className="col-lg-7">
              <h2 className="display-4 text-center">Leave a Message</h2>
              <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Your name" required />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="Your email" required />
                  <label for="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" placeholder="Your phone number" maxLength={10} />
                  <label for="phone">Phone number</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Your message" id="floatingTextarea2" maxLength={4000} style={{ height: 20 + "vh" }}></textarea>
                  <label for="floatingTextarea2">Message</label>
                </div>
                <div className="d-grid pb-3"><button className="btn  btn-outline-primary rounded-pill btn-lg" id="submitButton" type="submit">Submit</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-center py-5">
        <div className="container px-5">
          <div className="text-muted">
            <div>Copyright © 2022 Shoshana Yaswen. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
