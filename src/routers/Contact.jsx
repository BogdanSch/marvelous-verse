import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  setShowConfirmModal,
  setShowErrorModal,
} from "../app/features/showModalSlice";

import Container from "../components/Container";
import Image from "../components/Image";
import Modal from "../components/Modals/Modal";

import contactImage from "../assets/images/contact-us.jpg";

const CONTACT_API_URL = "https://sheetdb.io/api/v1/4zcj2g4npujs9";
const MAX_AMOUNT_LETTERS_FOR_INPUT = 5;
const MAX_AMOUNT_LETTERS_FOR_FIELD = 40;

const Home = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal.value);

  function isFormValid(form) {
    if (form.subject.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT) return false;
    if (form.creditionals.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT)
      return false;
    if (form.message.value.length < MAX_AMOUNT_LETTERS_FOR_FIELD) return false;
    return true;
  }

  function handleContactFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (!isFormValid(form)) {
      console.log("Invalid form!");
      return false;
    }
    fetch(form.action, {
      method: "Post",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(setShowConfirmModal(true));
          form.reset();
        } else {
          dispatch(setShowErrorModal(true));
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(setShowErrorModal(true));
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
              <a className="btn btn-outline-info px-5 py-3" href="#contactForm">
                Contact us
              </a>
            </div>
            <Image
              className="w-50 col"
              src={contactImage}
              alt="Marvel Comics Image"
            />
          </div>
          <div className="contact__form-wrapper row justify-content-center">
            <div className="col-md-8 my-4 card p-4">
              <div className="text-center mb-5">
                <h2 className="contact__form-title" id="contactForm">
                  Let's get <span>in touch!</span>
                </h2>
              </div>
              <form
                action={CONTACT_API_URL}
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
      <section className="map">
        <Container>
          <div className="row">
            <div className="col-12">
              <h2 className="map__title text-center mb-5">
                Our office location
              </h2>
              <iframe
                className="map__iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.2408711071625!2d36.234246576376236!3d50.00684037151092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e6dffdbb8b%3A0xf209264ca6ae97a1!2z0LLRg9C70LjRhtGPINCh0YPQvNGB0YzQutCwLCA0Nywg0KXQsNGA0LrRltCyLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDRl9C90LAsIDYxMDAw!5e0!3m2!1suk!2snl!4v1715330013400!5m2!1suk!2snl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
      <Modal
        id="confirm-modal"
        title="Confirmation message"
        text="Your request was successfully sent!"
        show={showModal.confirmModal}
        onHide={() => dispatch(setShowConfirmModal(false))}
      />
      <Modal
        id="error-modal"
        title="Error message"
        text="There was an error, please try again later!"
        show={showModal.errorModal}
        onHide={() => dispatch(setShowErrorModal(false))}
      />
    </main>
  );
};

export default Home;
