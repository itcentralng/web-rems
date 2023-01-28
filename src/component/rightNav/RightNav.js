import "./rightNav.css";

const RightNav = ({
  button,
  input,
  ghostButton,
  buttonText,
  icon,
  onClick = () => {},
  ...props
}) => {
  return (
    <div className="right-nav">
      {input && (
        <div className="input-container">
          <span className="search-icon">
            <svg
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C13.4183 18 17 14.4183 17 10C17 5.58172 13.4183 2 9 2C4.58172 2 1 5.58172 1 10C1 14.4183 4.58172 18 9 18Z"
                stroke="#95A7BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9999 19.9999L14.6499 15.6499"
                stroke="#95A7BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input type="text" {...props}/>
        </div>
      )}
      {button && (
        <button className="button" onClick={onClick}>
          {icon && (
            <span>
              <svg
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_110_4612)">
                  <path
                    d="M19.957 9.52734V11.7344H0.464844V9.52734H19.957ZM11.3047 0.445312V21.1484H8.96094V0.445312H11.3047Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_110_4612">
                    <rect width="20" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          )}
          <div className="button-text">{buttonText}</div>
        </button>
      )}
      {ghostButton && (
        <button className="button ghost" onClick={onClick}>
          <div className="button-text">{buttonText}</div>
        </button>
      )}
    </div>
  );
};

export default RightNav;
