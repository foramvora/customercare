const INTIAL_STATE ={complaint:{code : -1},error:null,loading:false}

export default function(state=INTIAL_STATE ,action){//console.log(state,action)
	switch(action.type){
		case "STAFF_COMPLAINT_PENDING":
			return {...state, complaint:{}, error:null, loading:true};
		case "STAFF_COMPLAINT_FULFILLED":
			return {...state, complaint:action.payload.data.errors, error:null, loading:false};
		case "STAFF_COMPLAINT_REJECT":
			return {...state, complaint:{}, error:action.payload.msg, loading:false};
		case 'STAFF_COMPLAINT_DONE':
			return {...state, complaint:{code : 1}, error:null, loading:false};
		default:
			return state;
	}
}
