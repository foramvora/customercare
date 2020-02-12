import axios from 'axios'
import {ROOT_URL} from '../../index.js'
//const ROOT_URL = 'http://foramvora.jdsoftware.com/jd_rwd4/webcms_new/functions/contactus/ajax_contactus.php';
const qs = require('qs');

export function getCertificateStatus(parentid,dtcity){
	let params = {action: 'getCertificateStatus', parentid : parentid, data_city : dtcity};
	let random = (Math.random()*1000);

	let returnData = axios.post(ROOT_URL+'?randno='+random, qs.stringify(params));

	return{
		type : 'CERTIFICATE_STATUS',
		payload : returnData,
	}
}