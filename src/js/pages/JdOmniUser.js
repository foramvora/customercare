import React, { Component } from 'react';
import { Accordion,Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

import ProductIssue from '../components/JdOmni/ProductIssue';
import ServiceIssue from '../components/JdOmni/ServiceIssue';
import FeatureRequirement from '../components/JdOmni/FeatureRequirement';
 
export default class JdOmniUser extends Component 
{  
  constructor(props) {
    super(props);
    this.state = {
        activeKey : null,
        collapsed : true,
        data      : null,
        showError : false
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
     //activeObj.target.offsetParent.className = 'panel-heading active-panel';
  }

  render() {
    const activeKey = this.state.activeKey;
    const collapsed = this.state.collapsed;
    
    return (
        <div className="omni-content-container">
            <div className="content-title">Users of JD Omni 
                <a href="http://manual.jdomni.com/" className="faq-link pull-right">FAQ's</a>
            </div>

            <Accordion onSelect={this.handleSelect.bind(this)} >
              <Panel className={(activeKey == 1 && !collapsed) ? "panel-active" : ""} header={<span>Report Product Issues <i className={`cms-sprite ${(activeKey == 1 && !collapsed) ? 'up-icn' : 'down-icn'}`}/></span>} eventKey="1">
                  <ProductIssue />
              </Panel>
              <Panel className={(activeKey == 2 && !collapsed) ? "panel-active" : ""} header={<span>Report Service Issues <i className={`cms-sprite ${(activeKey == 2 && !collapsed) ? 'up-icn' : 'down-icn'}`}/></span>} eventKey="2">
                  <ServiceIssue />
              </Panel>
              <Panel className={(activeKey == 3 && !collapsed) ? "panel-active" : ""} header={<span>Suggest feature requirements <i className={`cms-sprite ${(activeKey == 3 && !collapsed) ? 'up-icn' : 'down-icn'}`}/></span>} eventKey="3">
                  <FeatureRequirement />
              </Panel>    
            </Accordion>    
        </div>  
    )
  }
}

