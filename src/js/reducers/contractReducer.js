/*const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}*/

export default function reducer(state={
    cn : 'Companyname',
    contractInfo : {bid_cats : {}, company_details : {wte : '', wts:''}, main_bus_cats : {}, payment_details : {} ,LeadsReport : {countwise : {},datewise : {}} },
    sendLeadsEmail : {error : null, loading : false},
    invoiceInfo : null,
    surl : null,
    ecsCcsiInfo : null,
    error: null,
    loading : true,
  }, action) {
    
    switch (action.type) {
      case "FETCH_CONTRACT_NAME": {
        return {...state, cn : 'Malti Enterprises'}
      }
      case "FETCH_DET_FULFILLED": { 
        return {...state ,contractInfo:{...state.contractInfo,...action.payload}, error : action.error } 
      }
      case "FETCH_DET_REJECTED": { 
        return {...state , contractInfo : action.payload , error : 1 } 
      }
      case "FETCH_INVOICE_DET": {
        return {...state , loading : true } 
      }
      case "FETCH_INVOICE_DET_FULFILLED": {
        return {...state , invoiceInfo : action.payload.data , error : action.error, loading : false } 
      }
      case "FETCH_INVOICE_DET_REJECT": { 
        return {...state , invoiceInfo : action.payload , error : 1, loading : false } 
      }
      case "FETCH_INVOICE_PDF_FULFILLED": {
        return {...state  , invoiceURL : action.payload , error : action.error } 
      }
      case "FETCH_INVOICE_PDF_REJECTED": { 
        return {...state , invoiceURL : action.payload , error : 1 } 
      }
      case "FETCH_SURL_FULFILLED" : {
        return {...state , surl : action.payload , error : action.error}
      }
      case "FETCH_SURL_ERROR" : {
        return {...state , surl : "" , error : 1}
      }
      case "FETCH_LEADS_FULFILLED" : {
        return {...state , LeadsReport : action.payload.data , error : action.error}
      }
      case "SEND_LEADS_EMAIL_PENDING": { 
        return {...state, sendLeadsEmail :{...state.sendLeadsEmail, loading : true} }
      }
      case "SEND_LEADS_EMAIL_FULFILLED" : {
        return {...state , sendLeadsEmail :{...state.sendLeadsEmail, error : action.payload.data.error, loading : false}}
      }
      case "SEND_LEADS_EMAIL_REJECT" : {
        return {...state , sendLeadsEmail :{...state.sendLeadsEmail, error : 1, loading : false}}
      }
      case "LEADS_EMAIL_MODAL_CLOSE" : {
        return {...state , sendLeadsEmail :{...state.sendLeadsEmail, error : null, loading : false}}
      }
      case "FETCH_ECSSI_FULFILLED" : {
        return {...state , ecsCcsiInfo : action.payload , error : action.error}
      }
      case "FETCH_ECSSI_ERROR" : {
        return {...state , ecsCcsiInfo : "" , error : 1}
      }
    }
    return state
}