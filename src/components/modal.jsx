import React from "react";

const Modal = ({ title, children, open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col w-full max-w-lg bg-white rounded-xl shadow-lg">
        <div className="p-4 bg-gray-800 text-white text-center rounded-t-xl">
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <div className="p-4">{children}</div>
        <button
          className="m-4 p-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
