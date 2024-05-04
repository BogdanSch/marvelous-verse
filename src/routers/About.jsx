import React from "react";

import Container from "../components/Container.jsx";
import Image from "../components/Image.jsx";
import aboutImage from "../assets/images/marvel-comics.jpg";

const About = () => {
  return (
    <main className="main">
      <section className="about mt-5 mb-5">
        <Container>
          <div className="d-flex flex-md-row flex-column gap-5 justify-content-center align-items-center">
            <Image
              className="w-50"
              src={aboutImage}
              alt="Marvel Comics Image"
            />
            <div className="about__content text-center">
              <h2 className="about__title">About</h2>
              <div className="about__description">
                <p>
                  Our Marvel Heroes app is designed to help you explore the vast
                  and exciting world of Marvel Comics characters. Whether you're
                  a long-time fan or new to the Marvel universe, our app
                  provides a wealth of information about your favorite heroes
                  and villains.
                </p>
                <p>
                  With our app, you can search for characters, read their
                  biographies, view their latest appearances in comics, and much
                  more. We strive to provide the most comprehensive and
                  up-to-date information to enhance your Marvel experience.
                </p>
                <p>
                  Marvel Heroes is created by a team of passionate fans who
                  share a love for the Marvel universe. We hope you enjoy using
                  our app as much as we enjoyed creating it!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default About;
