import React from "react";
import "./Modal.css"; 

const SimpleModal = ({ isOpen, closeModal, imgSrc, altText, description }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/River_of_Blue.jpg/1280px-River_of_Blue.jpg"
          alt={altText}
          style={{ maxWidth: "100%", display: "block", marginBottom: "20px" }}
        />
        <p>{description}</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};
export default SimpleModal;
