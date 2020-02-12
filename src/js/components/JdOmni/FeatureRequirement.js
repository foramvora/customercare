import React, { Component } from 'react';
import InputFormGroup from '../InputFormGroup';
import {Form ,Col, FormGroup} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import { saveComplaint , closeModal} from '../../actions/submitActions'
import { PARENTID,DTCITY } from '../../../index.js'

class FeatureRequirement extends Component {
  constructor(props)
  {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);                    
    this.handleChange = this.handleChange.bind(this);           
    this.handleInpChange = this.handleInpChange.bind(this);           

    this.state = {
      webRelated : '',
      cappRelated : '',
      vappRelated : '',
      moduleRelated : '',
      webRelatedChecked  : false,
      cappRelatedChecked : false,
      vappRelatedChecked : false,
      moduleRelatedChecked : false,
    }
    
  }

  handleSubmit(event) {
    let {webRelatedChecked ,webRelated , cappRelatedChecked ,cappRelated, vappRelatedChecked ,vappRelated , moduleRelatedChecked , moduleRelated} = this.state;
    let complaint = (webRelatedChecked && webRelated) ? `Web Related--${webRelated}`  : '';
        complaint += (cappRelatedChecked && cappRelated) ? `|@|Consumer App Related--${cappRelated}` : '' 
        complaint += (vappRelatedChecked && vappRelated) ? `|@|Vendor App Related--${vappRelated}` : '' 
        complaint += (moduleRelatedChecked && moduleRelated) ? `|@|Vendor Module Related--${moduleRelated}` : '' 

    let emoji_charcode = '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])';
    let comp = complaint;
    comp = comp.replace(new RegExp(emoji_charcode, 'g'), ''); //Drop emojis from textarea

    let params = {parentid : PARENTID, city : DTCITY , complaint : comp , complaintType : "445||Additional Feature Request By Client"};             
    this.props.saveComplaint(params);
    event.preventDefault();
  }

  handleChange(name){
    this.setState({
      [`${name}Checked`] : !this.state[`${name}Checked`]
    })
  }

  handleInpChange({target}){
    this.setState({ [target.name] : target.value  })
  }

  render() {
    let {loading} = this.props;
    let submit = loading === true ? '' : 'Submit'
    let loader_cls = loading === true ? 'loadSubmt' : ''
    const FieldProps = [{id : '2.3.1' , label : 'Website Related' ,name : 'webRelated'},
                        {id : '2.3.2' , label : 'Consumer App Related' , name : 'cappRelated'},
                        {id : '2.3.3' , label : 'Vendor App Related' , name : 'vappRelated'},
                        {id : '2.3.4' , label : 'Vendor Module Related' , name : 'moduleRelated'}]
    return (
      <div className="form-container custom-form-table">
          <form onSubmit={this.handleSubmit}>
              {
                FieldProps.map(fieldProps=>{
                  return(
                      <InputFormGroup key={fieldProps.id} {...fieldProps} handleChange={this.handleChange} handleInpChange={this.handleInpChange} {...this.state} /> 
                    ) 
                })
              }  

              <FormGroup controlId="submit" className={'form-row'}>
                  <Col md={12} className={'form-cells'}>
                    <div className="notification-text">* Multiple selections are allowed</div>
                    <div className="text-right">
                       <span className="subBtnWrp"> 
                        <input className="btn btn-primary" type="submit" value={submit} />
                        <span className={loader_cls}></span>
                       </span>
                    </div>
                  </Col>
              </FormGroup>
          </form> 

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

export default connect(mapStateToProps,mapDispatchToProps)(FeatureRequirement);
