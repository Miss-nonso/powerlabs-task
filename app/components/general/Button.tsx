import React from "react";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`${className} py-2 px-3 transition-all duration-300 ease-in-out hover:border-1 hover:border-black `}
    >
      {text}
    </button>
  );
};

export default Button;
