const INITIAL_STATE ={certificateStatus:[],error:null,loading:false};
        
export default function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
      case "CERTIFICATE_STATUS_PENDING": { 
        return {...state, certificateStatus:{}, loading : true }
      }
      case "CERTIFICATE_STATUS_FULFILLED": {
        return {...state , certificateStatus : action.payload.data , error : 0 ,loading : false} 
      }
      case "CERTIFICATE_STATUS_REJECT" : {
        return {...state , certificateStatus:{}, error : 1 ,loading : false}
      }
    }
    return state
}
