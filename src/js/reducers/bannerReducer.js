const INITIAL_STATE ={bannerDetails:[],bannerUpdate:null,error:null,loading:false};
        
export default function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
      case "FETCH_BANNER_DET_PENDING": { 
        return {...state, loading : true }
      }
      case "FETCH_BANNER_DET_FULFILLED": {
        return {...state , bannerDetails : action.payload.data , error : 0 ,loading : false} 
      }
      case "FETCH_BANNER_DET_REJECT" : {
        return {...state , error : 1 ,loading : false}
      }

      case "UPDATE_BANNER_DET_PENDING": { 
        return {...state, loading : true }
      }
      case "UPDATE_BANNER_DET_FULFILLED": {
        return {...state , bannerUpdate : action.payload.data , error : 0 ,loading : false} 
      }
      case "UPDATE_BANNER_DET_REJECT" : {
        return {...state , error : 1 ,loading : false}
      }
      case "BANNER_MODAL_CLOSE" : {
        return {...state , error : 1 ,loading : false}
      }
    }
    return state
}
