const INTIAL_STATE ={blockUnblock:{},contract_detail: {}, error:null,loading:true}

export default function(state=INTIAL_STATE ,action){//console.log(action)
	switch(action.type){
		case 'BLOCK_UNBLOCK':
			return {...state, error:null, loading:true};
		case 'BLOCK_UNBLOCK_FULFILLED':
			return {...state, blockUnblock:action.payload.data, error:null, loading:false};
		case 'BLOCK_UNBLOCK_REJECT':
			return {...state, error:action.payload.msg, loading:false};

		case 'CONTRACT_DETAIL':
			return {...state, error:null, loading:true};
		case 'CONTRACT_DETAIL_FULFILLED':
			//console.log(action.payload.data)
			return {...state, contract_detail:action.payload.data, error:null, loading:false};
		case 'CONTRACT_DETAIL_REJECT':
			return {...state, error:action.payload, loading:false};

		case 'RESET_BLOCK_UNBLOCK':
			return {...state, blockUnblock: {}};

		default:
			return state;
	}
}
