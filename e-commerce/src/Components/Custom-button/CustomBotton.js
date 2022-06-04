import React from "react";
import "./CustomButton.style.scss";

const CustomButton = ({ children, isgooglesignin, ...otherProps }) => (
  <button
    className={`${isgooglesignin ? "google-sign-in" : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
