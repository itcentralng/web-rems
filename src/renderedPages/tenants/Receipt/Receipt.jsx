import "./Receipt.css";
import RightNav from "../../../component/rightNav/RightNav";
import { useNavigate } from "react-router-dom";
import { useGetSingleTransactionQuery } from "../tenantApiSlice";


const Receipt = () => {
  const params = new URLSearchParams(window.location.search);
  const transactionId = params.get("id");
  const { data: transaction, isLoading: transactionLoading } = useGetSingleTransactionQuery(transactionId)
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
    transactionLoading ? <h1 className='title'>Loading transaction....</h1> :
    <div className="listing">
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
                    Receipt
                    <small class="page-info">
                        <i class="fa fa-angle-double-right text-80"></i>
                        ID: #{transaction?.id}
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
                            <div class="col-12">
                                <div class="text-center text-150">
                                    <i class="fa fa-book fa-2x text-success-m2 mr-1"></i>
                                    <span class="text-default-d3">AD BASHARU PROPERTIES</span>
                                </div>
                            </div>
                        </div>

                        <hr class="row brc-default-l1 mx-n1 mb-4" />

                        <div class="row">
                            <div class="col-sm-6">
                                <div>
                                    <span class="text-sm text-grey-m2 align-middle">To:</span>
                                    <span class="text-600 text-110 text-blue align-middle">{transaction?.tenant?.name}</span>
                                </div>
                                <div class="text-grey-m2">
                                    <div class="my-1">
                                    </div>
                                    <div class="my-1">
                                    </div>
                                    <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">{transaction?.tenant?.phone}</b></div>
                                </div>
                            </div>

                            <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                <hr class="d-sm-none" />
                                <div class="text-grey-m2">
                                    <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                        Invoice
                                    </div>

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> #{transaction?.id}</div>

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> {showDate(transaction?.created_at)}</div>

                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-success badge-pill px-25">Paid</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="row text-600 text-white bgc-default-tp1 py-25">
                                <div class="d-none d-sm-block col-1">#</div>
                                <div class="col-9 col-sm-5">Description</div>
                                <div class="d-none d-sm-block col-4 col-sm-2">Qty</div>
                                <div class="d-none d-sm-block col-sm-2">Unit Price</div>
                                <div class="col-2">Amount</div>
                            </div>


                            <div class="row border-b-2 brc-default-l2"></div>

                    <div class="table-responsive">
                        <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                            <thead class="bg-none bgc-default-tp1">
                                <tr class="text-white">
                                    <th class="opacity-2">#</th>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Unit Price</th>
                                    <th width="140">Amount</th>
                                </tr>
                            </thead>

                            <tbody class="text-95 text-secondary-d3">
                                <tr></tr>
                                <tr>
                                    <td>1</td>
                                    <td>{transaction?.unit.name}</td>
                                    <td>1</td>
                                    <td class="text-95">{showFormatedMoney(transaction?.amount)}</td>
                                    <td class="text-secondary-d2">{showFormatedMoney(transaction?.amount)}</td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>

                            <div class="row mt-3">
                                <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                                    
                                </div>

                                <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                                    <div class="row my-2">
                                        <div class="col-7 text-right">
                                            SubTotal
                                        </div>
                                        <div class="col-5">
                                            <span class="text-120 text-secondary-d1">{showFormatedMoney(transaction?.amount)}</span>
                                        </div>
                                    </div>

                                    {/* <div class="row my-2">
                                        <div class="col-7 text-right">
                                            Tax (10%)
                                        </div>
                                        <div class="col-5">
                                            <span class="text-110 text-secondary-d1">$225</span>
                                        </div>
                                    </div> */}

                                    <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                        <div class="col-7 text-right">
                                            Total Amount
                                        </div>
                                        <div class="col-5">
                                            <span class="text-150 text-success-d3 opacity-2">{showFormatedMoney(transaction?.amount)}</span>
                                        </div>
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
    </div>
  );
};

export default Receipt;
