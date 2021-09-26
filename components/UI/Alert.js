import React from "react";

const Alert = ({ type, message }) => {
  return (
    <div id="alert">
      <p>{message}</p>
    </div>
  );
};

export default Alert;
