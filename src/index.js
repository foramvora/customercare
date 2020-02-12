import React 				from 'react';
import ReactDOM 			from 'react-dom';
import { Provider } 		from "react-redux";
import { Router , Route , IndexRoute ,useRouterHistory} from "react-router";
import { createHistory } from 'history'

//import {createStore,applyMiddleware} from 'redux';
import store 				from "./js/store"
//import promise 				from 'redux-promise-middleware';

import App 					  from './js/App';
import AboutMyContract 		  from "./js/pages/AboutMyContract"
import JdOmni 				  from "./js/pages/JdOmni"
import JdOmniUser			  from "./js/pages/JdOmniUser"
import JdOmniNonUser		  from "./js/pages/JdOmniNonUser"
import ManageContent 		  from "./js/pages/ManageContent"
import KnowBanner 			  from "./js/pages/KnowBanner"
import KnowJDRR 			  from "./js/pages/KnowJDRR"
import ComplaintsAboutAccount from "./js/pages/ComplaintsAboutAccount"
import Feedback 			  from "./js/pages/Feedback"

//export const ROOT_URL = 'http://beta3.justdial.com/rahulk/jd_rwd3/webcms_new/functions/contactus/ajax_contactus.php';
export const ROOT_URL = '../../../webcms_new/functions/contactus/ajax_contactus.php';   //for live
export const PARENTID = (window.PARENTID) ? window.PARENTID : 'PXX90.XX90.161014102443.C8I4';
export const DOCID = (window.DOCID) ? window.DOCID : '9999PXX90.XX90.161014102443.C8I4';
export const DTCITY = (window.DTCITY) ? window.DTCITY : 'Sveda' ;
export const CNAME = (window.CNAME) ? window.CNAME : 'P C B Enterprises' ;
//	export const CNAME = 'XXXX'; //being set in store in App.js

//import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

const history = useRouterHistory(createHistory)({
  basename: "/jd-support"  //basename should be generic @_@  // '/rahulk/jd_rwd3/jd-support' for beta /@/ '/jd-support' for live
})

ReactDOM.render(
<Provider store={store}>
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={AboutMyContract}> </IndexRoute>
			<Route path="JDomni" component={JdOmni} ></Route>
			<Route path="JDomni/user" component={JdOmniUser} ></Route>	
			<Route path="JDomni/Nonuser" component={JdOmniNonUser} ></Route>	
			<Route path="ManageContent" component={ManageContent} ></Route>
			<Route path="KnowBanner" component={KnowBanner} ></Route>
			<Route path="KnowBanner/:tab" component={KnowBanner} ></Route>
			<Route path="KnowJDRR" component={KnowJDRR} ></Route>
			<Route path="ComplaintsAboutAccount" component={ComplaintsAboutAccount} ></Route>
			<Route path="Feedback" component={Feedback} ></Route>
		</Route>	
	</Router>
</Provider>,app);



/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
