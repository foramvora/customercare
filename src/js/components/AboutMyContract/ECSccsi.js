import React from 'react';
import { PARENTID } from '../../../index.js';
 
export default class ECSccsi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab : '',
    }

    this.displayEcsSi = this.displayEcsSi.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.renderBillDetail = this.renderBillDetail.bind(this);
  }

  handleTabClick(e){
    this.setState({activeTab : e.target.id});
  }

  componentWillMount() {
      if(this.props.ecsCcsi.ecs_si_mandate_details.ecs !== undefined && Object.keys(this.props.ecsCcsi.ecs_si_mandate_details.ecs).length > 0){
        this.setState({activeTab : 'ecsTab'})
      }else if(this.props.ecsCcsi.ecs_si_mandate_details.si !== undefined && Object.keys(this.props.ecsCcsi.ecs_si_mandate_details.si).length > 0){
        this.setState({activeTab : 'siTab'})
      }
  }
  displayEcsSi(ecs_info){
      if(ecs_info!==undefined){
        return Object.keys(ecs_info).map((value,key)=>{
            //if(ecs_info[value] !== null && ecs_info[value] !== ''){
                return (<tr key={key}>
                          <td width="40%" className="fst-td">{value}</td>
                          <td width="60%">{ecs_info[value]}</td>
                        </tr>)
            //}
        })
    }
  }

  renderBillDetail(list){
          if(list!==undefined){
            return Object.keys(list).map((value,key)=>{
                let data=list[value];
                return (<tr key={key}>
                    <td>{key+1}</td>
                    <td>{data[0]}</td>
                    <td>{data[1]}</td>
                    <td>{data[2]}</td>
                    <td>{data[6]}</td>
                    <td>{data[3]}</td>
                    <td>{data[4]}</td>
                    <td>{data[5]}</td>
                </tr>) 
            })
        }  
    }



  render() {
    let {ecs,si} = this.props.ecsCcsi.ecs_si_mandate_details;
    let ecs_billing = this.props.ecsCcsi.ecs_si_billing_report.ecs;
    let si_billing = this.props.ecsCcsi.ecs_si_billing_report.si;
    let ecs_active = ecs !== undefined && Object.keys(ecs).length > 0 ? true : false;
    let ecs_bill_active = ecs_billing !== null && Object.keys(ecs_billing).length > 0 ? true : false;
    let si_active = si !== undefined && Object.keys(si).length > 0 ? true : false;
    let si_bill_active = si_billing !== null && Object.keys(si_billing).length > 0 ? true : false;

    let ecs_info = ecs_active === true ? {'Bill Desk ID' : ecs.bdid, 'Mandate' : ecs.mt, 'Account Holders name' : ecs.acname, 'Account Number' : ecs.acno, 'Bank Name' : ecs.bkname, 'City' : ecs.ct, 'Branch' : ecs.branch, 'MICR Code Bank Participating' : ecs.micr, 'IFSC Code' : ecs.ifsc, 'Bank Account Type' : ecs.bat, 'Mode of Operation' : ecs.mode, 'Start Date' : ecs.stdt, 'Search Plus Campaign' : ecs.spls, 'Associated TIME' : ecs.tme, 'Associated ME' : ecs.me, 'Debit Frequency' : ecs.df, 'Debit Dates' : ecs.dd, 'Maximum Amount to be Debited per Transaction' : ecs.catamt}  : ''; 

    let si_info = si_active === true ? {'Bill Desk ID' : si.bdid, 'Account Holders name' : si.acname, 'Bank Name' : si.bkname, 'Start Date' : si.stdt, 'Expire On' : si.expdt, 'Debit Frequency' : si.df, 'Debit Dates' : si.dd, 'Maximum Amount to be Debited per Transaction' : si.capamt}  : '';

    return (
   <div className="mtabs-div rts ecstab">
                    <div className="bs-example bs-example-tabs fvnrcnorbx" data-example-id="togglable-tabs">
                      <ul id="myTabs" className={`nav nav-tabs fvnrcnorul ${this.state.activeTab === '' ? 'dn' : ''}`} role="tablist">
                        <li onClick={this.handleTabClick} role="presentation" id="ecsliTab" className={`activecol-sm-6 col-xs-6 leftab frtbhd favtbhd ${this.state.activeTab === 'ecsTab' ? 'active' : ''}`}>
                          <a id="ecsTab" role="tab" data-toggle="tab" aria-expanded="true" aria-controls="comment">ECS <span /></a>
                        </li>
                        <li onClick={this.handleTabClick} role="presentation" id="siliTab" className={`col-sm-6 col-xs-6 rgtab frtbhd rcnttbhd sec ${this.state.activeTab === 'siTab' ? 'active' : ''}`}>
                          <a  role="tab" id="siTab" className="disable-cls" aria-controls="rate-review">CCSI</a>
                        </li>
                      </ul>
                      <div id="myTabContent" className="tab-content">
                        <div role="tabpanel" className={`tab-pane fade ${ecs_active === true && this.state.activeTab === 'ecsTab' ? 'active in' : ''}`} id="comment" aria-labelledby="comment-tab">
                          <section className="paydtls ">
                            <div className="ttles">Mandate Form: {this.props.cn} [{PARENTID}]</div>
                            <div className="table-responsive">
                              <table className="table tbl">
                                <tbody>
                                  {this.displayEcsSi(ecs_info)}
                                </tbody>
                              </table>
                            </div>
                            {ecs_bill_active === true ? 
                            <div>
                              <div className="ttles">Billing Report</div>
                              <div className="com-info-tbl">
                                <div className="table-responsive">
                                  <table className="table table-bordered table-striped">
                                    <thead>
                                      <tr>
                                        <th scope="row">SR no.</th>
                                        <th>Bill Date</th>
                                        <th>Due Date</th>
                                        <th>Bill Amount</th>
                                        <th>TDS Amount</th>
                                        <th>Bill Response Date</th>
                                        <th>Bill Response Status</th>
                                        <th>Bill Response Remarks</th>
                                      </tr>
                                    </thead>
                                    {ecs_bill_active === true ? 
                                    <tbody>
                                      {this.renderBillDetail(ecs_billing.ecs_trac_report.data)}
                                    </tbody> : ''
                                  }
                                  </table>
                                </div>
                              </div>
                            </div> : '' }
                           
                          </section>{/*end of paydtls*/}
                        </div>
                        <div role="tabpanel" className={`tab-pane fade ${si_active === true && this.state.activeTab === 'siTab' ? 'active in' : ''}`} id="rate-review" aria-labelledby="rate-review-tab">
                          <section className="paydtls ">
                            <div className="table-responsive">
                              <table className="table tbl">
                                <tbody>
                                  {this.displayEcsSi(si_info)}
                                </tbody>
                              </table>
                            </div>
                            {si_bill_active === true ? 
                            <div>
                              <div className="ttles">Billing Report</div>
                              <div className="com-info-tbl">
                                <div className="table-responsive">
                                  <table className="table table-bordered table-striped">
                                    <thead>
                                      <tr>
                                        <th scope="row">SR no.</th>
                                        <th>Bill Date</th>
                                        <th>Due Date</th>
                                        <th>Bill Amount</th>
                                        <th>TDS Amount</th>
                                        <th>Bill Response Date</th>
                                        <th>Bill Response Status</th>
                                        <th>Bill Response Remarks</th>
                                      </tr>
                                    </thead>
                                    {si_bill_active === true ? 
                                    <tbody>
                                      {this.renderBillDetail(si_billing.si_trac_report.data)}
                                    </tbody> : <tbody></tbody>
                                  }
                                  </table>
                                </div>
                              </div>
                            </div> : '' }
                          </section>{/*end of paydtls*/}
                        </div>
                        <div role="tabpanel" className={`tab-pane fade ${(si_active === false && this.state.activeTab === 'siTab') || (ecs_active === false && this.state.activeTab === 'ecsTab') || this.state.activeTab === '' ? 'active in' : ''} feedback-table`} id="rate-review" aria-labelledby="rate-review-tab">
                            <div className="compay-name">
                              Sorry! No data Available
                            </div>
                        </div>
                      </div>
                    </div>
                    {/*End tabs*/}
                  </div> 	
    )
  }
}
