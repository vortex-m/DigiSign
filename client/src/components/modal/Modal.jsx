import React from "react";

function Modal({ onClose, open, children }) {
  return (
    <div>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-20 flex justify-center items-center ${
          open ? "bg-blue-500" : "invisible"
        }`}
      >
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
