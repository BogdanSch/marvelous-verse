import React from "react";
import { useState } from "react";

import Container from "../components/Container";
import Image from "../components/Image";

const Home = () => {
  return (
    <main className="main">
      <section className="contact mt-5">
        <Container>
          <div className="my-5 text-center w-75 mx-auto">
            <h2 className="mt-3">Contact us</h2>
            <p>
              Have a question or feedback? Feel free to reach out to us! Whether
              you want to share your thoughts, report an issue, or just say
              hello, we're here to help. Use the form below to send us a
              message, and we'll get back to you as soon as possible. Thank you
              for using Marvelous Verse!
            </p>
          </div>
          <div className="contact__form-wrapper row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="contact__form-title">
                Let's get <span>in touch!</span>
              </h2>
            </div>
            <div className="col-md-6 my-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
