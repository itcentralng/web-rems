const tenancyInfo = [
  {
    id: 1,
    icon: (
      <svg viewBox='0 0 102 102' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M75 29V23H79C79.2627 23.0002 79.5228 22.9485 79.7656 22.8481C80.0083 22.7476 80.2288 22.6003 80.4146 22.4146C80.6003 22.2288 80.7476 22.0083 80.8481 21.7656C80.9485 21.5228 81.0002 21.2627 81 21V13C81.0002 12.7373 80.9485 12.4772 80.8481 12.2344C80.7476 11.9917 80.6003 11.7712 80.4146 11.5854C80.2288 11.3997 80.0083 11.2524 79.7656 11.1519C79.5228 11.0515 79.2627 10.9998 79 11H23C22.7373 10.9998 22.4772 11.0515 22.2344 11.1519C21.9917 11.2524 21.7712 11.3997 21.5854 11.5854C21.3997 11.7712 21.2524 11.9917 21.1519 12.2344C21.0515 12.4772 20.9998 12.7373 21 13V21C20.9998 21.2627 21.0515 21.5228 21.1519 21.7656C21.2524 22.0083 21.3997 22.2288 21.5854 22.4146C21.7712 22.6003 21.9917 22.7476 22.2344 22.8481C22.4772 22.9485 22.7373 23.0002 23 23H27V29C27.0057 33.6738 28.3745 38.2444 30.9387 42.1521C33.5029 46.0597 37.1511 49.1345 41.4365 51C37.1511 52.8655 33.5029 55.9403 30.9387 59.8479C28.3745 63.7556 27.0057 68.3262 27 73V79H23C22.7373 78.9998 22.4772 79.0515 22.2344 79.1519C21.9917 79.2524 21.7712 79.3997 21.5854 79.5854C21.3997 79.7712 21.2524 79.9917 21.1519 80.2344C21.0515 80.4772 20.9998 80.7373 21 81V89C20.9998 89.2627 21.0515 89.5228 21.1519 89.7656C21.2524 90.0083 21.3997 90.2288 21.5854 90.4146C21.7712 90.6003 21.9917 90.7476 22.2344 90.8481C22.4772 90.9485 22.7373 91.0002 23 91H79C79.2627 91.0002 79.5228 90.9485 79.7656 90.8481C80.0083 90.7476 80.2288 90.6003 80.4146 90.4146C80.6003 90.2288 80.7476 90.0083 80.8481 89.7656C80.9485 89.5228 81.0002 89.2627 81 89V81C81.0002 80.7373 80.9485 80.4772 80.8481 80.2344C80.7476 79.9917 80.6003 79.7712 80.4146 79.5854C80.2288 79.3997 80.0083 79.2524 79.7656 79.1519C79.5228 79.0515 79.2627 78.9998 79 79H75V73C74.9943 68.3262 73.6255 63.7556 71.0613 59.8479C68.4971 55.9403 64.8489 52.8655 60.5635 51C64.8489 49.1345 68.4971 46.0597 71.0613 42.1521C73.6255 38.2444 74.9943 33.6738 75 29V29ZM25 15H77V19H25V15ZM77 87H25V83H77V87ZM71 73V79H31V73C31 67.6957 33.1071 62.6086 36.8579 58.8579C40.6086 55.1071 45.6957 53 51 53C56.3043 53 61.3914 55.1071 65.1421 58.8579C68.8929 62.6086 71 67.6957 71 73V73ZM51 49C45.6976 48.9938 40.6141 46.8846 36.8648 43.1352C33.1154 39.3859 31.0062 34.3024 31 29V23H71V29C70.9938 34.3024 68.8846 39.3859 65.1352 43.1352C61.3859 46.8846 56.3024 48.9938 51 49Z'
          fill='#022873'
        />
      </svg>
    ),
    name: "Tenancy Owed",
    amount: "N2,000,000",
  },
  {
    id: 2,
    icon: (
      <svg viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M83.6003 84.801C76.8868 75.85 62.2203 72.403 50.0003 72.0673V65.8246C61.7803 64.9246 68.0003 56.4622 68.0003 48C68.0004 47.7373 67.9488 47.4772 67.8483 47.2344C67.7479 46.9917 67.6006 46.7712 67.4148 46.5854C67.2291 46.3997 67.0085 46.2524 66.7658 46.1519C66.5231 46.0515 66.2629 45.9998 66.0003 46C58.7129 46 53.3518 48.1077 50.0003 51.9771V40H74.0003C74.2629 40.0001 74.5231 39.9485 74.7658 39.848C75.0085 39.7476 75.229 39.6002 75.4148 39.4145C75.6005 39.2288 75.7478 39.0082 75.8483 38.7655C75.9487 38.5228 76.0004 38.2627 76.0003 38V10C76.0004 9.73732 75.9488 9.47718 75.8483 9.23446C75.7478 8.99175 75.6005 8.77121 75.4148 8.58546C75.229 8.39972 75.0085 8.2524 74.7658 8.15195C74.5231 8.05149 74.2629 7.99986 74.0003 8H22.0003C21.7376 7.99986 21.4774 8.05149 21.2347 8.15195C20.992 8.2524 20.7715 8.39972 20.5857 8.58546C20.4 8.77121 20.2527 8.99175 20.1522 9.23446C20.0517 9.47718 20.0001 9.73732 20.0003 10V38C20.0001 38.2627 20.0518 38.5228 20.1522 38.7655C20.2527 39.0082 20.4 39.2288 20.5857 39.4145C20.7715 39.6002 20.992 39.7476 21.2347 39.848C21.4774 39.9485 21.7376 40.0001 22.0003 40H46.0003V51.9771C42.6487 48.1077 37.2876 46 30.0003 46C29.7376 45.9998 29.4774 46.0515 29.2347 46.1519C28.992 46.2524 28.7714 46.3997 28.5857 46.5854C28.3999 46.7712 28.2526 46.9917 28.1522 47.2344C28.0517 47.4772 28.0001 47.7373 28.0003 48C28.0003 56.4622 34.2203 64.9244 46.0003 65.8246V72.0673C33.7803 72.403 19.1137 75.85 12.4003 84.801C12.1773 85.098 12.0415 85.4513 12.0081 85.8212C11.9747 86.1911 12.045 86.563 12.2112 86.8952C12.3773 87.2274 12.6327 87.5067 12.9487 87.7018C13.2647 87.897 13.6288 88.0002 14.0003 88H82.0003C82.3717 88.0003 82.7359 87.897 83.0519 87.7019C83.368 87.5067 83.6234 87.2274 83.7895 86.8952C83.9557 86.5629 84.026 86.191 83.9925 85.8211C83.9591 85.4511 83.8233 85.0978 83.6003 84.8008V84.801ZM72.0003 36H68.0003C68.0013 34.9395 68.4231 33.9227 69.173 33.1727C69.9229 32.4228 70.9397 32.0011 72.0003 32V36ZM72.0003 16C70.9397 15.9989 69.9229 15.5772 69.173 14.8273C68.4231 14.0773 68.0013 13.0605 68.0003 12H72.0003V16ZM24.0003 12H28.0003C27.9992 13.0605 27.5774 14.0773 26.8275 14.8273C26.0776 15.5772 25.0608 15.9989 24.0003 16V12ZM24.0003 32C25.0608 32.0011 26.0776 32.4228 26.8275 33.1727C27.5774 33.9227 27.9992 34.9395 28.0003 36H24.0003V32ZM24.0003 28V20C26.1212 19.9976 28.1547 19.154 29.6544 17.6542C31.1542 16.1544 31.9978 14.121 32.0003 12H64.0003C64.0027 14.121 64.8463 16.1544 66.3461 17.6542C67.8458 19.154 69.8793 19.9976 72.0003 20V28C69.8793 28.0024 67.8458 28.846 66.3461 30.3458C64.8463 31.8456 64.0027 33.879 64.0003 36H32.0003C31.9978 33.879 31.1542 31.8456 29.6544 30.3458C28.1547 28.846 26.1212 28.0024 24.0003 28ZM63.8441 50.0664C62.9867 55.6993 58.5922 61.1407 50.0941 61.9064C50.7835 54.5 55.305 50.6094 63.8441 50.0664ZM32.1565 50.0664C40.6956 50.6094 45.2171 54.5 45.9065 61.9064C37.4084 61.1407 33.0139 55.6993 32.1565 50.0664ZM18.7697 84C25.006 79.051 35.8576 76 48.0003 76C60.143 76 70.9945 79.0508 77.2309 84H18.7697Z'
          fill='#022873'
        />
        <path
          d='M56 24C56 22.4178 55.5308 20.871 54.6518 19.5554C53.7727 18.2399 52.5233 17.2145 51.0615 16.609C49.5997 16.0035 47.9911 15.845 46.4393 16.1537C44.8874 16.4624 43.462 17.2243 42.3432 18.3431C41.2243 19.462 40.4624 20.8874 40.1537 22.4393C39.845 23.9911 40.0035 25.5997 40.609 27.0615C41.2145 28.5233 42.2399 29.7727 43.5554 30.6518C44.871 31.5308 46.4178 32 48 32C50.121 31.9976 52.1544 31.1539 53.6542 29.6542C55.1539 28.1544 55.9976 26.121 56 24ZM44 24C44 23.2089 44.2346 22.4355 44.6741 21.7777C45.1137 21.1199 45.7384 20.6072 46.4693 20.3045C47.2002 20.0017 48.0044 19.9225 48.7804 20.0769C49.5563 20.2312 50.269 20.6122 50.8284 21.1716C51.3878 21.731 51.7688 22.4437 51.9231 23.2196C52.0775 23.9956 51.9983 24.7998 51.6955 25.5307C51.3928 26.2616 50.8801 26.8864 50.2223 27.3259C49.5645 27.7654 48.7911 28 48 28C46.9395 27.9989 45.9227 27.5772 45.1727 26.8273C44.4228 26.0773 44.0011 25.0605 44 24Z'
          fill='#022873'
        />
      </svg>
    ),
    name: "Tenancy Due",
    amount: "N3,500,000",
  },
  {
    id: 3,
    icon: (
      <svg viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M58 50H42C41.7373 49.9999 41.4772 50.0515 41.2345 50.152C40.9918 50.2524 40.7712 50.3997 40.5855 50.5855C40.3998 50.7712 40.2524 50.9918 40.152 51.2345C40.0515 51.4772 39.9999 51.7373 40 52V58H38C37.7373 57.9999 37.4772 58.0515 37.2345 58.1519C36.9917 58.2524 36.7712 58.3997 36.5855 58.5855C36.3997 58.7712 36.2524 58.9917 36.1519 59.2345C36.0515 59.4772 35.9999 59.7373 36 60V68C35.9999 68.2627 36.0515 68.5228 36.152 68.7655C36.2524 69.0082 36.3998 69.2288 36.5855 69.4145C36.7712 69.6003 36.9918 69.7476 37.2345 69.848C37.4772 69.9485 37.7373 70.0001 38 70H40V74H38C37.7373 73.9999 37.4772 74.0515 37.2345 74.152C36.9918 74.2524 36.7712 74.3997 36.5855 74.5855C36.3998 74.7712 36.2524 74.9918 36.152 75.2345C36.0515 75.4772 35.9999 75.7373 36 76V84C35.9999 84.2627 36.0515 84.5228 36.1519 84.7655C36.2524 85.0083 36.3997 85.2288 36.5855 85.4145C36.7712 85.6003 36.9917 85.7476 37.2345 85.848C37.4772 85.9485 37.7373 86.0001 38 86H54C54.2627 86.0001 54.5228 85.9485 54.7655 85.848C55.0083 85.7476 55.2288 85.6003 55.4145 85.4145C55.6003 85.2288 55.7476 85.0083 55.8481 84.7655C55.9485 84.5228 56.0001 84.2627 56 84V78.0006H58C58.2627 78.0007 58.5228 77.9491 58.7655 77.8487C59.0083 77.7482 59.2288 77.6009 59.4145 77.4151C59.6003 77.2294 59.7476 77.0089 59.8481 76.7661C59.9485 76.5234 60.0001 76.2633 60 76.0006V68.0006C60.0001 67.7379 59.9485 67.4778 59.8481 67.2351C59.7476 66.9923 59.6003 66.7718 59.4145 66.5861C59.2288 66.4003 59.0083 66.253 58.7655 66.1525C58.5228 66.0521 58.2627 66.0005 58 66.0006H56V62.0006H58C58.2627 62.0007 58.5228 61.9491 58.7655 61.8486C59.0082 61.7482 59.2288 61.6008 59.4145 61.4151C59.6002 61.2294 59.7476 61.0088 59.848 60.7661C59.9485 60.5234 60.0001 60.2633 60 60.0006V52.0006C60.0002 51.7379 59.9486 51.4777 59.8482 51.2349C59.7478 50.9921 59.6005 50.7715 59.4147 50.5857C59.229 50.3999 59.0084 50.2525 58.7657 50.152C58.5229 50.0515 58.2627 49.9999 58 50ZM52 82.0006H40V78.0006H52V82.0006ZM56 74.0006H44V70.0006H56V74.0006ZM52 66.0006H40V62.0006H52V66.0006ZM56 58.0006H44V54.0006H56V58.0006Z'
          fill='#022873'
        />
        <path
          d='M88.0009 62C88.2636 62.0001 88.5237 61.9485 88.7664 61.8481C89.0092 61.7476 89.2297 61.6003 89.4154 61.4145C89.6012 61.2288 89.7485 61.0083 89.849 60.7655C89.9494 60.5228 90.001 60.2627 90.0009 60V52C90.001 51.7373 89.9494 51.4772 89.849 51.2345C89.7485 50.9917 89.6012 50.7712 89.4154 50.5855C89.2297 50.3997 89.0092 50.2524 88.7664 50.1519C88.5237 50.0515 88.2636 49.9999 88.0009 50H86.0009V44C86.001 43.7373 85.9494 43.4772 85.849 43.2345C85.7485 42.9917 85.6012 42.7712 85.4154 42.5855C85.2297 42.3997 85.0092 42.2524 84.7664 42.1519C84.5237 42.0515 84.2636 41.9999 84.0009 42H68C67.7373 41.9999 67.4772 42.0515 67.2345 42.152C66.9918 42.2524 66.7712 42.3998 66.5855 42.5855C66.3998 42.7712 66.2524 42.9918 66.152 43.2345C66.0515 43.4772 65.9999 43.7373 66 44V52C65.9999 52.2627 66.0515 52.5228 66.1519 52.7655C66.2524 53.0083 66.3997 53.2288 66.5855 53.4145C66.7712 53.6003 66.9917 53.7476 67.2345 53.8481C67.4772 53.9485 67.7373 54.0001 68 54H70V58H68C67.7373 57.9999 67.4772 58.0515 67.2345 58.1519C66.9917 58.2524 66.7712 58.3997 66.5855 58.5855C66.3997 58.7712 66.2524 58.9917 66.1519 59.2345C66.0515 59.4772 65.9999 59.7373 66 60V68C65.9999 68.2627 66.0515 68.5228 66.152 68.7655C66.2524 69.0082 66.3998 69.2288 66.5855 69.4145C66.7712 69.6002 66.9918 69.7476 67.2345 69.848C67.4772 69.9485 67.7373 70.0001 68 70H70V74H68C67.7373 73.9999 67.4772 74.0515 67.2345 74.152C66.9918 74.2524 66.7712 74.3997 66.5855 74.5855C66.3998 74.7712 66.2524 74.9918 66.152 75.2345C66.0515 75.4772 65.9999 75.7373 66 76V84C65.9999 84.2627 66.0515 84.5228 66.1519 84.7655C66.2524 85.0083 66.3997 85.2288 66.5855 85.4145C66.7712 85.6003 66.9917 85.7476 67.2345 85.8481C67.4772 85.9485 67.7373 86.0001 68 86H84C84.2627 86.0002 84.5228 85.9485 84.7656 85.8481C85.0083 85.7476 85.2288 85.6003 85.4146 85.4146C85.6003 85.2288 85.7476 85.0083 85.8481 84.7656C85.9485 84.5228 86.0002 84.2627 86 84V78H88C88.2627 78.0002 88.5228 77.9485 88.7656 77.8481C89.0083 77.7476 89.2288 77.6003 89.4146 77.4146C89.6003 77.2288 89.7476 77.0083 89.8481 76.7656C89.9485 76.5228 90.0002 76.2627 90 76V68C90.0002 67.7373 89.9485 67.4772 89.8481 67.2344C89.7476 66.9917 89.6003 66.7712 89.4146 66.5854C89.2288 66.3997 89.0083 66.2524 88.7656 66.1519C88.5228 66.0515 88.2627 65.9998 88 66H86V62H88.0009ZM70.0009 46H82.0009V50H70.0009V46ZM74.0009 54H86.0009V58H74.0009V54ZM82.0009 82.0006H70.0009V78H82.0009V82.0006ZM86.0009 74.0006H74.0009V70H86.0009V74.0006ZM82.0009 66.0006H70.0009V62H82.0009V66.0006Z'
          fill='#022873'
        />
        <path
          d='M28 66H26V60C26.0002 59.7373 25.9485 59.4772 25.8481 59.2344C25.7476 58.9917 25.6003 58.7712 25.4146 58.5854C25.2288 58.3997 25.0083 58.2524 24.7656 58.1519C24.5228 58.0515 24.2627 57.9998 24 58H8C7.73731 57.9998 7.47717 58.0515 7.23445 58.1519C6.99172 58.2524 6.77118 58.3997 6.58543 58.5854C6.39969 58.7712 6.25237 58.9917 6.15192 59.2344C6.05147 59.4772 5.99984 59.7373 6 60V68C5.99986 68.2627 6.05149 68.5228 6.15195 68.7655C6.25241 69.0083 6.39972 69.2288 6.58546 69.4145C6.77121 69.6003 6.99175 69.7476 7.23446 69.8481C7.47718 69.9485 7.73732 70.0001 8 70H10V74H8C7.73732 73.9999 7.47718 74.0515 7.23446 74.1519C6.99175 74.2524 6.77121 74.3997 6.58546 74.5855C6.39972 74.7712 6.25241 74.9917 6.15195 75.2345C6.05149 75.4772 5.99986 75.7373 6 76V84C5.99984 84.2627 6.05147 84.5228 6.15192 84.7656C6.25237 85.0083 6.39969 85.2288 6.58543 85.4146C6.77118 85.6003 6.99172 85.7476 7.23445 85.8481C7.47717 85.9485 7.73731 86.0002 8 86H24C24.2627 86.0002 24.5228 85.9485 24.7656 85.8481C25.0083 85.7476 25.2288 85.6003 25.4146 85.4146C25.6003 85.2288 25.7476 85.0083 25.8481 84.7656C25.9485 84.5228 26.0002 84.2627 26 84V78H28C28.2627 78.0001 28.5228 77.9485 28.7655 77.8481C29.0083 77.7476 29.2288 77.6003 29.4145 77.4145C29.6003 77.2288 29.7476 77.0083 29.8481 76.7655C29.9485 76.5228 30.0001 76.2627 30 76V68C30.0001 67.7373 29.9485 67.4772 29.8481 67.2345C29.7476 66.9917 29.6003 66.7712 29.4145 66.5855C29.2288 66.3997 29.0083 66.2524 28.7655 66.1519C28.5228 66.0515 28.2627 65.9999 28 66ZM10 62H22V66H10V62ZM22 82H10V78H22V82ZM26 74H14V70H26V74Z'
          fill='#022873'
        />
        <path
          d='M15.9997 45.9994C16.3101 45.999 16.6162 45.9268 16.8942 45.7885L68.5751 19.9485L66.1024 27.3662C65.9346 27.8697 65.9736 28.4193 66.211 28.894C66.4483 29.3687 66.8645 29.7297 67.368 29.8975C67.8715 30.0653 68.4211 30.0263 68.8958 29.7889C69.3705 29.5515 69.7315 29.1353 69.8993 28.6318L73.8993 16.6318C74.0666 16.1286 74.0273 15.5795 73.79 15.1052C73.5526 14.6309 73.1368 14.2703 72.6337 14.1024L60.6337 10.1024C60.3841 10.0172 60.1201 9.98216 59.8569 9.99938C59.5937 10.0166 59.3365 10.0857 59.1002 10.2028C58.8638 10.3198 58.6529 10.4825 58.4797 10.6814C58.3065 10.8803 58.1743 11.1115 58.0909 11.3617C58.0074 11.6118 57.9742 11.8761 57.9933 12.1391C58.0124 12.4022 58.0833 12.6589 58.202 12.8944C58.3207 13.1299 58.4849 13.3397 58.685 13.5115C58.8851 13.6833 59.1172 13.8138 59.368 13.8955L66.7869 16.3699L15.1051 42.2101C14.702 42.4116 14.3787 42.7432 14.1876 43.1514C13.9966 43.5595 13.949 44.0202 14.0525 44.4588C14.1561 44.8974 14.4047 45.2881 14.7581 45.5677C15.1116 45.8473 15.549 45.9994 15.9997 45.9992V45.9994Z'
          fill='#022873'
        />
      </svg>
    ),
    name: "Revenue Generated",
    amount: "N7,340,000",
  },
];

export default tenancyInfo;
