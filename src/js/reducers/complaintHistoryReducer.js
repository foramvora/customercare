const INTIAL_STATE ={history:[],error:null,loading:true}

export default function(state=INTIAL_STATE ,action){
	switch(action.type){
		case 'COMPLAINT_HISTORY':
			return {...state, history:{}, error:null, loading:true};
		case 'COMPLAINT_HISTORY_FULFILLED':
			return {...state, history:action.payload.data, error:null, loading:false};
		case 'COMPLAINT_HISTORY_REJECT':
			return {...state, history:{}, error:action.payload.msg, loading:false};
		default:
			return state;
	}
}