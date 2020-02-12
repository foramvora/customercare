import React, { Component } from 'react';
import CustomAccordion from "../layout/CustomAccordion";
import FeedbackForm from "../FeedbackForm"
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {Modal , Button} from 'react-bootstrap'
import { Link } from "react-router"

import { saveComplaint , closeModal} from '../../actions/submitActions'
import { PARENTID,DTCITY } from '../../../index.js'
 
class ServiceIssue extends Component {
  constructor(props)
  {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.close = this.close.bind(this);
  }

  handleSubmit(name,type,complaint)
  {
      let params = {parentid : PARENTID, city : DTCITY , complaint : complaint , complaintType : type};
      this.props.saveComplaint(params);
  }

  /*close() {
    this.props.closeModal();
  }*/

  render() {
    let {loading} = this.props
    //product issue close shall be invoked
    /*let errormsg = this.props.omniDetails.complaintStatus.errormsg;
    let error = this.props.omniDetails.error;
    let showModal = (this.props.complaint_no) ? true : false;
    let errorModal = (error || errormsg) ? true : false;*/

    let callcenterIssueContent = <div className="panel-primary">
                                    <FeedbackForm {...this.state} loading={loading} name="callIssue" type="428||JD omni service issues" handleSubmit={this.handleSubmit} />
                                </div>;
      
    let fieldIssueContent =  <div className="panel-primary">
                               <FeedbackForm {...this.state} loading={loading} name="fieldIssue" type="428||JD omni service issues" handleSubmit={this.handleSubmit} />
                             </div>;     

    let panel = [{id : '2.2.1' , header : 'I want to report an issue regarding the JD Omni call center.' ,content : callcenterIssueContent},
                {id : '2.2.2' , header : 'I want to report an issue regarding the JD Omni field support.' , content : fieldIssueContent}]
    return (
        <CustomAccordion panels={panel} customClass={'panel-primary'}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(ServiceIssue);
