import React, { Component } from 'react';
import { Accordion,Panel } from 'react-bootstrap';

import JdOmniInfo from '../components/JdOmni/JdOmniInfo';
 
export default class JdOmniNonUser extends Component 
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
  }

  render() {
    const activeKey = this.state.activeKey;
    const collapsed = this.state.collapsed;
    
    return (
        <div className="omni-content-container">
            <div className="content-title">Not a User of JD Omni 
                <a href="http://manual.jdomni.com/" className="faq-link pull-right">FAQ's</a>
            </div>

            <Accordion onSelect={this.handleSelect.bind(this)} >
              <Panel className={(activeKey == 1 && !collapsed) ? "panel-active" : ""} header={<span>Need more information on JD Omni <i className={`cms-sprite ${(activeKey == 1 && !collapsed) ? 'up-icn' : 'down-icn'}`}/></span>} eventKey="1">
                  <JdOmniInfo />
              </Panel>
            </Accordion>    
        </div>  
    )
  }
}

