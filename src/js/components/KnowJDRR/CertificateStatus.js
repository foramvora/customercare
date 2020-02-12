import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Modal , Image} from 'react-bootstrap'

import {getCertificateStatus} from  '../../actions/jdrrActions';
import { PARENTID,DTCITY } from '../../../index.js'


class CertificateStatus extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showModal : false
		}

		this.statusDates = this.statusDates.bind(this);
		this.statusFlags = this.statusFlags.bind(this);
		this.handleClickJDRR = this.handleClickJDRR.bind(this);
		this.close = this.close.bind(this);
	}

	componentDidUpdate(){
        if(this.props.activePanel==1 && this.props.status.certificateStatus.length===0){
           this.props.getCertificateStatus(PARENTID,DTCITY);
        }
    }

	statusFlags(status){
		let cnt = 1;
		let cls = '';
		return Object.keys(status).map((value,key)=>{
			cls = 's'+cnt+'b-icn';
			cnt=cnt+1;
			return(
				<li key={key} className={`status ${parseInt(status[value], 10) === 1 ? '' : "inactive"}`}>
				  <div className="horizontal-indicator" />
				  <div className="vertical-indicator">
				    <span className="dot" />
				  </div>
				  <div className="status-text">
				    <span className="cover">{value}</span>
				  </div>
				  <div className="status-icons">
				    <span className={`cms-sprite ${cls}`} />
				  </div>
				</li>
			)
		})
	}

	statusDates(status,date){
		let cnt = 1;
		let cls = '';
		return Object.keys(status).map((value,key)=>{
			if(status[value]==1){
				return Object.keys(date).map((v,key)=>{
					if(value === v && date[v]!==undefined){
						cls = 's'+cnt+'-icn';
						cnt=cnt+1;
						return(
							<tr key={key}>
							  <td width="55%" className="fst-td width-adjust1">
							    <span className={`cms-sprite status-icns ${cls}`} />
							    <span className="separator" />
							    <span className="status-text">{value}</span>
							  </td>
							  <td width="45%" className="width-adjust2">{date[v]}</td>
							</tr>
						)
					}
				})
			}
		});
	}

	handleClickJDRR(){
		this.setState({showModal : true})
	}
	close(){
		this.setState({showModal : false})
	}
	

	render () {
		let {certificateStatus} = this.props.status;

		let contract_booked = certificateStatus.data ? certificateStatus.data.contract_booked : 0
		let contract_activated = certificateStatus.data ? certificateStatus.data.contract_activated : 0
		let design_done_sent = certificateStatus.data ? certificateStatus.data.design_done_sent : 0
		let details_confirmed = certificateStatus.data ? certificateStatus.data.details_confirmed : 0
		let given_to_printer = certificateStatus.data ? certificateStatus.data.given_to_printer : 0
		let given_to_courier = certificateStatus.data ? certificateStatus.data.given_to_courier : 0
		let in_transit = certificateStatus.data ? certificateStatus.data.in_transit : 0
		let is_delivered = certificateStatus.data ? certificateStatus.data.is_delivered : 0
		
		let contract_booked_date = certificateStatus.data ? certificateStatus.data.contract_booked_date : 0
		let contract_activated_date = certificateStatus.data ? certificateStatus.data.contract_activated_date : 0
		let design_done_sent_date = certificateStatus.data ? certificateStatus.data.design_done_sent_date : 0
		let details_confirmed_date = certificateStatus.data ? certificateStatus.data.details_confirmed_date : 0
		let given_to_printer_date = certificateStatus.data ? certificateStatus.data.given_to_printer_date : 0
		let given_to_courier_date = certificateStatus.data ? certificateStatus.data.given_to_courier_date : 0
		let in_transit_date = certificateStatus.data ? certificateStatus.data.in_transit_date : 0
		let is_delivered_date = certificateStatus.data ? certificateStatus.data.is_delivered_date : 0

		let jdrr_file_name = certificateStatus.data ? certificateStatus.data.jdrr_file_name : '';
		let no_data = certificateStatus.error ? certificateStatus.error : 0;

		let status_obj = {'Contract Booked' : contract_booked, 'Activation': contract_activated, 'Design Done & Sample Sent': design_done_sent, 'Address & Details Confirmation':details_confirmed, 'Given to Printer': given_to_printer, 'Framing Done & Given to Courier':given_to_courier, 'In Transit': in_transit, 'Delivered': is_delivered}
		let date_obj = {'Contract Booked' : contract_booked_date, 'Activation': contract_activated_date, 'Design Done & Sample Sent': design_done_sent_date, 'Address & Details Confirmation' : details_confirmed_date, 'Given to Printer': given_to_printer_date, 'Framing Done & Given to Courier':given_to_courier_date, 'In Transit': in_transit_date, 'Delivered': is_delivered_date}

		return (
				<div>
		          <div className="certificate-status">
		            <div className="start-status" />
		            <ul className="status-list">
		            	{this.statusFlags(status_obj)}
		              <li className="status inactive">
		                <div className="horizontal-indicator" />
		                <div className="vertical-indicator">
		                  <span className="dot" />
		                </div>
		                <div className="status-text">
		                  <span className="cover" />
		                </div>
		                <div className="status-icons">
		                  <span className="cms-sprite" />
		                </div>
		              </li>
		            </ul>
		            <div className="start-status end-status incomplete-status" />
		          </div>
		          
		          <div className="paydtls status-table">
		            <div className="table-responsive">
		              <table className="table tbl">
		                <tbody>
		                	{this.statusDates(status_obj,date_obj)}
		                </tbody>
		              </table>
		            </div>
		          </div>
		          {jdrr_file_name!='' && jdrr_file_name!=undefined ? 
		          	<div className="random-info">Please <a onClick={this.handleClickJDRR}><span className="blue-text pointer">'Click Here'</span></a> to check your JDRR Certificate</div> : ''}
		          {/*no_data == '0' ?
		          <div className="random-info">Please <a><span className="blue-text">'Click Here'</span></a> to download your POD request <a className="email-link"><span className="cms-sprite email-icn" /><span className="blue-text">Email</span></a></div> : ''*/}

		          <Modal keyboard bsSize="lg" show={this.state.showModal} onHide={this.close}>
		            <Modal.Body>
		            	<div className="hdr-tx">
		            	  <button type="button" onClick={this.close} className="clsbtn no-border" aria-label="Close"></button>
		            	</div>
		                <Image src={`//genio.in/jdrr/downloadStorage.php?path=upload_docs&file_name=${jdrr_file_name}`} responsive />
		           </Modal.Body>
		          </Modal>

		        </div>
		)
	}

}


const mapStateToProps = (state) => {//console.log(state.jdrrCertificate)
    return {
        status: state.jdrrCertificate,
        activePanel: state.activePanel.panel
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCertificateStatus},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CertificateStatus);