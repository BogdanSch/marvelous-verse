import React from "react";
import Container from "../components/Container";

const About = () => {
  return (
    <main className="main">
      <Container>
        <div className="title">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <p>
            Our Marvel Heroes app is designed to help you explore the vast and
            exciting world of Marvel Comics characters. Whether you're a
            long-time fan or new to the Marvel universe, our app provides a
            wealth of information about your favorite heroes and villains.
          </p>
          <p>
            With our app, you can search for characters, read their biographies,
            view their latest appearances in comics, and much more. We strive to
            provide the most comprehensive and up-to-date information to enhance
            your Marvel experience.
          </p>
          <p>
            Marvel Heroes is created by a team of passionate fans who share a
            love for the Marvel universe. We hope you enjoy using our app as
            much as we enjoyed creating it!
          </p>
        </div>
      </Container>
    </main>
  );
};

export default About;
