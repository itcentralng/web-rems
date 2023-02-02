import "./Invoice.css";
import RightNav from "../../../component/rightNav/RightNav";
import { useNavigate, useLocation } from "react-router-dom";
import { useGetAccountQuery } from "../../settings/accountApiSlice";
import homeIcon from '../../../assets/home.png'
import { useEffect, useState } from "react";
import Popup from "../../../component/popup/Popup"

const Invoice = () => {
  const location = useLocation();
  const unit = location?.state?.unit;
  const tenant = location?.state?.tenant;
  const amount = location?.state?.amount;
  const { data: account, isLoading: accountLoading } = useGetAccountQuery();
  const [rentPeriod, setRentPeriod] = useState("");
  const navigate = useNavigate();

  const showDate = (date) => {
    let newDate = new Date();
    if (date) {
      newDate = new Date(date);
    }
    return newDate.toDateString();
  };

  const showFormatedMoney = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount);
  };

  const printReceipt = () => {
    window.print();
  };


  return (
    accountLoading ? <h1 className='title'>Loading transaction....</h1> :
    <div className="listing narrow-page">
      <div className="top-header">
        <span></span>
        <RightNav
          button
          buttonText="Back"
          onClick={() => navigate("/tenants")}
        />
      </div>
      {/* The Receipt */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <div class="page-content container">
            <div class="page-header text-blue-d2">
                <h1 class="page-title text-secondary-d1">
                    Invoice

                    <small class="page-info">
                        <i class="fa fa-angle-double-right text-80"></i>
                    </small>
                </h1>

                <div class="page-tools">
                    <div class="action-buttons">
                        <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print" 
                          onClick={printReceipt}>
                            <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                            Print
                        </a>
                        <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF" 
                        onClick={printReceipt}>
                            <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                            Export
                        </a>
                    </div>
                </div>
            </div>

            <div class="container px-0">
                <div class="row mt-4">
                    <div class="col-12 col-lg-12">
                        <div class="row">
                            <div class="col-12" style={{display:'flex', justifyContent:'space-between', alignItems: 'center', marginTop: '2rem'}}>
                                <svg
                                className="logo"
                                viewBox="0 0 60 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M0 27.3785C0 24.243 1.47061 21.2891 3.97248 19.3992L23.6258 4.55317C27.1925 1.85888 32.1141 1.85888 35.6809 4.55316L55.3342 19.3992C57.836 21.2891 59.3067 24.243 59.3067 27.3785V57.6C59.3067 59.2974 58.6124 60.9253 57.3766 62.1255C56.1408 63.3257 54.4647 64 52.717 64H6.58963C4.84195 64 3.16585 63.3257 1.93006 62.1255C0.694262 60.9253 0 59.2974 0 57.6V27.3785Z"
                                    fill="#022873"
                                />
                                <g clipPath="url(#clip0_180_2946)">
                                    <path
                                    d="M3.41406 57.1736V55.7985H4.93495V46.7356H3.41406V45.3606H9.87263C10.7338 45.3606 11.4838 45.4787 12.1227 45.7148C12.7616 45.937 13.2547 46.2842 13.602 46.7565C13.9631 47.2287 14.1437 47.8329 14.1437 48.5691C14.1437 49.1107 14.0395 49.5969 13.8311 50.0274C13.6367 50.4441 13.3242 50.7983 12.8936 51.09C12.4769 51.3678 11.9352 51.5692 11.2685 51.6942L13.7686 55.7777H15.352V57.1736H12.2061L9.16428 51.9233H7.87259V50.5066H9.62265C10.2199 50.5066 10.6852 50.4163 11.0185 50.2358C11.3519 50.0413 11.588 49.7983 11.7269 49.5066C11.8658 49.201 11.9352 48.8816 11.9352 48.5482C11.9352 48.2149 11.8588 47.9162 11.7061 47.6524C11.5533 47.3746 11.3241 47.1523 11.0185 46.9857C10.713 46.819 10.324 46.7356 9.85181 46.7356H7.12254V55.7985H8.62258V57.1736H3.41406Z"
                                    fill="white"
                                    />
                                </g>
                                <g clipPath="url(#clip1_180_2946)">
                                    <path
                                    d="M24.5767 60.5866V59.4867H25.7932V52.2371H24.5767V51.1372H33.0094V54.0704H31.7595V52.2371H27.5431V55.1536H30.0763V54.1037H30.9596V57.3368H30.0763V56.2535H27.5431V59.47H31.8429V57.5701H33.0761V60.5866H24.5767Z"
                                    fill="white"
                                    />
                                </g>
                                <g clipPath="url(#clip2_180_2946)">
                                    <path
                                    d="M41.8351 57.1736V55.7985H43.3143V46.7356H41.8351V45.3606H46.3352L49.8562 53.1109L53.2105 45.3606H57.6899V46.7356H56.2315V55.7985H57.6899V57.1736H52.7105V55.7985H54.1272V47.2357L50.0021 56.611H49.1896L45.0019 47.2357V55.7985H46.4186V57.1736H41.8351Z"
                                    fill="white"
                                    />
                                </g>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.2735 32C17.2735 31.1716 17.9451 30.5 18.7735 30.5H38.4002C39.1723 30.5 39.8082 31.0834 39.891 31.8334C40.2868 32.1035 40.5467 32.5581 40.5467 33.0734L40.5467 62.5C40.5467 63.3285 39.8751 64 39.0467 64C38.2182 64 37.5467 63.3285 37.5467 62.5L37.5467 33.5H21.3466L21.3466 62.5C21.3466 63.3285 20.675 64 19.8466 64C19.0182 64 18.3466 63.3285 18.3466 62.5L18.3466 33.4384C17.7261 33.2545 17.2735 32.6801 17.2735 32Z"
                                    fill="#95A7BF"
                                />
                                <defs>
                                    <clipPath id="clip0_180_2946">
                                    <rect
                                        x="3.41321"
                                        y="45.2268"
                                        width="11.9467"
                                        height="11.9467"
                                        rx="2"
                                        fill="white"
                                    />
                                    </clipPath>
                                    <clipPath id="clip1_180_2946">
                                    <rect
                                        x="24.32"
                                        y="50.7732"
                                        width="8.96"
                                        height="9.81333"
                                        rx="2"
                                        fill="white"
                                    />
                                    </clipPath>
                                    <clipPath id="clip2_180_2946">
                                    <rect
                                        x="41.8134"
                                        y="45.2268"
                                        width="16.2133"
                                        height="11.9467"
                                        rx="2"
                                        fill="white"
                                    />
                                    </clipPath>
                                </defs>
                                </svg>

                                <div class="text-center text-150">
                                    <h2 class="text-default-d3"><strong>{account.company}</strong></h2>
                                </div>
                                <h2 class="text-default-d3">

                                    <small class="page-info">
                                        <i class="fa fa-angle-double-right text-80"></i>
                                    </small>
                                </h2>

                            </div>
                        </div>

                        <hr class="row brc-default-l1 mx-n1 mb-4" />

                        <div class="row">
                            <div class="col-sm-6">
                                <div>
                                    <span class="text-sm text-grey-m2 align-middle">To:</span>
                                    <span class="text-600 text-110 text-blue align-middle">{tenant?.name}</span>
                                </div>
                                <div class="text-grey-m2">
                                    <span class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">{tenant?.phone}</b></span>
                                </div>
                            </div>

                            <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                <hr class="d-sm-none" />
                                <div class="text-grey-m2">
                                    
                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Rent Period: {rentPeriod}</span> </div>

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Due date: {showDate(unit.next_payment_date)}</span> </div>

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date: {showDate(null)}</span></div>

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-success badge-pill px-25">Invoice</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="row text-600 text-white bgc-default-tp1 py-25">
                                <div class="d-none d-sm-block col-1">#</div>
                                <div class="col-9 col-sm-5">Property</div>
                                <div class="d-none d-sm-block col-4 col-sm-2">Unit</div>
                                <div class="d-none d-sm-block col-sm-2">Unit Price</div>
                                <div class="col-2">Amount</div>
                            </div>


                            <div class="row border-b-2 brc-default-l2"></div>

                    <div class="table-responsive">
                        <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                            {/* <thead class="bg-none bgc-default-tp1"> */}
                                <tr class="text-white">
                                    <th class="opacity-2">#</th>
                                    <th>Property</th>
                                    <th>Unit</th>
                                    <th>Unit Price</th>
                                    <th width="140">Amount</th>
                                </tr>
                            {/* </thead> */}
                                <tr></tr>
                                <tr>
                                    <td><strong>1</strong></td>
                                    <td><strong>{unit?.property?.name}</strong></td>
                                    <td><strong>{unit.name}</strong></td>
                                    <td class="text-95"><strong>{showFormatedMoney(amount)}</strong></td>
                                    <td class="text-secondary-d2"><strong>{showFormatedMoney(amount)}</strong></td>
                                </tr> 
                        </table>
                    </div>

                            <div class="row mt-3">
                                <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                                    
                                </div>

                                <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last" >
                                    <div class="row my-2" style={{display:'flex', alignItems:'center'}}>
                                        <div class="col-7 ">
                                            <b>Account Name</b>: {account.account_name}
                                        </div>
                                        <div class="col-5">
                                            <span class="text-120 text-secondary-d1"></span>
                                        </div>
                                    </div>

                                    <div class="row my-2 align-items-center bgc-primary-l3 p-2" style={{display:'flex', alignItems:'center'}}>
                                        <div class="col-7 ">
                                            <b>Account Number</b>: {account.account_number}
                                        </div>
                                        {/* <div class="col-5">
                                            <span class="text-150 text-success-d3 opacity-2"></span>
                                        </div> */}
                                    </div>
                                    <div class="row my-2 align-items-center bgc-primary-l3 p-2" style={{display:'flex', alignItems:'center'}}>
                                        <div class="col-7 ">
                                            <b>Bank</b>: {account.bank}
                                        </div>
                                        {/* <div class="col-5">
                                            <span class="text-150 text-success-d3 opacity-2"></span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div>
                                <span class="text-secondary-d1 text-105">Thank you for your business</span>
                                <a href="#" class="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0" onClick={printReceipt}>Print</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-content container duplicate">
            <div class="page-header text-blue-d2">
                <h1 class="page-title text-secondary-d1">
                    Receipt Due date: {showDate(unit.next_payment_date)}

                    <small class="page-info">
                        <i class="fa fa-angle-double-right text-80"></i>
                    </small>
                </h1>

                <div class="page-tools">
                    <div class="action-buttons">
                        <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print" 
                          onClick={printReceipt}>
                            <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                            Print
                        </a>
                        <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF" 
                        onClick={printReceipt}>
                            <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                            Export
                        </a>
                    </div>
                </div>
            </div>

            <div class="container px-0">
                <div class="row mt-4">
                    <div class="col-12 col-lg-12">
                        <div class="row">
                            <div class="col-12" style={{display:'flex', justifyContent:'space-between', alignItems: 'center', marginTop: '2rem'}}>
                                <svg
                                className="logo"
                                viewBox="0 0 60 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M0 27.3785C0 24.243 1.47061 21.2891 3.97248 19.3992L23.6258 4.55317C27.1925 1.85888 32.1141 1.85888 35.6809 4.55316L55.3342 19.3992C57.836 21.2891 59.3067 24.243 59.3067 27.3785V57.6C59.3067 59.2974 58.6124 60.9253 57.3766 62.1255C56.1408 63.3257 54.4647 64 52.717 64H6.58963C4.84195 64 3.16585 63.3257 1.93006 62.1255C0.694262 60.9253 0 59.2974 0 57.6V27.3785Z"
                                    fill="#022873"
                                />
                                <g clipPath="url(#clip0_180_2946)">
                                    <path
                                    d="M3.41406 57.1736V55.7985H4.93495V46.7356H3.41406V45.3606H9.87263C10.7338 45.3606 11.4838 45.4787 12.1227 45.7148C12.7616 45.937 13.2547 46.2842 13.602 46.7565C13.9631 47.2287 14.1437 47.8329 14.1437 48.5691C14.1437 49.1107 14.0395 49.5969 13.8311 50.0274C13.6367 50.4441 13.3242 50.7983 12.8936 51.09C12.4769 51.3678 11.9352 51.5692 11.2685 51.6942L13.7686 55.7777H15.352V57.1736H12.2061L9.16428 51.9233H7.87259V50.5066H9.62265C10.2199 50.5066 10.6852 50.4163 11.0185 50.2358C11.3519 50.0413 11.588 49.7983 11.7269 49.5066C11.8658 49.201 11.9352 48.8816 11.9352 48.5482C11.9352 48.2149 11.8588 47.9162 11.7061 47.6524C11.5533 47.3746 11.3241 47.1523 11.0185 46.9857C10.713 46.819 10.324 46.7356 9.85181 46.7356H7.12254V55.7985H8.62258V57.1736H3.41406Z"
                                    fill="white"
                                    />
                                </g>
                                <g clipPath="url(#clip1_180_2946)">
                                    <path
                                    d="M24.5767 60.5866V59.4867H25.7932V52.2371H24.5767V51.1372H33.0094V54.0704H31.7595V52.2371H27.5431V55.1536H30.0763V54.1037H30.9596V57.3368H30.0763V56.2535H27.5431V59.47H31.8429V57.5701H33.0761V60.5866H24.5767Z"
                                    fill="white"
                                    />
                                </g>
                                <g clipPath="url(#clip2_180_2946)">
                                    <path
                                    d="M41.8351 57.1736V55.7985H43.3143V46.7356H41.8351V45.3606H46.3352L49.8562 53.1109L53.2105 45.3606H57.6899V46.7356H56.2315V55.7985H57.6899V57.1736H52.7105V55.7985H54.1272V47.2357L50.0021 56.611H49.1896L45.0019 47.2357V55.7985H46.4186V57.1736H41.8351Z"
                                    fill="white"
                                    />
                                </g>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.2735 32C17.2735 31.1716 17.9451 30.5 18.7735 30.5H38.4002C39.1723 30.5 39.8082 31.0834 39.891 31.8334C40.2868 32.1035 40.5467 32.5581 40.5467 33.0734L40.5467 62.5C40.5467 63.3285 39.8751 64 39.0467 64C38.2182 64 37.5467 63.3285 37.5467 62.5L37.5467 33.5H21.3466L21.3466 62.5C21.3466 63.3285 20.675 64 19.8466 64C19.0182 64 18.3466 63.3285 18.3466 62.5L18.3466 33.4384C17.7261 33.2545 17.2735 32.6801 17.2735 32Z"
                                    fill="#95A7BF"
                                />
                                <defs>
                                    <clipPath id="clip0_180_2946">
                                    <rect
                                        x="3.41321"
                                        y="45.2268"
                                        width="11.9467"
                                        height="11.9467"
                                        rx="2"
                                        fill="white"
                                    />
                                    </clipPath>
                                    <clipPath id="clip1_180_2946">
                                    <rect
                                        x="24.32"
                                        y="50.7732"
                                        width="8.96"
                                        height="9.81333"
                                        rx="2"
                                        fill="white"
                                    />
                                    </clipPath>
                                    <clipPath id="clip2_180_2946">
                                    <rect
                                        x="41.8134"
                                        y="45.2268"
                                        width="16.2133"
                                        height="11.9467"
                                        rx="2"
                                        fill="white"
                                    />
                                    </clipPath>
                                </defs>
                                </svg>

                                <div class="text-center text-150">
                                    <h2 class="text-default-d3"><strong>AD BASHARU PROPERTIES</strong></h2>
                                </div>
                                <h2 class="text-default-d3">
                                    Receipt Due date: {showDate(unit.next_payment_date)}

                                    <small class="page-info">
                                        <i class="fa fa-angle-double-right text-80"></i>
                                    </small>
                                </h2>

                            </div>
                        </div>

                        <hr class="row brc-default-l1 mx-n1 mb-4" />

                        <div class="row">
                            <div class="col-sm-6">
                                <div>
                                    <span class="text-sm text-grey-m2 align-middle">To:</span>
                                    <span class="text-600 text-110 text-blue align-middle">{tenant?.name}</span>
                                </div>
                                <div class="text-grey-m2">
                                    <span class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">{tenant?.phone}</b></span>
                                </div>
                            </div>

                            <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                <hr class="d-sm-none" />
                                <div class="text-grey-m2">
                                    

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Rent Period: {rentPeriod}</span> </div>
                                    
                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Due date: {showDate(unit.next_payment_date)}</span> </div>

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date: {showDate(null)}</span></div>

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-success badge-pill px-25">INVOICE</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="row text-600 text-white bgc-default-tp1 py-25">
                                <div class="d-none d-sm-block col-1">#</div>
                                <div class="col-9 col-sm-5">Property</div>
                                <div class="d-none d-sm-block col-4 col-sm-2">Unit</div>
                                <div class="d-none d-sm-block col-sm-2">Unit Price</div>
                                <div class="col-2">Amount</div>
                            </div>


                            <div class="row border-b-2 brc-default-l2"></div>

                    <div class="table-responsive">
                        <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                            <thead class="bg-none bgc-default-tp1">
                                <tr class="text-white">
                                    <th class="opacity-2">#</th>
                                    <th>Property</th>
                                    <th>Unit</th>
                                    <th>Unit Price</th>
                                    <th width="140">Amount</th>
                                </tr>
                            </thead>

                            <tbody class="text-95 text-secondary-d3">
                                <tr></tr>
                                <tr>
                                    <td><strong>1</strong></td>
                                    <td><strong>{unit?.property?.name}</strong></td>
                                    <td><strong>{unit.name}</strong></td>
                                    <td class="text-95"><strong>{showFormatedMoney(amount)}</strong></td>
                                    <td class="text-secondary-d2"><strong>{showFormatedMoney(amount)}</strong></td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>

                            <div class="row mt-3">
                                <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                                    
                                </div>

                                <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last" >
                                    <div class="row my-2" style={{display:'flex', alignItems:'center'}}>
                                        <div class="col-7 ">
                                            <b>Account Name</b>: {account.account_name}
                                        </div>
                                        <div class="col-5">
                                            <span class="text-120 text-secondary-d1"></span>
                                        </div>
                                    </div>

                                    <div class="row my-2 align-items-center bgc-primary-l3 p-2" style={{display:'flex', alignItems:'center'}}>
                                        <div class="col-7 ">
                                            <b>Account Number</b>: {account.account_number}
                                        </div>
                                        {/* <div class="col-5">
                                            <span class="text-150 text-success-d3 opacity-2"></span>
                                        </div> */}
                                    </div>
                                    <div class="row my-2 align-items-center bgc-primary-l3 p-2" style={{display:'flex', alignItems:'center'}}>
                                        <div class="col-7 ">
                                            <b>Bank</b>: {account.bank}
                                        </div>
                                        {/* <div class="col-5">
                                            <span class="text-150 text-success-d3 opacity-2"></span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div>
                                <span class="text-secondary-d1 text-105">Thank you for your business</span>
                                <a href="#" class="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0" onClick={printReceipt}>Print</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {!rentPeriod && <Popup content={{rentPeriod:true}} setRentPeriod={setRentPeriod} />}
    </div>
  );
};

export default Invoice;
