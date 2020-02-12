import React from 'react';
import CustomAccordion from "../components/layout/CustomAccordion" 
import VLCContent from "../components/ManageContent/VLCContent" 
import ContentFeedback from "../components/ManageContent/ContentFeedback" 
import ContentFAQ from "../components/ManageContent/ContentFAQ" 

export default class ManageContent extends React.Component {
  render() {
  	let panel = [{id : '3.1.1' , header : 'Upload / Delete / Replace Content' ,content : <VLCContent/>},
                 {id : '3.1.2' , header : 'Feedback' , content : <ContentFeedback/>},
                 {id : '3.1.3' , header : 'FAQ About Contents' , content : <ContentFAQ />}]

            
    return (
    	<div>
  			<div className="content-title">Manage Your Contents (Photos, Logo, Video & Menu)</div>
      	<CustomAccordion panels={panel} />    		
  		</div>
    )
  }
}
