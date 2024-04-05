import React, { useState } from "react";
import "./Modal.css"; 

function ImageModal({ isOpen, closeModal, imgSrc, altText, description }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={closeModal} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={closeModal} aria-label="Close">
          &times;
        </button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/River_of_Blue.jpg/1280px-River_of_Blue.jpg"
          alt={altText}
          style={{ maxWidth: "100%" }}
        />
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default ImageModal;
