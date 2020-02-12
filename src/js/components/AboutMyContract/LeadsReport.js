import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap'

import { fetchLeadsReport, sendEmailLeadsReport, closeLeadsEmailModal } from "../../actions/contractActions"
import FeedbackReport from './FeedbackReport'
import 'react-datepicker/dist/react-datepicker.css'
import { PARENTID,DTCITY } from '../../../index.js'
 
class LeadsReport extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		startDate : moment().subtract(1,'month'),
  		endDate   : moment(),
  		showReport : false,
  	}	
  }

  handleChangeStart(date) {
  	this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  handleSubmit(sendEmail=0,start=0,end=10){ 
  	let startDate = this.state.startDate.format('YYYY-MM-DD');
  	let endDate = this.state.endDate.format('YYYY-MM-DD');

  	this.props.fetchReport(PARENTID,DTCITY,startDate,endDate,sendEmail,start,end,()=>{
	  	this.setState({
	      showReport: true
	    })
  	})
  }

  handleSendEmail(sendEmail=0,start=0,end=10){ 
    let startDate = this.state.startDate.format('YYYY-MM-DD');
    let endDate = this.state.endDate.format('YYYY-MM-DD');
    let {email} = this.props;

    this.props.sendReport(PARENTID,DTCITY,startDate,endDate,sendEmail,start,end,email)
  }

  hideModal(){
    this.props.closeModal();
  }

  render() {
  	let {LeadsReport, LeadsEmailSent, sendEmailLoading} = this.props;
    let emailModal = LeadsEmailSent === 0 ? true : false;
  	
  	return (
  				<section className="panel-section">
              <div className="panel-section-title">Search for Company Feedback Report</div>
              <div className="panel-form">
                {/*<form>*/}
                <form>
                  <div className="form-group">
                    <label htmlFor>Date Range:</label>
                    <div className="calender-input">
                        <DatePicker ref="startDate"
                        	selectsStart
            					    selected={this.state.startDate}
            					    onChange={this.handleChangeStart.bind(this)}
            					    startDate={this.state.startDate} 
            					    className="form-control"
            					/>
                    <i className="cms-sprite calender-icn" />
                    </div>
                    
                    <span className="divide-to">To</span>
                    
                    <div className="calender-input">
                        <DatePicker ref="endDate"
            					    selectsEnd 
            					    selected={this.state.endDate}
            					    onChange={this.handleChangeEnd.bind(this)} 
            					    startDate={this.state.startDate} endDate={this.state.endDate}
            					    className="form-control"
            				    />
                      <i className="cms-sprite calender-icn" />
                      <span id="endDateBox" />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <br />
                  <button type="button" className="btn btn-primary" onClick={()=>{this.handleSubmit()}}>View Report</button>
                </form>
                {/*</form>*/}
              </div>
         		{ this.state.showReport ? <FeedbackReport handleSubmit={this.handleSubmit.bind(this)} handleSendEmail={this.handleSendEmail.bind(this)} {...LeadsReport} sendEmailLoading={sendEmailLoading}  /> : null }    

            <Modal show={emailModal} onHide={this.hideModal.bind(this)}>
              <Modal.Body>
                  <div className="hdr-tx">
                    <button type="button" onClick={this.hideModal.bind(this)} className="clsbtn no-border" aria-label="Close"></button>
                  </div>
                  <section className="tab-flw tnks-visit">
                    <div className="tx2 ">The Leads have been sent to your registered email id.</div>
                    <br/>
                    <div className="text-center">
                      <button className="btn btn-primary" aria-label="Close" onClick={this.hideModal.bind(this)}>OK</button>
                    </div>
                  </section>
             </Modal.Body>
            </Modal>

          </section>
  		)	
  }
} 

const mapStateToProps = (state)=>{
  return {
   LeadsReport : state.contractDetails.LeadsReport,
   LeadsEmailSent : state.contractDetails.sendLeadsEmail.error,
   sendEmailLoading : state.contractDetails.sendLeadsEmail.loading,
   email : state.contractDetails.contractInfo.company_details.em!='' ? state.contractDetails.contractInfo.company_details.em : state.contractDetails.contractInfo.company_details.fem
  } 
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    fetchReport : (pid,city,startDate,endDate,sendEmail,start,end,callback)=>{  
        dispatch(fetchLeadsReport(pid,city,startDate,endDate,sendEmail,start,end)).then((response)=>{ 
          callback();
        })
    },
    sendReport : (pid,city,startDate,endDate,sendEmail,start,end,email)=>{  
        dispatch(sendEmailLeadsReport(pid,city,startDate,endDate,sendEmail,start,end,email))
    },
    closeModal : () => {
        dispatch(closeLeadsEmailModal())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeadsReport)