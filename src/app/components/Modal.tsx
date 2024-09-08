import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";

interface ClickProps {
  onClick: () => void;
}

const Modal: React.FC<ClickProps> = ({ onClick }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="h-screen w-screen bg-black opacity-70 z-40 fixed inset-0"
        aria-hidden="true"
        onClick={onClick} // Close modal when clicking on the overlay
      ></div>

      {/* Modal Content */}
      <div className="flex items-center justify-center z-50 h-screen fixed inset-0">
        <div className="p-8 sm:p-12 flex flex-col justify-center items-center w-11/12 sm:w-2/3 md:w-1/3 h-fit rounded-2xl font-Sarabun text-black text-center border border-gray-300 bg-white relative">
          
          {/* Icon */}
          <p className="text-white bg-gradient-tob p-4 rounded-full text-xl">
            <IoCheckmarkSharp />
          </p>

          {/* Title */}
          <h3 className="font-bold text-2xl my-3">Successful</h3>

          {/* Description */}
          <p className="text-sm mb-5">
            You have successfully subscribed to the Ethicalmine newsletter. You will be notified when the app is launched.
          </p>

          {/* Button */}
          <button
            type="button"
            className="bg-gradient-tob rounded-md text-white w-full py-2"
            onClick={onClick}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
