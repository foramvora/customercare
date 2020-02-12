const INTIAL_STATE ={panel: 0}

export default function(state=INTIAL_STATE ,action){

	switch(action.type){
		case 'ACTIVE_PANEL': 
			return {...state, panel:action.activPanel};
		default:
			return state;
	}
}