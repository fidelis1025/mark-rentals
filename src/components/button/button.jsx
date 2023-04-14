import React from "react";

const Button = ({ className, handleClick, children }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={`md:h-[3rem] md:text-base md:font-normal md:rounded-xl md:bg-[#F4511E] hover:border-2 hover:bg-transparent hover:text-[#252B42] hover:border-[#F4511E] ${className}`}
        type="button"
      >
        {children}
      </button>
    </div>
  );
};



export default Button;
