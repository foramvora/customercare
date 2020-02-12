import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

import { saveFeedback , closeModal} from '../actions/submitActions';
import { PARENTID,DTCITY } from '../../index.js'
 
class Feedback extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            activeRating: 5,
            name: '',
            comment: '',
            formErrors: {activeRating: '', name: '', comment: ''},
            nameValid: false,
            commentValid: false,
            formValid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }


    handleActiveRating(rating){
        this.setState({activeRating : rating})
    }

    handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
    }

    handleSubmit(event) {
      let emoji_charcode = '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])';
      let feedback = this.state.comment;
      feedback = feedback.replace(new RegExp(emoji_charcode, 'g'), ''); //Drop emojis from textarea

      let parentid = PARENTID;
      let city = DTCITY;

      let params = {parentid : PARENTID, city : DTCITY, compname : this.props.cname, mobile : this.props.mobile, email : this.props.email,  complaintType : "391||Customer Feedback", rating : this.state.activeRating, name : this.state.name, comment : feedback};
      
      this.props.saveFeedback(params);
      event.preventDefault();
    }

    hideModal() {
        this.setState({activeRating:5});
        this.setState({name:''});
        this.setState({comment:''});
        this.setState({formValid:false});
        this.props.closeModal();
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let commentValid = this.state.commentValid;

        switch(fieldName) {
          case 'name':
            nameValid = value.length !== 0;
            fieldValidationErrors.name = nameValid ? '': 'Please enter your ';
            break;
        case 'comment':
            commentValid = value.length >= 10 && value.length !== 0 ;
            fieldValidationErrors.comment = commentValid ? '': ' should be atleast 10 characters';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        nameValid: nameValid,
                        commentValid: commentValid
                      }, this.validateForm);
    }

    validateForm() {
      let validFlag = this.state.formErrors.name === '' && this.state.formErrors.comment === '' && this.state.name !== '' && this.state.comment !== '';
      this.setState({formValid: validFlag });
    }

    errorClass(error) {
         return(error.length === 0 ? '' : 'has-error');
    }

  render() {
    let {loading} = this.props
    let submit = loading === true ? '' : 'Submit'
    let loader_cls = loading === true ? 'loadSubmt' : ''
    let showModal = (this.props.complaint_no) ? true : false;
    let errorcode = this.props.errorcode ? this.props.errorcode : 0;
    let errorModal = errorcode == -1 ? true : false;
    return (
        <div>
            <div className="content-title">How are we doing?</div>
            <div className="content-secondary-title">Your feedback will help us improve</div>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                <input name="name" type="text" className="form-control" value={this.state.name} onBlur={this.handleChange} onChange={this.handleChange} placeholder="Name*" />
                <span id="err-complnttype" className="jerr">{`${this.state.formErrors.name} ${this.state.formErrors.name!==''?'Name' :''}`}</span>
              </div>
              <div className="hwwedo text-center">
                <ul>
                  <li onClick={this.handleActiveRating.bind(this,5)} className={this.state.activeRating==5?'act-smile':''}>
                    <i className="cms-sprite smile-icn" />
                    <span className="smile-tx" rel={5}>Excellent</span>
                  </li>
                  <li onClick={this.handleActiveRating.bind(this,4)} className={this.state.activeRating==4?'act-smile':''}>
                    <i className="cms-sprite smile-icn2" />
                    <span className="smile-tx" rel={4}>Very Good</span>
                  </li>
                  <li onClick={this.handleActiveRating.bind(this,3)} className={this.state.activeRating==3?'act-smile':''}>
                    <i className="cms-sprite smile-icn3" />
                    <span className="smile-tx" rel={3}>Good</span>
                  </li>
                  <li onClick={this.handleActiveRating.bind(this,2)} className={this.state.activeRating==2?'act-smile':''}>
                    <i className="cms-sprite smile-icn4" />
                    <span className="smile-tx" rel={2}>Average</span>
                  </li>
                  <li onClick={this.handleActiveRating.bind(this,1)} className={this.state.activeRating==1?'act-smile':''}>
                    <i className="cms-sprite smile-icn5" />
                    <span className="smile-tx" rel={1}>Poor</span>
                  </li>
                </ul>
              </div>{/*end of hwwedo*/}
              <div className={`form-group ${this.errorClass(this.state.formErrors.comment)}`}>
                <textarea name="comment" className="form-control" value={this.state.comment} onBlur={this.handleChange} onChange={this.handleChange} rows={4} placeholder="Comments*" />
                <span id="err-complnttype" className="jerr">{`${this.state.formErrors.comment!==''?'Comments' :''} ${this.state.formErrors.comment}`}</span>
              </div>
              <div className="text-right">
                 <span className="subBtnWrp"> 
                  <input disabled={!this.state.formValid || loading===true} className="btn btn-primary" type="submit" value={submit} />
                  <span className={loader_cls}></span>
                 </span>
              </div>
              <div className="form-group">
                <span className="smltx">*marked fields mandatory</span>
              </div>
            </form>
            <Modal bsStyle='primary' title='Modal heading' show={showModal}>
                <Modal.Body>
                    <div className="hdr-tx">
                      <button type="button" onClick={this.hideModal} className="clsbtn no-border" aria-label="Close"></button>
                    </div>
                    <section className="tab-flw tnks-visit">
                      <div className="tx2 ">Thank you for your inputs.</div>
                      <div className="tx2 ">Your feedback is registered with Ticket id {this.props.complaint_no}.</div>
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
                      <div className="tx2 ">Oops,there seems to be an issue submitting your feedback.. </div>
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
        complaint_no :  state.submitDetails.feedbackStatus.complaint_no,
        errorcode :  state.submitDetails.feedbackStatus.errorcode,
        cname: state.contractDetails.contractInfo !== null && state.contractDetails.error!==1 ? state.contractDetails.contractInfo.company_details.cn : '',
        mobile: state.contractDetails.contractInfo !== null && state.contractDetails.error!==1 ? state.contractDetails.contractInfo.company_details.mb : '',
        email: state.contractDetails.contractInfo !== null && state.contractDetails.error!==1 ? state.contractDetails.contractInfo.company_details.em : '',
        loading : state.submitDetails.feedbackStatus.loading     
    };
}

/*const mapDispatchToProps = (dispatch) => {
  return {
    submitFeedback: (params) => { 
        dispatch(submitFeedback(params)).then((response) => {
            !response.action.payload.data.errors.code ? dispatch(submitFeedbackSuccess(response.action.payload)) : dispatch(submitFeedbackFailure(response.action.payload.data.errors));
        });
    },
    submitFeedbackDone: (status) => { 
        dispatch(submitFeedbackDone(status));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feedback);*/

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({saveFeedback, closeModal},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Feedback);