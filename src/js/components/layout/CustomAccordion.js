import React, { Component } from 'react';
import { Accordion,Panel } from 'react-bootstrap';

export default class CustomAccordion extends Component 
{	
	constructor(props) {
    super(props);
    this.state = {
        activeKey : (props.selectedTab) ? props.selectedTab : null,
        collapsed : (props.selectedTab) ? false : true,
      }
  	}

    handleSelect(activeKey,activeObj)
    {	  	
	    const currentActive = this.state.activeKey;
	    const collapsed = (currentActive !== activeKey && !this.state.collapsed) ? this.state.collapsed : !this.state.collapsed;

	    this.setState({
	        activeKey : activeKey,
	        collapsed : collapsed,
	    });


	    if (this.props.onSelect && !collapsed) {
	      this.props.onSelect(activeKey,activeObj);
	    }
   	}

	render(){
		const { activeKey ,collapsed } = this.state; 
    	const { panels , onSelect , selectedTab}  = this.props;
		
		return(
			<Accordion bsClass={this.props.customClass} onSelect={this.handleSelect.bind(this)} defaultActiveKey={selectedTab}>	
			{ 	
				panels.map(panel=>{
					return(
						<Panel className={(activeKey == `${panel.id}` && !collapsed) ? "panel-active" : ""} 
							header={<div>{panel.header}<i className={`cms-sprite ${(activeKey == `${panel.id}` && !collapsed) ? 'up-icn' : 'down-icn'}`}/></div>} 
							eventKey={panel.id} key={panel.id} 
						>
							{panel.content}
						</Panel>
					)	
				})
			}
			</Accordion>
		)
	}
}