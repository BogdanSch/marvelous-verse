import React from "react";
import { useState } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

import Container from "../components/Container";
import Image from "../components/Image";
import Modal from "../components/Modals/Modal";

import contactImage from "../assets/images/contact-us.jpg";
const API_URL = "https://sheetdb.io/api/v1/4zcj2g4npujs9";

const Home = () => {
  // const [showConfirmModal, setShowConfirmModal] = useState(false);
  // const [showErrorModal, setShowErrorModal] = useState(false);

  function handleContactFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let confirmModal = new bootstrap.Modal(
      document.getElementById("confirm-modal")
    );
    let errorModal = new bootstrap.Modal(
      document.getElementById("error-modal")
    );

    fetch(form.action, {
      method: "Post",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          confirmModal.show();
          // setShowConfirmModal(true);
          form.reset();
        } else {
          errorModal.show();
          // setShowErrorModal(true);
          form.reset();
        }
      })
      .catch((error) => {
        errorModal.show();
        console.error(error);
        // setShowErrorModal(true);
        form.reset();
      });
  }
  return (
    <main className="main">
      <section className="contact">
        <Container>
          <div className="row row-cols-1 row-cols-lg-3 align-items-center justify-content-center g-4 row-spacing">
            <div className="col text-center">
              <h2 className="contact__title">Got some questions?</h2>
              <div className="contact__description">
                <p>
                  Have a question or feedback? Feel free to reach out to us!
                  Whether you want to share your thoughts, report an issue, or
                  just say hello, we're here to help. Use the form below to send
                  us a message, and we'll get back to you as soon as possible.
                  Thank you for using Marvelous Verse!
                </p>
              </div>
            </div>
            <Image
              className="w-50 col"
              src={contactImage}
              alt="Marvel Comics Image"
            />
          </div>
          <div className="contact__form-wrapper row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="contact__form-title">
                Let's get <span>in touch!</span>
              </h2>
            </div>
            <div className="col-md-8 my-4 card p-4">
              <form
                action={API_URL}
                method="post"
                onSubmit={handleContactFormSubmit}
              >
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Subject: "
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="creditionals" className="form-label">
                    Creditionals *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="creditionals"
                    name="creditionals"
                    placeholder="Creditionals: "
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email address: "
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Message: "
                    required
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
      <Modal
        id="confirm-modal"
        title="Confirmation message"
        text="Your request was successfully sent!"
        // show={showConfirmModal}
        // onHide={() => setShowConfirmModal(false)}
      />
      <Modal
        id="error-modal"
        title="Error message"
        text="There was an error, please try again later!"
        // show={showErrorModal}
        // onHide={() => setShowErrorModal(false)}
      />
    </main>
  );
};

export default Home;
