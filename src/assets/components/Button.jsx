import React from "react";

const Button = ({ nameClass, image, onClick }) => {
  return (
    <button className={nameClass} onClick={onClick}>
    </button>
  );
};

export default Button;