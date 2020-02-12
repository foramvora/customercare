import React , {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap'

import PhotoFAQ from './PhotoFAQ';
import LogoFAQ from './LogoFAQ';
import VideoFAQ from './VideoFAQ';
import MenuFAQ from './MenuFAQ';

export default class ContentFAQ extends Component {
  constructor(props)
  {
  	super(props)
  	this.state = {
  		activeKey : '1',
  	}
  	this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey)
  {
  	console.log('eventKey',eventKey)
  	 this.setState({
	        activeKey : eventKey,
	 });
  } 	

  render() {
  	var activeKey = this.state.activeKey ; 
    return (
    				<div className="tabs-container">	
				    	<Nav bsStyle="tabs" activeKey={activeKey} onSelect={this.handleSelect}>
					        <NavItem eventKey="1" title="Photos">Photos</NavItem>
					        <NavItem eventKey="2" title="Logo">Logo</NavItem>
					        <NavItem eventKey="3" title="Video">Video</NavItem>
					        <NavItem eventKey="4" title="Menu">Menu</NavItem>
				        </Nav>
						<div className="tab-content ">
						{{
							'1' : (
								<PhotoFAQ/>
							),
							'2' : (
								<LogoFAQ/>
							),
							'3' : (
								<VideoFAQ/>
							),
							'4' : (
								<MenuFAQ/>
							),		
						}[activeKey]}	
						</div>
				  	</div>
    	)
	}
}