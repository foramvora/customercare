import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Modal , Button} from 'react-bootstrap'

import { saveFeedback , closeModal} from '../actions/submitActions';
import { PARENTID,DTCITY } from '../../index.js'

class Feedback extends Component {

	constructor(props) {
		super(props);
		this.state={
			starId : '0',
			halfStar : false,
			fullStar : false,
			ratingValue : 0,
			starIdHover : '',
			halfStarHover : false,
			fullStarHover : false,
			ratingValueHover : '',
			comment: '',
			name: '',
			formErrors: {activeRating: '', name: '', comment: ''},
            nameValid: false,
            commentValid: false,
            formValid: false
		}
		this.handleStarClick = this.handleStarClick.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.close = this.close.bind(this);
	}

	handleStarClick(e){
		let target_id = e.target.id;
		let target = document.getElementById(e.target.id);
		let half_star = e.pageX-target.getBoundingClientRect().left<=target.clientWidth/2;

		this.setState({starId: target_id});
		
		if(half_star === true){
			this.setState({halfStar: true});
			target_id == 1 ? this.setState({fullStar: true}) : this.setState({fullStar: false});
		}else{
			this.setState({fullStar: true});
			this.setState({halfStar: false});
		}
		//set rating value
		this.setState({ratingValue: half_star===true && target_id!=1? (parseFloat(target_id)-1) + 0.5 : target_id});
		this.validateForm(target_id);
	}
	handleMouseMove(e){
		let target_id = e.target.id;
		let target = document.getElementById(e.target.id);

		let half_star = false;
		if(target_id!='1.0')
			half_star = e.pageX-target.getBoundingClientRect().left<=target.clientWidth/2;

		this.setState({starIdHover: target_id});

		if(half_star === true){
			this.setState({halfStarHover: true});
			this.setState({fullStarHover: false});
		}else{
			this.setState({fullStarHover: true});
			this.setState({halfStarHover: false});
		}

		this.setState({ratingValueHover: half_star===true && target_id!=='1'? (parseFloat(target_id)-1) + 0.5 : target_id});

	}

	handleMouseOut(){
		this.setState({halfStarHover: false});
		this.setState({fullStarHover: false});
		this.setState({starIdHover: ''});
		this.setState({ratingValueHover: ''});
	}

	handleChange(e) {
	    const name = e.target.name;
	    const value = e.target.value;
	    this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
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
	                  }, this.validateForm(this.state.starId));
	}

	validateForm(target_id=0) {
		let validFlag = this.state.formErrors.name === '' && this.state.formErrors.comment === '' && this.state.name !== '' && this.state.comment !== '' && target_id>0;
		this.setState({formValid: validFlag });
	}

	errorClass(error) {
	     return(error.length === 0 ? '' : 'has-error');
	}

	handleSubmit(event) {
		let emoji_charcode = '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])';
        let feedback = this.state.comment;
        feedback = feedback.replace(new RegExp(emoji_charcode, 'g'), ''); //Drop emojis from textarea

	    let parentid = PARENTID;
	    let city = DTCITY;

	    let params = {parentid : PARENTID, city : DTCITY, compname : this.props.cname, mobile : this.props.mobile, email : this.props.email,  complaintType : this.props.type, rating : this.state.ratingValue, name : this.state.name, comment : feedback};
	    
	    this.props.saveFeedback(params);
	    event.preventDefault();
	}

	close() {
	  this.props.closeModal();
	  this.setState({rating : 0});
	  this.setState({comment : ''});
	  this.setState({name : ''});
	  this.setState({halfStar : false});
	  this.setState({fullStar : false});
	  this.setState({starId : 0});
	  this.setState({ratingValue : 0});
	  this.setState({formValid : false});
	}


	render () {
		let {loading} = this.props
		let submit = loading === true ? '' : 'Submit'
		let loader_cls = loading === true ? 'loadSubmt' : ''
		let hStar = this.state.halfStarHover===true ? this.state.halfStarHover : this.state.halfStar
		let fStar = this.state.fullStarHover===true || this.state.halfStarHover===true ? this.state.fullStarHover : this.state.fullStar
		let sId = this.state.starIdHover!='' ? this.state.starIdHover : this.state.starId
		let rValue = this.state.ratingValueHover != '' ? this.state.ratingValueHover : this.state.ratingValue
		let showModal = (this.props.complaint_no) ? true : false;
		let errorcode = this.props.errorcode ? this.props.errorcode : 0;
		let errorModal = errorcode == -1 ? true : false;

		return (
	        <div>
              <div className="custom-form-title">{this.props.title}</div>
              <form className="form-horizontal form-container custom-form" onSubmit={this.handleSubmit}>
              	<div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                    <label htmlFor>Name</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onBlur={this.handleChange} onChange={this.handleChange} placeholder="Enter Your Name*" />
                    <span id="err-complnttype" className="jerr">{`${this.state.formErrors.name} ${this.state.formErrors.name!==''?'Name' :''}`}</span>
                </div>
                <label htmlFor>Rating</label>
                <div className="ratings-wrapper">
                  <span id="1.0" onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut} onMouseEnter={this.handleStarClick} className={`cms-sprite stars star0 ${(fStar===true && sId>=1) || sId>1 ?'star100':''}`} />
                  <span id="2.0" onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut} onMouseEnter={this.handleStarClick} className={`cms-sprite stars star0 ${hStar===true && sId==2?'star50':''} ${(fStar===true && sId>=2) || sId>2 ?'star100':''}`} />
                  <span id="3.0" onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut} onMouseEnter={this.handleStarClick} className={`cms-sprite stars star0 ${hStar===true && sId==3?'star50':''} ${(fStar===true && sId>=3) || sId>3?'star100':''}`} />
                  <span id="4.0" onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut} onMouseEnter={this.handleStarClick} className={`cms-sprite stars star0 ${hStar===true && sId==4?'star50':''} ${(fStar===true && sId>=4) || sId>4?'star100':''}`} />
                  <span id="5.0" onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut} onMouseEnter={this.handleStarClick} className={`cms-sprite stars star0 ${hStar===true && sId==5?'star50':''} ${(fStar===true && sId>=5) || sId>5?'star100':''}`} />
                  {rValue > 0 ? 
                  <span className="total-rating">
                    {rValue}
                  </span> : ''}
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.comment)}`}>
                    <label htmlFor>Comments / Feedback:</label>
                    <textarea name="comment" className="form-control" placeholder="Your Feedback*" value={this.state.comment} onBlur={this.handleChange} onChange={this.handleChange} rows={4} />
                    <span id="err-complnttype" className="jerr">{`${this.state.formErrors.comment!==''?'Comments' :''} ${this.state.formErrors.comment}`}</span>
          		</div>
                <div className="text-right">
             		 <span className="subBtnWrp"> 
             		 	<input disabled={!this.state.formValid || loading===true} className="btn btn-primary" type="submit" value={submit} />
             		 	<span className={loader_cls}></span>
             		 </span>
          		</div>
              </form>

              <Modal show={showModal} onHide={this.close}>
                <Modal.Body>
                    <div className="hdr-tx">
                      <button type="button" onClick={this.close} className="clsbtn no-border" aria-label="Close"></button>
                    </div>
                    <section className="tab-flw tnks-visit">
                      <div className="tx2 ">Thank you for your inputs.</div>
                      <div className="tx2 ">Your feedback is registered with Ticket id {this.props.complaint_no}.</div>
                      <div className="tx2 margin-adjust">Our team shall revert to you shortly</div>
                      <br/>
                      <div className="text-center">
                        <button className="btn btn-primary" aria-label="Close" onClick={this.close}>OK</button>
                      </div>
                    </section>
               </Modal.Body>
              </Modal> 

              <Modal bsStyle='primary' title='Modal heading' show={errorModal}>
                  <Modal.Body>
                      <div className="hdr-tx">
                        <button type="button" onClick={this.close} className="clsbtn no-border" aria-label="Close"></button>
                      </div>
                      <section className="tab-flw tnks-visit">
                        <div className="tx2 ">Oops,there seems to be an issue submitting your feedback.. </div>
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
        complaint_no :  state.submitDetails.feedbackStatus.complaint_no,
        errorcode :  state.submitDetails.feedbackStatus.errorcode,
        cname: state.contractDetails.contractInfo !== null && state.contractDetails.error!==1 ? state.contractDetails.contractInfo.company_details.cn : '',
        mobile: state.contractDetails.contractInfo !== null && state.contractDetails.error!==1 ? state.contractDetails.contractInfo.company_details.mb : '',
        email: state.contractDetails.contractInfo !== null && state.contractDetails.error!==1 ? state.contractDetails.contractInfo.company_details.em : '',
        loading : state.submitDetails.feedbackStatus.loading
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveFeedback , closeModal},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Feedback);