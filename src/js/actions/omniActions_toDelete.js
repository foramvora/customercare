import axios from 'axios'
import {ROOT_URL} from '../../index.js'
//const ROOT_URL = 'http://foramvora.jdsoftware.com/jd_rwd4/webcms_new/functions/contactus/ajax_contactus.php';
const qs = require('qs');

export function saveComplaint(complaintDetails){
	let params = { ...complaintDetails }
	let returnData = axios.post(ROOT_URL+'?action=saveServiceComplaint&companyname=COMPANYNAME',qs.stringify(params))
	return{
		type : 'SAVE_COMPLAINT',
		payload : returnData,
	}
}

export function closeModal(){
	return {
		type : 'CLOSE_COMPLAINT_MODAL',
		payload : { complaint_no : null , msg : null }
	}
}