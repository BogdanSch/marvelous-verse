import React, { useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Modal(props) {
  useEffect(() => {
    let modalInstance = new bootstrap.Modal(document.getElementById(props.id));
    if (props.show) modalInstance.show();
  }, [props.id, props.show]);

  return (
    <div className="modal fade" id={props.id} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
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
