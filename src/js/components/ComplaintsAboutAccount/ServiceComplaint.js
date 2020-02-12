import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

import { saveComplaint , closeModal} from '../../actions/submitActions';
import { PARENTID,DTCITY,CNAME } from '../../../index.js'

class serviceComplaint extends Component {
	
	constructor(props) {
		super(props);
		
		this.state={
            complaintType: '',
            complaint: '',
            formErrors: {complaintType: '', complaint: ''},
            complaintTypeValid: false,
            complaintValid: false,
            formValid: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hideModal = this.hideModal.bind(this);
	}

	handleChange(e) {
	    /*if(event.target.type == 'select-one')
	        this.setState({complaintType: event.target.value})
	    else
	        this.setState({complaint: event.target.value})*/
	    
	    const name = e.target.name;
	    const value = e.target.value;

	    this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
	}

	handleSubmit(event) {//console.log(value)

    let emoji_charcode = '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])';
    let comp = this.state.complaint;

    comp = comp.replace(new RegExp(emoji_charcode, 'g'), ''); //Drop emojis from textarea

    let params = {companyname : CNAME, parentid : PARENTID, city : DTCITY,  complaintType : this.state.complaintType, complaint : comp};
    
    this.props.saveComplaint(params);
    event.preventDefault();

	}

	hideModal() {
        let modalOpen = this.props.complaint_no ? true : false;
        this.setState({complaintType:''});
        this.setState({complaint:''});
        this.setState({formValid:false});
        this.props.closeModal();
    }

     validateField(fieldName, value) {
         let fieldValidationErrors = this.state.formErrors;
         let complaintTypeValid = this.state.complaintTypeValid;
         let complaintValid = this.state.complaintValid;

         switch(fieldName) {
           case 'complaintType':
             complaintTypeValid = value!=='';
             fieldValidationErrors.complaintType = complaintTypeValid ? '' : 'Please Select a ';
             break;
           case 'complaint':
            complaintValid = value.length >= 10 && value.length !== 0 ;
            fieldValidationErrors.complaint = complaintValid ? '': ' should be atleast 10 characters';
             break;
           default:
             break;
         }
         this.setState({formErrors: fieldValidationErrors,
                         complaintTypeValid: complaintTypeValid,
                         complaintValid: complaintValid
                       }, this.validateForm);
     }

     validateForm() {
       this.setState({formValid: this.state.complaintTypeValid && this.state.complaintValid});
     }
     
     errorClass(error) {
         return(error.length === 0 ? '' : 'has-error');
     }


	render () {
    let {loading} = this.props
    let submit = loading === true ? '' : 'Submit'
    let loader_cls = loading === true ? 'loadSubmt' : ''
		let modalOpen = this.props.complaint_no ? true : false;
		let errorcode = this.props.errorcode ? this.props.errorcode : 0;
		let errorModal = errorcode == -1 ? true : false;
		//const modalOpen = complaint_no !== undefined ? true : false;
		//console.log(complaint_no)
		return (
			<div className="ecs-frm">
			    <form onSubmit={this.handleSubmit}>

			        <div className={`form-group ${this.errorClass(this.state.formErrors.complaintType)}`}>
			            <label htmlFor="exampleInputEmail1">Complaint Type:</label>
			            <select name="complaintType" className="form-control selectpicker" value={this.state.complaintType} onBlur={this.handleChange} onChange={this.handleChange}>
			                <option value=''>Select complaint type</option>
			                <option value="34||Fund Transfer - Between Same Companies">Fund Transfer - Between Same Companies</option>
			                <option value="56||Less Leads">Less Leads</option>
			                <option value="57||No Leads">No Leads</option>
			                <option value="58||Irrelevant Leads">Irrelevant Leads</option>
			                <option value="59||Out of Area Leads">Out of Area Leads</option>
			                <option value="70||ECS Mandate Change Request">ECS Mandate Change Request</option>
			                <option value="74||Freeze Contract - Duplication">Freeze Contract - Duplication</option>
			                <option value="76||Fund Transfer - One Company to Another Company">Fund Transfer - One Company to Another Company</option>
			                <option value="89||New Registration Query">New Registration Query</option>
			                <option value="105||Banner - Correction in Banner Design">Banner - Correction in Banner Design</option>
			                <option value="106||Banner- Not appearing on Web">Banner- Not appearing on Web</option>
			                <option value="110||Complaint regarding Masked number Lead">Complaint regarding Masked number Lead</option>
			                <option value="117||JD Omni - Domain name Related">JD Omni - Domain name Related</option>
			                <option value="128||JD Omni - B-Form Changes">JD Omni - B-Form Changes</option>
			                <option value="131||JD Omni - Hardware Related Issue">JD Omni - Hardware Related Issue</option>
			                <option value="132||JD Omni - Software Related Issue">JD Omni - Software Related Issue</option>
			                <option value="144||JD OMNI - Mobile App Changes related">JD OMNI - Mobile App Changes related</option>
			                <option value="151||JD Omni - Demo Request">JD Omni - Demo Request</option>
			                <option value="182||Complaint Against Incomplete Lead through Web / App / WAP">Complaint Against Incomplete Lead through Web / App / WAP</option>
			                <option value="261||Inventory Invoice Request">Inventory Invoice Request</option>
			                <option value="325||Software Issue while saving contract">Software Issue while saving contract</option>
			                <option value="326||Software Issue while Downloading Invoice">Software Issue while Downloading Invoice</option>
			                <option value="327||Feedback Facility Not Activated">Feedback Facility Not Activated</option>
			                <option value="328||Delay in Email Lead">Delay in Email Lead</option>
			                <option value="329||Delay in Sms Lead">Delay in Sms Lead</option>
			                <option value="330||Not Getting Leads through Email">Not Getting Leads through Email</option>
			                <option value="331||Not Getting Leads through SMS">Not Getting Leads through SMS</option>
			            </select>
			            <span id="err-complnttype" className="jerr">{`${this.state.formErrors.complaintType} ${this.state.formErrors.complaintType!==''?'Complaint Type' :''}`}</span>
			        </div>
			        <div className={`form-group ${this.errorClass(this.state.formErrors.complaint)}`}>
			            <label htmlFor="compliantComment">Comments/Feedback:</label>
			            <textarea name="complaint" className="form-control" rows={6} value={this.state.complaint} onBlur={this.handleChange} onChange={this.handleChange} placeholder="Your Feedback about our service." />
			            <span id="err-comcomplaint" className="jerr">{`${this.state.formErrors.complaint!==''?'Complaint' :''} ${this.state.formErrors.complaint}`}</span>
			        </div>
			        <div className="text-right">
                <span className="subBtnWrp"> 
                  	<input disabled={!this.state.formValid || loading===true} className="btn btn-primary" type="submit" value={submit} />
                    <span className={loader_cls}></span>
                </span>
            	</div>
			    </form>

              <Modal show={modalOpen} onHide={this.hideModal}>
                <Modal.Body>
                    <div className="hdr-tx">
                      <button type="button" onClick={this.hideModal} className="clsbtn no-border" aria-label="Close"></button>
                    </div>
                    <section className="tab-flw tnks-visit">
                      <div className="tx2 ">Thank you for your inputs.</div>
                      <div className="tx2 ">Your complaint is registered with Ticket id {this.props.complaint_no}.</div>
                      <div className="tx2 margin-adjust">Our team shall revert to you shortly</div>
                      <br/>
                      <div className="text-center">
                        <button className="btn btn-primary" aria-label="Close" onClick={this.hideModal}>OK</button>
                      </div>
                    </section>
               </Modal.Body>
              </Modal>

              <Modal bsStyle='primary' title='Modal heading' show={errorModal}>
                  <Modal.Body>
                      <div className="hdr-tx">
                        <button type="button" onClick={this.hideModal} className="clsbtn no-border" aria-label="Close"></button>
                      </div>
                      <section className="tab-flw tnks-visit">
                        <div className="tx2 ">Oops,there seems to be an issue submitting your complaint.. </div>
                        <div className="tx2 margin-adjust">Please come back in sometime.</div>
                        <br/>
                        <div className="text-center">
                          <button className="btn btn-primary" aria-label="Close" onClick={this.hideModal}>OK</button>
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
            complaint_no :  state.submitDetails.complaintStatus.complaint_no,
    		    errorcode :  state.submitDetails.complaintStatus.errorcode,
            loading : state.submitDetails.complaintStatus.loading
    	};
}

/*const mapDispatchToProps = (dispatch) => {
  return {
    saveComplaint: (params) => { 
        dispatch(saveComplaint(params)).then((response) => {
            response.action.payload.data.complaint_no!==undefined ? dispatch(saveComplaintSuccess(response.action.payload)) : dispatch(saveComplaintFailure(response.action.payload.data.errormsg));
        });
    },
    saveComplaintDone: (modalOpen) => { 
        dispatch(saveComplaintDone(modalOpen));
    }
  }
}*/

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({saveComplaint, closeModal},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(serviceComplaint);