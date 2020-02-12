const INITIAL_STATE ={
                    complaintStatus:{complaint_no : null ,msg : null ,errorcode : null, loading : false},
                    feedbackStatus:{complaint_no : null ,msg : null ,errorcode : null, loading : false}
                  };
        
export default function reducer(state=INITIAL_STATE, action) { 
    switch (action.type) {
      case "SAVE_COMPLAINT_PENDING": { 
        return {...state, complaintStatus :{...state.complaintStatus, loading : true} }
      }
      case "SAVE_COMPLAINT_FULFILLED": {
        return {...state , 
                   complaintStatus : 
                       {...state.complaintStatus,msg: action.payload.data.msg,complaint_no:action.payload.data.complaint_no, errorcode : action.payload.data.errorcode, loading : false}
               } 
      }
      case "SAVE_COMPLAINT_REJECT" : {
        return {...state , complaintStatus : {...state.complaintStatus, error : 1 ,loading : false}}
      }
      case "SAVE_FEEDBACK_PENDING": { 
        return {...state, feedbackStatus :{...state.feedbackStatus, loading : true} }
      }
      case "SAVE_FEEDBACK_FULFILLED": {
        return {...state , 
                   feedbackStatus : 
                       {...state.feedbackStatus,msg: action.payload.data.feedback.msg,complaint_no:action.payload.data.feedback.complaint_no, errorcode : action.payload.data.feedback.errorcode, loading : false}
               } 
      }
      case "SAVE_FEEDBACK_REJECT" : {
        return {...state , feedbackStatus : {...state.feedbackStatus, error : 1 ,loading : false}}
      }
      case "CLOSE_COMPLAINT_MODAL" : {
        return {...state , complaintStatus : action.payload.complaintStatus, feedbackStatus : action.payload.feedbackStatus ,error : null}
      }
    }
    return state
}
