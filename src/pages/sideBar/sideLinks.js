const sideLinks = [
  {
    id: 1,
    name: "dashboard",
    path: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 22V12H15V22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "listing",
    path: "/listing",
    icon: (
      <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 10.0527V15.0527C22 20.0527 20 22.0527 15 22.0527H9C4 22.0527 2 20.0527 2 15.0527V9.05273C2 4.05273 4 2.05273 9 2.05273H14"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 10.0527H18C15 10.0527 14 9.05273 14 6.05273V2.05273L22 10.0527Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13.0527H13"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17.0527H11"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "properties",
    path: "/properties",
    icon: (
      <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.16669 10.2871L14.5 4.49219L22 10.2871V19.3935C22 19.8326 21.8244 20.2538 21.5119 20.5643C21.1993 20.8748 20.7754 21.0492 20.3334 21.0492H8.66669C8.22466 21.0492 6.9674 20.8748 6.65484 20.5643C6.34228 20.2538 6.16669 19.8326 6.16669 19.3935V10.2871Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33333 20.2213C4.89131 20.2213 2.80072 20.0469 2.48816 19.7364C2.17559 19.4259 2 19.0047 2 18.5656V9.45926L9.5 3.66431L11.5833 4.90608"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 21.0493V12.7708H17V21.0493"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "agents",
    path: "/agents",
    icon: (
      <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 21.2828V19.2959C17 18.2421 16.5786 17.2313 15.8284 16.4861C15.0783 15.7409 14.0609 15.3223 13 15.3223H5C3.93913 15.3223 2.92172 15.7409 2.17157 16.4861C1.42143 17.2313 1 18.2421 1 19.2959V21.2828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11.3485C11.2091 11.3485 13 9.56941 13 7.37481C13 5.1802 11.2091 3.40112 9 3.40112C6.79086 3.40112 5 5.1802 5 7.37481C5 9.56941 6.79086 11.3485 9 11.3485Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 21.2828V19.296C22.9993 18.4155 22.7044 17.5602 22.1614 16.8644C21.6184 16.1685 20.8581 15.6715 20 15.4514"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.53027C16.8604 3.74913 17.623 4.24623 18.1676 4.94323C18.7122 5.64022 19.0078 6.49745 19.0078 7.37978C19.0078 8.26211 18.7122 9.11934 18.1676 9.81633C17.623 10.5133 16.8604 11.0104 16 11.2293"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "tenants",
    path: "/tenants",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 20.8814V18.8946C20 17.8407 19.5786 16.83 18.8284 16.0848C18.0783 15.3396 17.0609 14.9209 16 14.9209H8C6.93913 14.9209 5.92172 15.3396 5.17157 16.0848C4.42143 16.83 4 17.8407 4 18.8946V20.8814"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.9474C14.2091 10.9474 16 9.16829 16 6.97368C16 4.77908 14.2091 3 12 3C9.79086 3 8 4.77908 8 6.97368C8 9.16829 9.79086 10.9474 12 10.9474Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "archives",
    path: "/archives",
    icon: (
      <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.706 6.23927L18.707 3.24027C18.6143 3.14722 18.5041 3.07344 18.3828 3.02315C18.2614 2.97287 18.1313 2.94708 18 2.94727H6C5.86866 2.94708 5.73857 2.97287 5.61724 3.02315C5.4959 3.07344 5.38571 3.14722 5.293 3.24027L2.294 6.23927C2.20057 6.33194 2.12647 6.44225 2.076 6.56378C2.02553 6.68532 1.9997 6.81567 2 6.94727V19.9473C2 21.0503 2.897 21.9473 4 21.9473H20C21.103 21.9473 22 21.0503 22 19.9473V6.94727C22.0003 6.81567 21.9745 6.68532 21.924 6.56378C21.8735 6.44225 21.7994 6.33194 21.706 6.23927ZM6.414 4.94727H17.586L18.586 5.94727H5.414L6.414 4.94727ZM4 19.9473V7.94727H20L20.002 19.9473H4Z" />
        <path d="M14 9.94727H10V12.9473H7L12 17.9473L17 12.9473H14V9.94727Z" />
      </svg>
    ),
  },
];

export default sideLinks;
