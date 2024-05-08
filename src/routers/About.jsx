import React from "react";

import Container from "../components/Container.jsx";
import Image from "../components/Image.jsx";

import aboutImage from "../assets/images/marvel-comics.jpg";

const About = () => {
  return (
    <main className="main">
      <section className="about mb-5">
        <Container>
          <div className="row row-cols-1 row-cols-lg-3 align-items-center justify-content-center g-4 row-spacing">
            <Image
              className="w-50 col"
              src={aboutImage}
              alt="Marvel Comics Image"
            />
            <div className="about__content text-center">
              <h2 className="about__title">About Marvelous Verse</h2>
              <div className="about__description col">
                <p>
                  Our Marvelous Verse app is designed to help you explore the
                  vast and exciting world of Marvel Comics characters. Whether
                  you're a long-time fan or new to the Marvel universe, our app
                  provides a wealth of information about your favorite heroes
                  and villains.
                </p>
              </div>
              <a className="btn btn-outline-info px-5 py-3" href="#features">
                Observe more
              </a>
            </div>
          </div>
        </Container>
      </section>
      <section className="features" id="features">
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="text-center">Our features</h2>
          <div className="features__list row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col features__item">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Explore Marvel Characters
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <Image
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        className="rounded-circle features__svg"
                      />
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em">
                        <use xlink:href="#geo-fill"></use>
                      </svg> */}
                      <small>Explore</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col features__item">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Find Your Favorites
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <Image
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        className="rounded-circle features__svg"
                      />
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em">
                        <use xlink:href="#geo-fill"></use>
                      </svg> */}
                      <small>Heroes</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col features__item">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Connect with Fans
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <Image
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        className="rounded-circle features__svg"
                      />
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em">
                        <use xlink:href="#geo-fill"></use>
                      </svg> */}
                      <small>Fans</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
