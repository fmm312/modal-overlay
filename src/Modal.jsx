import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

// import CheckIcon from '../../../../../../image/check_icon.png';
// import ExclamationIcon from '../../../../../../image/ic_exclamation.png';

import './styles.scss';

export default function Modal({ open, setOpen }) {
  if (!open) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div className="modal-container">
        <div className="modal-header">
          <h3>
            Lorem ipsum 
          </h3>

          <div className="icon-container">
            <FontAwesomeIcon 
                icon={faXmark} 
                className="close-icon"
                onClick={() => setOpen(false)}
            />
          </div>
        </div>

        <div className="modal-description">
            <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In aliquam risus eros, nec sollicitudin elit efficitur a.
            </p>
        </div>

        <div className="modal-footer">
            <button>
                Next
            </button>
        </div>
      </div>
    </div>
  )
}
