import axios from 'axios'

//const ROOT_URL = 'http://foramvora.jdsoftware.com/jd_rwd4/webcms_new/functions/contactus/ajax_contactus.php';
import {ROOT_URL} from '../../index.js'
const qs = require('qs');


export function setActivePanel(activePanel){
	return {
	    type: 'ACTIVE_PANEL',
	    activPanel: activePanel
	};
}

export function staffComplaint(params){
	
	let random = (Math.random()*1000);

	const request = axios.post(ROOT_URL+'?randno='+random, qs.stringify(params));

	return {
	    type: 'STAFF_COMPLAINT',
	    payload: request
	};
}

export function saveComplaintDone(status){
	return {
     type: 'STAFF_COMPLAINT_DONE',
     payload : status
   };

}

export function blockUnblockMobile(params){

	let random = (Math.random()*1000);

	const request = axios.post(ROOT_URL+'?randno='+random, qs.stringify(params));

	return {
	    type: 'BLOCK_UNBLOCK',
	    payload: request
	};
}

export function resetBlockUnblock(){
	return {
		type: 'RESET_BLOCK_UNBLOCK'
	}
}

export function complaintHistory(pid,city,limit=0){

	const request = axios.get(ROOT_URL+'?action=getComplaintHistory&parentid='+pid+'&city='+city+'&limit='+limit);

	  return {
	    type: 'COMPLAINT_HISTORY',
	    payload: request
	  };
}