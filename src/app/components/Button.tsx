import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", ariaLabel }) => {
  return (
    <button
      className='py-3 px-10 my-5 mx-1 bg-gradient-tob rounded-md text-white font-semibold'
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;