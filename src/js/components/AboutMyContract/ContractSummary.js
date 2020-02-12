import React from 'react';
import PaymentSummary from './PaymentSummary';
import InvoiceInfo from './InvoiceInfo';
 
export default class ContractSummary extends React.Component {

  render() {
    const {company_details, main_bus_cats, bid_cats, payment_details } = this.props;
    let wts = company_details.wts.split(',');
    let wte = company_details.wte.split(',');

    return (
              <div className="panel-body-wrap">
                {Object.keys(company_details).length > 0 &&
                  <div>
                    <div className="panel-content-title">Summary details for company: <b>{company_details.cn}</b></div>
                    <div className="table-responsive">
                      <table className="table panel-table">
                        <tbody>
                          <tr>
                            <td width="40%" className="fst-td">Contract Person(s)</td>
                            <td width="60%">{company_details.cp}</td>
                          </tr>
                          <tr>
                            <td width="40%" className="fst-td">Company Name</td>
                            <td width="60%">{company_details.cn}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Contract Type</td>
                            <td />
                          </tr>
                          <tr>
                            <td className="fst-td">Bldg/Indl Estate/Complex Name</td>
                            <td>{company_details.bd}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Street</td>
                            <td>{company_details.str}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Area</td>
                            <td>{company_details.ar}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Location/Landmark</td>
                            <td>{company_details.lk}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">State</td>
                            <td>{company_details.st}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">City</td>
                            <td>{company_details.ct}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Pincode</td>
                            <td>{company_details.pc}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Latitude</td>
                            <td>{company_details.lt}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Longitude</td>
                            <td>{company_details.lo}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Mobile</td>
                            <td>{company_details.mb}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Email Id</td>
                            <td>{company_details.em}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Feedback Email ID</td>
                            <td>{company_details.fem}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Website</td>
                            <td>{company_details.web}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Tel No</td>
                            <td> {company_details.tel}</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Tollfree No</td>
                            <td>{company_details.tol}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="panel-data-wrap">
                      <div className="data-category" id="mainBussCategory">Main Business Category</div>
                      <a  className="data-package" data-toggle="modal" id="pack-or-platinumid" data-target="#view-plus-platinum">
                        <i className="cms-sprite file-icon" /> 
                      </a>
                    </div>
                    <div className="clearfix" />
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">Gs Od Ol</td>       
                          </tr>
                          <tr />
                          <tr>
                            <td>
                              <p>Year of establishment: {company_details.yoe}</p>
                              <p>No. of Employees: {company_details.noe}</p>
                              { 
                              wts && <span>
                              <p>Work Timings: </p>
                              <table><tbody>
                                <tr><td>Monday:</td><td>{wts[0]} - {wte[0]}</td></tr>
                                <tr><td>Tuesday:</td><td>{wts[1]} - {wte[1]}</td></tr>
                                <tr><td>Wednesday:</td><td>{wts[2]} - {wte[2]}</td></tr>
                                <tr><td>Thursday:</td><td>{wts[3]} - {wte[3]}</td></tr>
                                <tr><td>Friday:</td><td>{wts[4]} - {wte[4]}</td></tr>
                                <tr><td>Saturday:</td><td>{wts[5]} - {wte[5]}</td></tr>
                                <tr><td>Sunday:</td><td>{wts[6]} - {wte[6]}</td></tr>
                              </tbody></table>
                              </span>  
                             }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of restau-tbl*/}
                  </div> }
                    <div className="clearfix" />
                    {Object.keys(payment_details).length > 0 &&false&&
                      <div>
                        <div className="panel-secondary-title">Payment Summary</div>
                        <PaymentSummary paymentDet={payment_details} />
                      </div>
                    }
                    {/* invoiceInfo.errorCode !==1 && (invoiceInfo.data.invoiceAnnexure && <InvoiceInfo invoiceInfo={invoiceInfo.data.invoiceAnnexure} />) */}
                    
                  </div>
    )
}
}