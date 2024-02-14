import React, { useState } from "react";
import "./Modal.css"; // Make sure to create a Modal.css file with the CSS provided earlier

// function ImageModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <>
//       <button onClick={openModal}>Open Modal</button>

//       {isOpen && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             <img
//               src="ttps://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/River_of_Blue.jpg/1280px-River_of_Blue.jpg"
//               alt="Descriptive Alt Text"
//               style={{ maxWidth: "100%" }}
//             />
//             <p>Some text description can go here if needed.</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ImageModal;

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
