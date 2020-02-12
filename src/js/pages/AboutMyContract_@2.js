import React, { Component } from 'react';
import { Accordion,Panel } from 'react-bootstrap';
 
class AboutMyContract extends Component {

  constructor(props) {
        super(props);
        this.state = {
          activeKey : null,
        }
  }      

  handleSelect(activeKey){ 
    this.setState({activeKey : activeKey});
  } 

  render() {
    const activeKey = this.state.activeKey;
    
    return (
      <div>
        <div className="content-title">All About My Contract
          <a href="javascript:void(0)" className="backLink visible-xs-inline-block">&lt; Back</a>
        </div>

        <div>
              <Accordion onSelect={this.handleSelect.bind(this)} >
                <Panel className={(activeKey == 1) ? "panel-active" : ""} header={<span>Help me change my contract details <i className="cms-sprite down-icn" /></span>} eventKey="1" >
                  Click <a>here</a> to visit Edit Listing page of Contract
                </Panel>

                <Panel className={(activeKey == 2) ? "panel-active" : ""} header={<span>My contract Summary - All about my contract <i className="cms-sprite down-icn" /></span>} eventKey="2" >
                  Click <a>here</a> to visit Edit Listing page of Contract
                </Panel>

              </Accordion>
        </div>

        <div className="options-accordion">
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">



            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="heading1">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" aria-controls="collapse1">
                    Help me change my contract details
                    <i className="cms-sprite down-icn" />
                  </a>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1" aria-expanded="false">
                <div className="panel-body">
                  Click <a className href="javascript:void(0);">here</a> to visit Edit Listing page of Contract
                </div>
              </div>
            </div>




            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="heading2">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" id="all-contract-summary" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    My contract Summary - All about my contract
                    <i className="cms-sprite down-icn" />
                  </a>
                </h4>
              </div>
              <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2" aria-expanded="false">
                <div className="panel-body">
                  <div className="panel-body-wrap">
                    <div className="panel-content-title">Summary details for company: <b>Malti Enterprise</b></div>
                    <div className="table-responsive">
                      <table className="table panel-table">
                        <tbody>
                          <tr>
                            <td width="40%" className="fst-td">Contract Person(s)</td>
                            <td width="60%">Ms Malti Negi(Partner),Mr Shital Patil</td>
                          </tr>
                          <tr>
                            <td width="40%" className="fst-td">Company Name</td>
                            <td width="60%">Malti Enterprise</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Contract Type</td>
                            <td />
                          </tr>
                          <tr>
                            <td className="fst-td">Bldg/Indl Estate/Complex Name</td>
                            <td>303 / Phase -1, Sea Breeze Apts</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Street</td>
                            <td>link rd</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Area</td>
                            <td>Kandivali East</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Location/Landmark</td>
                            <td>near dominoz movie time</td>
                          </tr>
                          <tr>
                            <td className="fst-td">State</td>
                            <td>Maharashtra</td>
                          </tr>
                          <tr>
                            <td className="fst-td">City</td>
                            <td>Mumbai</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Pincode</td>
                            <td>400101</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Latitude</td>
                            <td>19.202280000000</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Longitude</td>
                            <td>72.875041000000</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Mobile</td>
                            <td>7666999945, 9869794025, 9920026095</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Email Id</td>
                            <td>testing.testjd@gmail.com, 2testjd@gmail.com</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Feedback Email ID</td>
                            <td>testing.testjd@gmail.com, 2testjd@gmail.com</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Website</td>
                            <td>www.maltienterprise.com</td>
                          </tr>
                          <tr>
                            <td className="fst-td">Tel No</td>
                            <td />
                          </tr>
                          <tr>
                            <td className="fst-td">Tollfree No</td>
                            <td>18002014451, 18002014456</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="panel-data-wrap">
                      <div className="data-category" id="mainBussCategory">Main Business Category</div>
                      <a href="javascript:void(0);" className="data-package" data-toggle="modal" id="pack-or-platinumid" data-target="#view-plus-platinum">
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
                              <p>Year of establishment: 2012</p>
                              <p>No. of Employment: Less than 10</p>
                              <p>Work Timings: 01:30 to 20:30</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of restau-tbl*/}
                    <div className="clearfix" />
                    <div className="panel-secondary-title">Payment Summary</div>
                    <div className="panel-secondary-header">Phone Search - Package</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2016-08-01 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" />2017-06-01 00:00:00</span>
                            </td>
                          </tr>
                          <tr>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>
                              <p><label>Total Amount</label>78360.1500</p>
                              <p><label>Used Amount</label>78360.1500</p>
                              <p><label>Balance Amount</label>0.0000</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-header">SMS Leads</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2016-08-01 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" /></span>
                            </td>
                          </tr>
                          <tr>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>
                              <p><label>Total Amount</label> 681.5600</p>
                              <p><label>Used Amount</label> 201.0000</p>
                              <p><label>Balance Amount</label>480.5600</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-header">Competitors Banner</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2014-11-05 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" />2017-06-01 00:00:00</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-header">Registration Fee</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2016-01-14 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" />2017-06-01 00:00:00</span>
                            </td>
                          </tr>
                          <tr>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>
                              <p><label>Total Amount</label> 10166.9300</p>
                              <p><label>Used Amount</label> 10166.9300</p>
                              <p><label>Balance Amount</label>0.0000</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-header">Category Banner</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2014-11-05 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" />2017-06-01 00:00:00</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-title">Summary of Invoices</div>
                    <div className="panel-secondary-header">Summary of Invoices</div>
                    <div className="table-responsive panel-table-wrap invoice-table">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <span className="pull-left"><i>Invoice No. 1</i></span>
                              <span className="pull-right">
                                <a className="btn btn-default blue-btn" href="javascript:void(0)" role="button"> Download</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="pull-left"><i>Invoice No. 2</i></span>
                              <span className="pull-right">
                                <a className="btn btn-default blue-btn" href="javascript:void(0)" role="button"> Download</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="pull-left"><i>Invoice No. 3</i></span>
                              <span className="pull-right">
                                <a className="btn btn-default blue-btn" href="javascript:void(0)" role="button"> Download</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="pull-left"><i>Invoice No. 4</i></span>
                              <span className="pull-right">
                                <a className="btn btn-default blue-btn" href="javascript:void(0)" role="button"> Download</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="pull-left"><i>Invoice No. 5</i></span>
                              <span className="pull-right">
                                <a className="btn btn-default blue-btn" href="javascript:void(0)" role="button"> Download</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="pull-left"><i>Invoice No. 6</i></span>
                              <span className="pull-right">
                                <a className="btn btn-default blue-btn" href="javascript:void(0)" role="button"> Download</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="pull-left"><i>Invoice No. 7</i></span>
                              <span className="pull-right">
                                <a className="btn btn-default blue-btn" href="javascript:void(0)" role="button"> Download</a>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of*/}
                  </div>{/*end of panel-body-wrap*/}
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="heading3">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" id="lead-report-company" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    Help me generate Leads Report For My Company
                    <i className="cms-sprite down-icn" />
                  </a>
                </h4>
              </div>
              <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3" aria-expanded="false">
                <div className="panel-body">
                  <section className="panel-section">
                    <div className="panel-section-title">Search for Company Feedback Report</div>
                    <div className="panel-form">
                      {/*<form>*/}
                      <div className="form-group">
                        <label htmlFor>Date Range:</label>
                        <div className="calender-input">
                          <input type="text" className="form-control datepicker" id="startDatepicker" defaultValue />
                          <i className="cms-sprite calender-icn" />
                          <span id="startDateBox" />
                        </div>
                        <span className="divide-to">To</span>
                        <div className="calender-input">
                          <input type="text" className="form-control datepicker" id="endDatepicker" defaultValue />
                          <i className="cms-sprite calender-icn" />
                          <span id="endDateBox" />
                        </div>
                      </div>
                      <div className="clearfix" />
                      <br />
                      <button type="submit" className="btn btn-primary">View Report</button>
                      {/*</form>*/}
                    </div>
                    <div className="feedback-table">
                      <div className="panel-section-title">Company Feedback Report</div>
                      <div className="compay-name">Malti Enterprise</div>
                      <div className="company-info-table">
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped" id="tablefeedbackReport">
                            <thead>
                              <tr>
                                <th scope="row">SR no.</th>
                                <th>Date</th>
                                <th>Caller</th>
                                <th>Area</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td scope="row">1</td>
                                <td>2017-05-03</td>
                                <td>Mr Amit</td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td>2017-05-03</td>
                                <td> </td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td>2017-05-03</td>
                                <td> Bhumika Desai</td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td>2017-05-03</td>
                                <td> </td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td>2017-05-05</td>
                                <td>Ms Bhumika</td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td>2017-05-05</td>
                                <td>Ms HARSHITA</td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td>2017-05-05</td>
                                <td> </td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td>2017-05-05</td>
                                <td>Ms BHUMIKA</td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td>2017-05-08</td>
                                <td>Mr NIRMAL</td>
                                <td />
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td>2017-05-10</td>
                                <td> Jigi</td>
                                <td />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>{/*end of feedb-tbl*/}
                      <div id="feedbackreporterror" className="compay-name">
                        There is no Company Feedback Report for this Date
                      </div>
                    </div>
                    {/* <div id="paginationfeebkreportdiv">
							<nav class="feedback-pagination hidden-xs">
								<ul class="pagination" id="ulpaginationreport">
									<li>
										<a href="javascript:void(0)" aria-label="Previous">
											<span class="cms-sprite pagi-lft" aria-hidden="true"></span>
										</a>
									</li>
									<li class="fbreportpaginationclass active" id="feedbackreportpaginationid1">
										<a href="javascript:void(0)" id="custpagination1">1</a>
									</li>
									<li class="fbreportpaginationclass" id="feedbackreportpaginationid2">
										<a href="javascript:void(0)" id="custpagination2">2</a>
									</li>
									<li class="fbreportpaginationclass" id="feedbackreportpaginationid3">
										<a href="javascript:void(0)" id="custpagination3">3</a>
									</li>
									<li class="fbreportpaginationclass" id="feedbackreportpaginationid4">
										<a href="javascript:void(0)" id="custpagination4">4</a>
									</li>
									<li>
										<a aria-label="Next" href="javascript:void(0)">
											<span aria-hidden="true" class="cms-sprite pagi-rgt"></span>
										</a>
									</li>
								</ul>
							</nav>
						</div> */}
                    <div>
                      <div className="panel-section-title">Summary</div>
                      <ul className="info-summary">
                        <li id="maskedFeedback"><label>Total Masked Feedback:</label>0</li>
                        <li id="nonmaskedFeedback"><label>Total Non-masked Feedback:</label>35</li>
                        <li id="totnonunqcnt"><label>Total (Unique/Non Unique Count):</label>35</li>
                        <li id="totunqcnt"><label>Total Unique Count:</label>24 (68.57%)</li>
                        <li id="totdupcnt"><label>Total Duplicate Count:</label>11 (31.43%)</li>
                      </ul>
                      <button className="btn btn-primary send-report-btn" id="sendMailBtn" type="submit">Send Email</button>
                    </div>				
                  </section>{/*end of comleads*/}
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="heading4">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" id="ECS-CCSI-PaymentDetails" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    Show me my ECS/CCSI/Payment details
                    <i className="cms-sprite down-icn" />
                  </a>
                </h4>
              </div>
              <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4" aria-expanded="false">
                <div className="panel-body">
                  <div className="mtabs-div rts ecstab">
                    <div className="bs-example bs-example-tabs fvnrcnorbx" data-example-id="togglable-tabs">
                      <ul id="myTabs" className="nav nav-tabs fvnrcnorul" role="tablist">
                        <li role="presentation" id="ecsliTab" className="activecol-sm-6 col-xs-6 leftab frtbhd favtbhd">
                          <a href="javascript:void(0)" id="comment-tab" role="tab" data-toggle="tab" aria-expanded="true" aria-controls="comment">ECS <span /></a>
                        </li>
                        <li role="presentation" id="siliTab" className=" col-sm-6 col-xs-6 rgtab frtbhd rcnttbhd sec">
                          <a href="javascript:void(0)" role="tab" id="rate-review-tab" className="disable-cls" aria-controls="rate-review">CCSI</a>
                        </li>
                      </ul>
                      <div id="myTabContent" className="tab-content">
                        <div role="tabpanel" className="tab-pane fade active in" id="comment" aria-labelledby="comment-tab">
                          <section className="paydtls ">
                            <div className="ttles">Mandate Form: Raise India [PXX22.XX22.110906165241.S2Y2]</div>
                            <div className="table-responsive">
                              <table className="table tbl">
                                <tbody>
                                  <tr>
                                    <td width="40%" className="fst-td">Bill Desk ID</td>
                                    <td width="60%">PXX22.XX22.110906165241.S2Y2.0</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Mandate</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Account Holders name</td>
                                    <td>Test Malti</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Account Number</td>
                                    <td>6563313133464646</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Bank Name</td>
                                    <td>AXIS BANK LTD</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">City</td>
                                    <td>MUMBAI</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Branch</td>
                                    <td>MALAD(W)</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">MICR Code <span className="greentx">Bank Participating</span></td>
                                    <td>400211011</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">IFSC Code</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Utility Code</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Bank Account Type</td>
                                    <td>Savings</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Mode of Operation</td>
                                    <td>Single</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Start Date</td>
                                    <td>2013-03-05 00:00:00</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Search Plus Campaign</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Associated TIME</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Associated ME</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td width="40%" className="fst-td">Debit Frequency</td>
                                    <td width="60%">Monthly</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Debit Dates</td>
                                    <td>5</td>
                                  </tr>
                                  <tr>
                                    <td className="fst-td">Maximum Amount to be Debited per Transaction</td>
                                    <td>205</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="ttles">Billing Report</div>
                            <div className="com-info-tbl">
                              <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="row">SR no.</th>
                                      <th>Due Date</th>
                                      <th>Bill Amount</th>
                                      <th>TDS Amount</th>
                                      <th>Bill Response Status</th>
                                    </tr>
                                  </thead>
                                  <tbody id="ecspaginationtbody">
                                    <tr>
                                      <td scope="row">1</td>
                                      <td>05-05-2017</td>
                                      <td>205</td>
                                      <td>0.00</td>
                                      <td>Rejected</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                           
                          </section>{/*end of paydtls*/}
                        </div>
                        <div role="tabpanel" className="tab-pane fade " id="rate-review" aria-labelledby="rate-review-tab">
                          <section className="paydtls ">
                          </section>{/*end of paydtls*/}
                        </div>
                      </div>
                    </div>
                    {/*End tabs*/}
                  </div>
                  {/*End col-sm*/}
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading " role="tab" id="heading5">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    Stop My Contract
                    <i className="cms-sprite down-icn" />
                  </a>
                </h4>
              </div>
              <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5" aria-expanded="false">
                <div className="panel-body">
                  Click <a href="javascript:void(0);">here</a> to Stop My ECS
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading " role="tab" id="heading6">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                    Reactivate My Contract
                    <i className="cms-sprite down-icn" />
                  </a>
                </h4>
              </div>
              <div id="collapse6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6" aria-expanded="false">
                <div className="panel-body">
                  Click <a href="javascript:void(0);">here</a> to Reactivate My ECS
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading " role="tab" id="heading7">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse7" id="contract-balanceid" aria-expanded="false" aria-controls="collapse7">
                    Let me know my Contract Balance/Expiry Date
                    <i className="cms-sprite down-icn" />
                  </a>
                </h4>
              </div>
              <div id="collapse7" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7" aria-expanded="false">
                <div className="panel-body">
                  <section className="panel-section panel-body-wrap">
                    <div className="panel-section-title">Platinum Contract / Package Details / Lead (C2C/Hidden) Details:</div>
                    <div className="panel-secondary-header">Phone Search - Package</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2016-08-01 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" />2017-06-01 00:00:00</span>
                            </td>
                          </tr>
                          <tr>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>
                              <p><label>Total Amount</label> 78360.1500</p>
                              <p><label>Used Amount</label> 78360.1500</p>
                              <p><label>Balance Amount</label>0.0000</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-header">SMS Leads</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2016-08-01 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" /></span>
                            </td>
                          </tr>
                          <tr>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>
                              <p><label>Total Amount</label> 681.5600</p>
                              <p><label>Used Amount</label> 201.0000</p>
                              <p><label>Balance Amount</label>480.5600</p>
                              {/* <p><label>Day Threshold</label>50</p>
                                            <p><label>Bid Per day</label>0.0000</p> */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-header">Competitors Banner</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2014-11-05 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" />2017-06-01 00:00:00</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-header">Registration Fee</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2016-01-14 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" />2017-06-01 00:00:00</span>
                            </td>
                          </tr>
                          <tr>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>
                              <p><label>Total Amount</label> 10166.9300</p>
                              <p><label>Used Amount</label> 10166.9300</p>
                              <p><label>Balance Amount</label>0.0000</p>
                              {/* <p><label>Day Threshold</label>84</p>
                                            <p><label>Bid Per day</label>84.9233</p> */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                    <div className="panel-secondary-header">Category Banner</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-blue">
                              <span className="pull-left">Start Date:<br className="visible-xs-block" />2014-11-05 00:00:00</span>
                              <span className="pull-right">End Date:<br className="visible-xs-block" />2017-06-01 00:00:00</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*end of */}
                  </section>{/*end of */}
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading " role="tab" id="heading8">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse8" id="contract-balanceid" aria-expanded="false" aria-controls="collapse7">
                    My Contract Form &amp; Other Documents
                    <i className="cms-sprite down-icn" />
                  </a>
                </h4>
              </div>
              <div id="collapse8" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8" aria-expanded="false">
                <div className="panel-body">
                  <section className="panel-section panel-body-wrap">
                    <div className="panel-secondary-header">Dematerialised Documents (T=2)</div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table contract-table">
                        <tbody>
                          <tr>
                            <th>Contract Documents (T=2)</th>
                          </tr>
                          <tr>
                            <td>
                              <div className="contract-item">
                                <span className="item-number">1.</span><span className="item-name">PXX33.XX33.090923191178.V5R1_33cd_1.pdf</span>
                                <span className="item-details">Uploaded on <span className="blue-text">2017-01-24 11:34:12</span> by <span className="blue-text">Prosanta Majumda</span></span>
                              </div>
                              <div className="contract-item">
                                <span className="item-number">1.</span><span className="item-name">PXX33.XX33.090923191148.V5R1_12_cd_1.pdf</span>
                                <span className="item-details">Uploaded on <span className="blue-text">2016-08-05 11:19:03</span> by <span className="blue-text">Prosanta Majumda</span></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table contract-table">
                        <tbody>
                          <tr>
                            <th>ECS Documents (T=1)</th>
                          </tr>
                          <tr>
                            <td>
                              <div className="contract-item">
                                <span className="item-number">1.</span><span className="item-name">PXX33.XX33.090923191178.ECS1_99cd_1.pd</span>
                                <span className="item-details">Uploaded on <span className="blue-text">2016-07-24 11:34:12</span> by <span className="blue-text">Prosanta Majumda</span></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive panel-table-wrap">
                      <table className="table contract-table">
                        <tbody>
                          <tr>
                            <th>Other Documents (T=1)</th>
                          </tr>
                          <tr>
                            <td>
                              <div className="contract-item">
                                <span className="item-number">1.</span><span className="item-name">PXX33.XX33.090923191178.ECS1_99cd_1.pd</span>
                                <span className="item-details">Uploaded on <span className="blue-text">2016-07-24 11:34:12</span> by <span className="blue-text">Prosanta Majumda</span></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    Please <a className href="javascript:void(0);">'Click Here'</a> to visit ‘Document Upload’ page &amp; upload the following types of documents:
                    <ul className="panel-list">
                      <li><span className="list-text">Photo ID Proof</span></li>
                      <li><span className="list-text">Address Proof</span></li>
                      <li><span className="list-text">Company Registration Certificate / Trade License</span></li>
                      <li><span className="list-text">Other Documents like Brand Name Authorisation Certificate etc.</span></li>
                    </ul>
                    <div className="panel-section-title">Documents FAQ</div>
                    <section className="question-answer-section">
                      <div className="question">
                        <span className="question-number">Q1.</span> <span className="question-text">What are the Documents types &amp; dimensions supported by Justdial?</span>
                      </div>
                      <ul className="answer">
                        <li>
                          <span className="list-text">
                            <span className="bold-text">Dimension :</span> Min. 400 pix &amp; Max. 750 Pix (either height or width
                          </span>
                        </li>
                        <li>
                          <span className="list-text">
                            <span className="bold-text">Format :</span> JPG &amp; GIF
                          </span>
                        </li>
                        <li>
                          <span className="list-text">
                            <span className="bold-text">File Size :</span> 5 MB (Max
                          </span>
                        </li>
                        <li>
                          <span className="list-text">
                            <span className="bold-text">Type :</span> Documents should be related to the business or establishment and should be clearly readable.
                          </span>
                        </li> 
                      </ul>
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default AboutMyContract;