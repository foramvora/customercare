import axios from 'axios'
//const ROOT_URL = 'http://foramvora.jdsoftware.com/jd_rwd4/webcms_new/functions/contactus/ajax_contactus.php';
import {ROOT_URL} from '../../index.js'
const qs = require('qs');

export function fetchBannerData(parentid,city,type){
	
	let returnData = axios.get(`${ROOT_URL}?action=getLiveBannerDetails&parentid=${parentid}&city=${city}&type=${type}`)

	return{
		type : 'FETCH_BANNER_DET',
		payload : returnData,
	}
}



export function updateBannerData(params){

	let random = (Math.random()*1000);
	let request = new axios({url: ROOT_URL+'?randno='+random, method: 'post', data: params, headers: { 'Content-Type' : 'multipart/form-data' } });
 	return{
		type : 'UPDATE_BANNER_DET',
		payload : request,
	}
}

export function closeBannerModal(){
	return {
		type : 'BANNER_MODAL_CLOSE',
		payload : {}
	}
}
