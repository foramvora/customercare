const INITIAL_STATE ={vlcDetails:{},error:null,loading:false};
        
export default function reducer(state=INITIAL_STATE, action) { 
    switch (action.type) {
      case "FETCH_VLC_DET_PENDING": { 
        return {...state, loading : true }
      }
      case "FETCH_VLC_DET_FULFILLED": {
        return {...state , vlcDetails : action.payload.data , error : 0 ,loading : false} 
      }
      case "FETCH_VLC_DET_REJECT" : {
        return {...state , error : 1 ,loading : false}
      }
      case "CLOSE_COMPLAINT_MODAL_X" : {
        return {...state , vlcDetails : action.payload ,error : null}
      }
    }
    return state
}
