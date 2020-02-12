import axios from "axios";
import {ROOT_URL} from '../../index.js'
axios.defaults.headers.common['Accept'] = 'application/json';
//const ROOT_URL = 'http://foramvora.jdsoftware.com/jd_rwd4/webcms_new/functions/contactus/ajax_contactus.php';
const qs = require('qs');

export function fetchContractDet(pid, city) {
  return function(dispatch) { 
    axios.get(ROOT_URL+"?action=contractDet&parentid="+pid+"&city="+city)
      .then((response) => {
        dispatch({type: "FETCH_DET_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_DET_REJECTED", payload: err})
      })
  }
}

export function fetchInvoiceInfo(pid, city) {
  /*return function(dispatch) {       
    axios.get("http://foramvora.jdsoftware.com/jd_rwd4/webcms_new/functions/contactus/ajax_contactus.php?action=getInvoiceInfo&parentid="+pid+"&city="+city)
      .then((response) => {
        dispatch({type: "FETCH_INVOICE_DET_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_INVOICE_DET_REJECTED", payload: err})
      })  
  }*/
  let params = {action: 'getInvoiceInfo', parentid : pid, city : city};
  let random = (Math.random()*1000);

  let returnData = axios.post(ROOT_URL+'?randno='+random, qs.stringify(params));
  return{
    type : 'FETCH_INVOICE_DET',
    payload : returnData,
  }
}

export function fetchInvoicePdf(pid, city, version, date) { 
  var qs = require('qs');
  
  return function(dispatch){
    let random = (Math.random()*1000);
    let url = ROOT_URL+'?action=getInvoiceFile&parentid='+pid+'&city='+city+'&version='+version+'&invDt='+date;
    
    window.location.href = url;
  }
}

export function fetchContractName(pid, city) {
  return {
    type: 'FETCH_CONTRACT_NAME',
    payload: {
      pid,
      city,
    },
  }
} 

export function fetchSURL(docid) { 
  var qs = require('qs');
  
  return function(dispatch){
    let random = (Math.random()*1000);
    return axios.post(ROOT_URL+'?randno='+random, qs.stringify({
      "action": "gotoEditList",
      "docid":docid,
    }))
    .then(function (response) { 
      return dispatch({type: "FETCH_SURL_FULFILLED", payload: response.data[docid]['shorturl'] ,error : 0})
    })
    .catch(function (response) {
      return dispatch({type: "FETCH_SURL_ERROR", payload: {} ,  error: 1 })
    });

  }
}

export function fetchSURLSuccess(response)
{
  return{
    type : 'fetchSURLSuccess',
    payload : response
  }
}

export function fetchEcsSiInfo(pid,city,limit=0)
{
  var qs = require('qs');
  
  return function(dispatch){
    let random = (Math.random()*1000);
    return axios.post(ROOT_URL+'?randno='+random, qs.stringify({
      "action": "ecsCcsiCustomercare",
      "parentid":pid,
      "city":city,
      "startlimit":limit
    }))
    .then(function (response) {
      return dispatch({type: "FETCH_ECSSI_FULFILLED", payload: response ,error : 0})
    })
    .catch(function (response) {
      return dispatch({type: "FETCH_ECSSI_ERROR", payload: {} ,  error: 1 })
    });

  }
}

export function fetchLeadsReport(pid,city,startDate,endDate,sendEmail,start,end)
{
   var qs = require('qs');
  
  return function(dispatch){
    let random = (Math.random()*1000);
    return axios.post(ROOT_URL+'?limit='+start+'&ulimit='+end+'&sendmail='+sendEmail+'&randno='+random, qs.stringify({
      "action": "companyfeedback_report",
      "parentid":pid,
      "city":city,
      "startDate":startDate,
      "endDate":endDate,
    }))
    .then(function (response) {
      return dispatch({type: "FETCH_LEADS_FULFILLED", payload: response ,error : 0})
    })
    .catch(function (response) {
      return dispatch({type: "FETCH_LEADS_ERROR", payload: {} ,  error: 1 })
    });

  }
}

export function sendEmailLeadsReport(pid,city,startDate,endDate,sendEmail,start,end,email)
{
  var qs = require('qs');
  let random = (Math.random()*1000);
  let returnData = axios.post(ROOT_URL+'?limit='+start+'&ulimit='+end+'&sendmail='+sendEmail+'&randno='+random, qs.stringify({
      "action": "companyfeedback_report",
      "parentid":pid,
      "city":city,
      "startDate":startDate,
      "endDate":endDate,
      "emailid": email
    }))
  return{
    type : 'SEND_LEADS_EMAIL',
    payload : returnData,
  }
}

export function closeLeadsEmailModal(){
    return {
      type : 'LEADS_EMAIL_MODAL_CLOSE',
      payload : {}
    }
}