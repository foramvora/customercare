import axios from 'axios'
//const ROOT_URL = 'http://foramvora.jdsoftware.com/jd_rwd4/webcms_new/functions/contactus/ajax_contactus.php';
import {ROOT_URL} from '../../index.js'

export function fetchMedia(docid,city,type){

	let returnData = axios.get(`${ROOT_URL}?action=getVLCData&docid=${docid}&city=${city}&media=${type}`)

	return{
		type : 'FETCH_VLC_DET',
		payload : returnData,
	}
}

export function closeModal(){
	return {
		type : 'CLOSE_COMPLAINT_MODAL_X',
		payload : { complaint_no : null , msg : null }
	}
}