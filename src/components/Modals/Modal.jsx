import React from "react";

export default function Modal(props) {
  return (
    <div
      className={`modal fade ${props.show ? "show" : ""}`}
      id={props.id}
      tabIndex="-1"
      role="dialog"
      style={{ display: props.show ? "block" : "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.onHide}
            ></button>
          </div>
          <div className="modal-body">{props.text}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-bs-dismiss="modal"
              onClick={props.onHide}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
