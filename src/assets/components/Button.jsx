import React from "react";

const Button = ({ label, image, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;