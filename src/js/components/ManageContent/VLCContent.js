import React, {Component} from 'react'
import {Modal, Button , DropdownButton , MenuItem} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux' 

import { fetchSURL } from '../../actions/contractActions'
import { fetchMedia } from '../../actions/contentActions'
import { PARENTID,DTCITY,DOCID } from '../../../index.js'

import ContentContainer from './ContentContainer'

class VLCContent extends Component{
	constructor(props){
		super(props)
		this.state={
			selectedValue : 'default',
			selectedText : 'default',
		}
		this.handleSelect = this.handleSelect.bind(this)
		this.handleRedirect = this.handleRedirect.bind(this)
	}
	
	handleSelect({target}){
		this.setState({selectedValue : target.value,selectedText :target.options[target.selectedIndex].text})
		this.props.fetchMedia(DOCID,DTCITY,target.value)
	}

	handleRedirect(scode)
  	{
      if(scode)
      	window.location.href = 'http://jsdl.in/EC-'+scode+'/up';
      else	
      	this.props.fetchSURL(DOCID);      
    }

    /* Need a better way to handle callbacks! */
    componentWillReceiveProps(nextProps){
     	if(nextProps.scode!==this.props.scode){
     		this.handleRedirect(nextProps.scode)
     	}
  	}

	render(){
		let { selectedValue , selectedText } = this.state;
		let vlcData = (selectedValue !== 'default' && this.props.loading !== true) ? this.props.vlcDetails : [];
		let { scode } = this.props;
		let { cname } = this.props;

		return (
			<div>
				<div className="random-info">Please <a onClick={()=>{this.handleRedirect(scode)}} ><span className="blue-text">'Click Here'</span></a> to Upload / Delete / Replace contents.</div>
				<section className="panel-section">
					<div className="panel-section-title">Search for Company Feedback Report</div>
					<div className="bold-title">Content Type</div>
					<div className="panel-form blue-form">
						<form>
							<div className="form-group no-padding">
								<select className="form-control selectpicker" name="selstartmin" value={selectedValue} onChange={this.handleSelect}>
									<option value="default" disabled>Please select type</option>
									<option value="c">Catalogue</option>
									<option value="l">Logo</option>
									<option value="v">Video</option>
									<option value="m">Menu</option>
								</select>
								<i className="cms-sprite dropdown-arrow-icn"></i>
							</div>
						</form>
					</div>
					<div className="comp-name">Company Name: <span className="light-text">{cname}</span></div>
					<div className="thumbs-wrapper">
						<ContentContainer selectedValue={selectedValue} data={vlcData} selectedText={selectedText} loading={this.props.loading} />
					</div>
					<div className="notification-indicator">
						<div className="indicator">
							<span className="cms-sprite checked-icn"></span>
							<span className="indicator-text">Accepted</span>
						</div>
						<div className="indicator">
							<span className="cms-sprite crossed-icn"></span>
							<span className="indicator-text">Rejected</span>
						</div>
					</div>
				</section>
			  </div>
		)
	}
}

const mapStateToProps = (state) => {
    return { 
        vlcDetails : state.contentDetails.vlcDetails, 
        scode : state.contractDetails.surl,  
        error : state.contentDetails.error,   
        loading : state.contentDetails.loading,
        cname: state.contractDetails.contractInfo !== null && state.contractDetails.error!==1 ? state.contractDetails.contractInfo.company_details.cn : ''
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMedia , fetchSURL },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(VLCContent);