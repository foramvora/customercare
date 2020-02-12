import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {Modal , Button} from 'react-bootstrap'
import { Link } from "react-router"

import CustomAccordion from "../layout/CustomAccordion"
import FeedbackForm from "../FeedbackForm"

import { saveComplaint , closeModal} from '../../actions/submitActions'
import { PARENTID,DTCITY } from '../../../index.js'
 
class ProductIssue extends Component {
  constructor(props)
  {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.close = this.close.bind(this);
  }

  handleSubmit(name,type,complaint)
  {
      let params = {parentid : PARENTID, city : DTCITY , complaint : complaint , complaintType : type};
      this.props.saveComplaint(params);
  }

  close() {
    this.props.closeModal();
  }

  render() {
    let {loading} = this.props
    let { errormsg } = this.props.omniDetails.complaintStatus;
    let { error } = this.props.omniDetails;
    let showModal = (this.props.complaint_no) ? true : false;
    let errorModal = (error || errormsg) ? true : false;

    let domainQryContent = <div className="panel-primary">
                              <ul className="panel-list">
                                  <li><span><a href="http://manual.jdomni.com/domain-name-registration/#2" target="_blank">I have an existing domain and want to configure it.</a></span></li>
                                  <li><span><a href="http://manual.jdomni.com/domain-name-registration/#3" target="_blank">I want to buy a new domain.</a></span></li>
                              </ul>
                                                             
                              <FeedbackForm {...this.state} loading={loading} name="domainQry" type="117||JD Omni - Domain name Related" handleSubmit={this.handleSubmit} />
                          </div>;
      
    let bizEmailsQryContent =  <div className="panel-primary">
                                 <ul className="panel-list">
                                    <li><span><a href="http://manual.jdomni.com/email/#1" target="_blank">I want to purchase new business emails.</a></span></li>
                                    <li><span><a href="http://manual.jdomni.com/email/#FB" target="_blank">I want to configure the business emails that I have purchased.</a></span></li>
                                    <li><span><a href="http://manual.jdomni.com/email/#4" target="_blank">I want to configure the business emails that I have purchased from Go Daddy.</a></span></li>
                                    <li><span><a href="http://manual.jdomni.com/email/#5" target="_blank">I want to configure the business emails that I have purchased from Bid Rock.</a></span></li>
                                 </ul>
                                 
                                 <FeedbackForm {...this.state} loading={loading} name="bizEmailQry" type="117" handleSubmit={this.handleSubmit} />
                               </div>;     

    let appCustomContent =  <div className="panel-primary">
                                 <ul className="panel-list">
                                  <li><span><a href="http://manual.jdomni.com/customize-app/#1" target="_blank">I want to customize my Splash Screen and Icon.</a></span></li>
                                  <li><span><a href="http://manual.jdomni.com/customize-app/#3" target="_blank">I want to customize my App on Google Play Store.</a></span></li>
                                </ul>

                                <FeedbackForm {...this.state} loading={loading} name="customAppQry" type="144||JD OMNI - Mobile App Changes related" handleSubmit={this.handleSubmit} />
                            </div>;                    

    let hardwareQryContent =  <div className="panel-primary">
                                <div className="sub-panel-secondary-header">Recommended System Requirements Supported Hardware</div>
                                <ul className="panel-list">
                                  <li><span><a href="http://manual.jdomni.com/hardware-supported/#2" target="_blank">What is the system requirement for JD Omni.</a></span></li>
                                  <li>
                                    <span className='plain-text'>Supported Hardware.</span>
                                    <ul className="panel-list">
                                      <li><span><a href="http://manual.jdomni.com/hardware-supported/#4" target="_blank">Which brand/model of Reciept Printers are supported.</a></span></li>
                                      <li><span><a href="http://manual.jdomni.com/hardware-supported/#5" target="_blank">Which brand/model of Barcode Printers are supported.</a></span></li>
                                      <li><span><a href="http://manual.jdomni.com/hardware-supported/#6" target="_blank">Which brand/model of Weighing Scales are supported.</a></span></li>
                                    </ul>
                                  </li>
                                </ul>
                                
                                <FeedbackForm {...this.state} loading={loading} name="hardwareQry" type="131||JD Omni - Hardware Related Issue" handleSubmit={this.handleSubmit} />
                            </div>;                                                         

    let panel = [{id : '2.1.1' , header : 'I have a query related to Domain' ,content : domainQryContent},
                {id : '2.1.2' , header : 'I have a query related to business emails' , content : bizEmailsQryContent},
                {id : '2.1.3' , header : 'I want to customize my Android application' , content : appCustomContent},
                {id : '2.1.4' , header : 'I have a hardware issue' , content : hardwareQryContent}]
    return (
      <div>
        <CustomAccordion panels={panel} customClass={'panel-primary'}/>

        <Modal show={showModal} onHide={this.close}>
          <Modal.Body>
              <div className="hdr-tx">
                <button type="button" onClick={this.close} className="close1 clsbtn no-border" aria-label="Close"></button>
              </div>
              <section className="tab-flw tnks-visit">
                <div className="tx2 ">Thank you for your inputs.</div>
                <div className="tx2 ">Your complaint is registered with Ticket id {this.props.complaint_no}.</div>
                <div className="tx2 margin-adjust">Our team shall revert to you shortly</div>
                <br/>
                <div className="text-center">
                  <button className="btn btn-primary btn-black" onClick={this.close}><Link to="/">No, thanks</Link></button>
                  <button className="btn btn-primary" aria-label="Close" onClick={this.close}>Yes</button>
                </div>
              </section>
         </Modal.Body>
        </Modal>  

        <Modal show={errorModal} onHide={this.close}>
          <Modal.Body>
              <div className="hdr-tx">
                <button type="button" onClick={this.close} className="close1 clsbtn no-border" aria-label="Close"></button>
              </div>
              <section className="tab-flw tnks-visit">
                <div className="tx2 ">Oops,there seems to be an issue submitting your request.. </div>
                <div className="tx2 margin-adjust">Please come back in sometime.</div>
                <br/>
                <div className="text-center">
                  <button className="btn btn-primary" aria-label="Close" onClick={this.close}>OK</button>
                </div>
              </section>
         </Modal.Body>
        </Modal>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { 
        omniDetails : state.submitDetails,
        complaint_no :  state.submitDetails.complaintStatus.complaint_no,
        loading : state.submitDetails.complaintStatus.loading
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveComplaint , closeModal},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductIssue);