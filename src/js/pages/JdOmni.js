import React, { Component } from 'react';
import { Link } from "react-router";
 
 
class JdOmni extends Component {
  render() {
    return (
      <div className="omni-content-container">
          <div className="content-title">JD Omni</div>
          <div className="omni-content">
            <div className="content-loader-options" data-target-tab="cms_existing_user">
              <Link to="/JDomni/user">I am a JD Omni user</Link> 
            </div>
            {/*<div className="content-loader-options" data-target-tab="cms_new_user">
              <Link to="/JDomni/NonUser">I am a non – user of JD Omni but am interested to know more</Link>
            </div>*/}
            <img src="//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/cms/JD-Omni.jpg" alt className="img-responsive" />
          </div>
      </div>
    )
  }
}

export default JdOmni;