import React from 'react';
 
export default class FormsnDocuments extends React.Component {
  render() {
    return (
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
                    Please <a className >'Click Here'</a> to visit ‘Document Upload’ page &amp; upload the following types of documents:
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
    	)
	}
}