import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { staffComplaint, saveComplaintDone} from  '../../actions/accountComplaintsActions';
import { DOCID,DTCITY } from '../../../index.js';


class ComplaintAgainstStaff extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            dept: '',
            staffName: '',
            comments: '',
            formErrors: {dept: '', staffName: '', comments: ''},
            deptValid: false,
            staffNameValid: false,
            commentsValid: false,
            formValid: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
    }

    handleSubmit(event) {
        let params = [];
        let emoji_charcode = '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])';
        let comp = this.state.comments;
        comp = comp.replace(new RegExp(emoji_charcode, 'g'), ''); //Drop emojis from textarea

        params['companyname'] = this.props.cname;
        //params['emailid'] = 'testing.testjd@gmail.com';
        params['docid'] = DOCID;
        params['city'] = DTCITY;
        
        params['action'] = 'saveComplaintAgnstStaff';
        params['deptdetail'] = this.state.dept;
        params['name'] = this.state.staffName;
        params['comments'] = comp;

        this.props.staffComplaint(params);
        event.preventDefault();
    }

    hideModal() {
        let code = this.props.status.complaint.code;
        this.setState({dept:''});
        this.setState({staffName:''});
        this.setState({comments:''});
        this.setState({formValid:false});
        this.props.saveComplaintDone(code);
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let deptValid = this.state.deptValid;
        let staffNameValid = this.state.staffNameValid;
        let commentsValid = this.state.commentsValid;

        switch(fieldName) {
          case 'dept':
            deptValid = value!=='';
            fieldValidationErrors.dept = deptValid ? '' : 'Please Select a ';
            break;
          case 'staffName':
            staffNameValid = value.length !== 0;
            fieldValidationErrors.staffName = staffNameValid ? '': 'Please enter ';
            break;
        case 'comments':
            commentsValid = value.length >= 10 && value.length !== 0 ;
            fieldValidationErrors.comments = commentsValid ? '': ' should be atleast 10 characters';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        deptValid: deptValid,
                        staffNameValid: staffNameValid,
                        commentsValid: commentsValid
                      }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: this.state.deptValid && this.state.staffNameValid && this.state.commentsValid });
    }

    errorClass(error) {
         return(error.length === 0 ? '' : 'has-error');
     }

 render () { 
    let {loading} = this.props
    let submit = loading === true ? '' : 'Submit'
    let loader_cls = loading === true ? 'loadSubmt' : ''
    let status = this.props.status.complaint.code;

    return(
        <div className="ecs-frm">
            <form onSubmit={this.handleSubmit}>
                <div className={`form-group ${this.errorClass(this.state.formErrors.dept)}`}>
                    <label htmlFor="exampleInputEmail1">Department:</label>
                    <select name="dept" className="form-control selectpicker" value={this.state.dept} onBlur={this.handleChange} onChange={this.handleChange}>
                        <option value=''>Select Department</option>
                        <option value="1||TME/ME">TME/ME</option>
                        <option value="2||Customer Support">Customer Support</option>
                        <option value="3||Voice">Voice </option>
                        <option value="4||Others">Others</option>
                    </select>
                    <span id="err-complnttype" className="jerr">{`${this.state.formErrors.dept} ${this.state.formErrors.dept!==''?'Department' :''}`}</span>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.staffName)}`}>
                    <label htmlFor="complaintName">Staff Name:</label>
                    <input name="staffName" type="text" className="form-control" onBlur={this.handleChange} value={this.state.staffName} onChange={this.handleChange} placeholder="Your Full Name" />
                    <span id="err-complnttype" className="jerr">{`${this.state.formErrors.staffName} ${this.state.formErrors.staffName!==''?'Staff Name' :''}`}</span>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.comments)}`}>
                    <label htmlFor="compliantComment">Comments/Feedback:</label>
                    <textarea name="comments" className="form-control" rows={3} onBlur={this.handleChange} value={this.state.comments} onChange={this.handleChange} placeholder="Your Feedback about our staff." />
                    <span id="err-comcomplaint" className="jerr">{`${this.state.formErrors.comments!==''?'Complaint' :''} ${this.state.formErrors.comments}`}</span>
                </div>
                <div className="text-right">
                    <span className="subBtnWrp"> 
                        <input disabled={!this.state.formValid || loading===true} className="btn btn-primary" type="submit" value={submit} />
                        <span className={loader_cls}> </span>
                    </span>
                </div>
            </form>

            <Modal show={status === 0} onHide={this.hideModal}>
              <Modal.Body>
                  <div className="hdr-tx">
                    <button type="button" onClick={this.hideModal} className="clsbtn no-border" aria-label="Close"></button>
                  </div>
                  <section className="tab-flw tnks-visit">
                    <div className="tx2 ">Thank you for your inputs.</div>
                    <div className="tx2 margin-adjust">Our team shall revert to you shortly</div>
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
    return {status: state.staffComplaint,
            loading : state.staffComplaint.loading
        };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ staffComplaint, saveComplaintDone },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ComplaintAgainstStaff);