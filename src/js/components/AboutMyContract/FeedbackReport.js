import React from 'react'
import LeadReportTable from './LeadReportTable'
 
export default class FeedbackReport extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      start : 0,
      end : 10
    }
  }

  childCallback(start,end){
    this.setState({start : start, end : end})
  }

render(){
  const reportData = this.props;
  const {handleSubmit, handleSendEmail, sendEmailLoading} = this.props;
  const start = this.state.start;
  const end = this.state.end;
  let buttonText = sendEmailLoading === true ? '' : 'Send Email'
  let loader_cls = sendEmailLoading === true ? 'loadSubmt' : ''

  return (
      <div>
            <div className="feedback-table">
                      <div className="panel-section-title">Company Feedback Report</div>
                      
                      { (this.props.errorCode === 1) ? <div className="compay-name">There is no Company Feedback Report for this Date</div> : <LeadReportTable {...this.props} callback={this.childCallback.bind(this)} />}
               
                    </div>
                    <div>
                      <div className="panel-section-title">Summary</div>
                      <ul className="info-summary">
                        <li id="maskedFeedback"><label>Total Masked Feedback:</label>{(reportData['Total Masked'] || 0)}</li>
                        <li id="nonmaskedFeedback"><label>Total Non-masked Feedback:</label>{(reportData['Total Non Masked'] || 0)}</li>
                        <li id="totnonunqcnt"><label>Total (Unique/Non Unique Count):</label>{(reportData['Total Count'] || 0)}</li>
                        <li id="totunqcnt"><label>Total Unique Count:</label>{(reportData['Total Unique Count'] || 0)}</li>
                        <li id="totdupcnt"><label>Total Duplicate Count:</label>{(reportData['Total Duplicate Count'] || 0)}</li>
                      </ul>
                      <span className="subBtnWrp">
                        <input disabled={sendEmailLoading===true || reportData['errorCode'] === 1} onClick={()=>{handleSendEmail(1,0,reportData['Total Count'])}} className="btn btn-primary" type="button" value={buttonText} />
                        <span className={loader_cls}></span>
                      </span>
                    </div>   
            </div>         
       );             
  }     
}               