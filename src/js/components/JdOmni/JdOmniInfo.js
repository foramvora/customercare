import React,{ Component } from 'react';

class JdOmniInfo extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return(
            
                <div>
                  <div className="panel-secondary-title-blue">Thank you for your interest in JD Omni</div>
                  <div className="form-container custom-form">
                    <label htmlFor>Please submit your request below and we will get back to you within 48 hours or Please type in any other details that you want to share.</label>
                    <textarea className="form-text" placeholder="Enter Text" defaultValue={""} />
                    <button className="submit-btn btn btn-primary">Submit</button>
                  </div>
                </div>
        )
    }
}
export default JdOmniInfo;
