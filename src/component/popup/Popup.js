import React from "react";
import "./popup.css";

const Popup = ({ success, error }) => {
  return (
    <div className="popup-background">
      <div className="pop">
        <div className="popup-container">
          <span className="popup-icon">
            {success ? (
              <svg
                viewBox="0 0 406 406"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="203"
                  cy="203"
                  r="200"
                  stroke="#28E093"
                  strokeWidth="5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M93.6074 203L121.232 175.376L176.48 230.624L286.978 120.127L314.602 147.751L176.48 285.873L93.6074 203Z"
                  fill="#28E093"
                  stroke="#28E093"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <span className="popup-icon">
                {" "}
                <svg
                  viewBox="0 0 406 406"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="203"
                    cy="203"
                    r="200"
                    stroke="#730202"
                    strokeWidth="5"
                  />
                  <path
                    d="M247.241 146.51L258.737 158.006L157.205 259.539L145.708 248.043L247.241 146.51ZM154.865 144.271L262.705 252.112L250.496 264.32L142.656 156.48L154.865 144.271Z"
                    fill="#730202"
                  />
                </svg>
              </span>
            )}
          </span>
          <p className="popup-text">
            {success ? "Sent Successfully" : "There was a problem"}
          </p>
          <div className={`popup-button ${success ? "success" : "error"}`}>
            {success ? "Go Back" : "Try Again"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
