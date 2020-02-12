import axios from 'axios'
import {ROOT_URL} from '../../index.js'
//const ROOT_URL = 'http://foramvora.jdsoftware.com/jd_rwd4/webcms_new/functions/contactus/ajax_contactus.php';
const qs = require('qs');

export function saveComplaint(complaintDetails){
	let params = { ...complaintDetails }
	let returnData = axios.post(ROOT_URL+'?action=saveServiceComplaint&src=cc_web',qs.stringify(params))
	return{
		type : 'SAVE_COMPLAINT',
		payload : returnData,
	}
}

export function saveFeedback(complaintDetails){
	let params = { ...complaintDetails }
	let returnData = axios.post(ROOT_URL+'?action=actionfeedback&module=Verified Owner&src=cc_web',qs.stringify(params))
	return{
		type : 'SAVE_FEEDBACK',
		payload : returnData,
	}
}

export function closeModal(){
	return {
		type : 'CLOSE_COMPLAINT_MODAL',
		payload : {
					complaintStatus:{complaint_no : null ,msg : null, errorcode : null, loading : false},
					feedbackStatus:{complaint_no : null ,msg : null, errorcode : null, loading : false}
				  }
	}
}