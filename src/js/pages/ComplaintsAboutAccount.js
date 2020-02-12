import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel,Accordion } from 'react-bootstrap';

import ComplaintAgainstStaff from '../components/ComplaintsAboutAccount/ComplaintAgainstStaff';
import LeadsComplaint from '../components/ComplaintsAboutAccount/LeadsComplaint';
import StopActivateEcs from '../components/ComplaintsAboutAccount/StopActivateEcs';
import CompanyDetail from '../components/ComplaintsAboutAccount/CompanyDetail';
import ComplaintHistory from '../components/ComplaintsAboutAccount/ComplaintHistory';
import BlockUnblockMobile from '../components/ComplaintsAboutAccount/BlockUnblockMobile';
import ServiceComplaint from '../components/ComplaintsAboutAccount/ServiceComplaint';

import { setActivePanel } from '../actions/accountComplaintsActions';

 
class ComplaintsAboutAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePanel:'',
            toggleIcon:false
            }
            this.handleClickHere = this.handleClickHere.bind(this);
        }

    handleSelect(eventKey){
        let prev_activePanel=this.state.activePanel;

        (prev_activePanel!=eventKey && prev_activePanel!='') ? this.setState({toggleIcon : true}) : this.setState({toggleIcon : !this.state.toggleIcon});
        this.state.activePanel==eventKey && this.state.toggleIcon ? this.setState({activePanel : ''}) : this.setState({activePanel : eventKey});
        this.props.setActivePanel(eventKey);
    }

    handleClickHere(){
        this.setState({activePanel : "6"});
        this.props.setActivePanel(this.state.activePanel);
    }

    componentWillUnmount() {
      this.props.setActivePanel(0);  
    }


  render() {//console.log(this.props.cname)
    return (
    	<div>
            <div className="content-title">Complaints about My Account</div>

            <div>
                <Accordion onSelect={this.handleSelect.bind(this)} activeKey={this.state.activePanel}>
                    <Panel className={`${this.state.activePanel==1?'panel-active':''}`} header={<span>Complaints about Leads - May I Help You <i className={`cms-sprite down-icn ${(this.state.activePanel==1 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="1">
                      <LeadsComplaint action={this.handleClickHere}/>
                    </Panel>
                    <Panel className={`${this.state.activePanel==2?'panel-active':''}`} header={<span>Transfer My Balance to Another Contract <i className={`cms-sprite down-icn ${(this.state.activePanel==2 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="2">
                        <div className="trans-bal">Please <a className="pointer" onClick={this.handleClickHere}>click here</a> to register your request.</div>
                    </Panel> 
                    <Panel className={`${this.state.activePanel==3?'panel-active':''}`} header={<span>I need to Stop / Reactivate my ECS <i className={`cms-sprite down-icn ${(this.state.activePanel==3 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="3">
                        <StopActivateEcs />
                    </Panel>
                    <Panel className={`${this.state.activePanel==4?'panel-active':''}`} header={<span>My Company on Website - Everything i need to know <i className={`cms-sprite down-icn ${(this.state.activePanel==4 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="4">
                        <CompanyDetail cname={this.props.cname}/>
                    </Panel>
                    <Panel className={`${this.state.activePanel==5?'panel-active':''}`} header={<span>I want to Display my Mobile Number on Website <i className={`cms-sprite down-icn ${(this.state.activePanel==5 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="5">
                        <BlockUnblockMobile />
                    </Panel>
                    <Panel className={`${this.state.activePanel==6?'panel-active':''}`} header={<span>I want to Register Complaint about service <i className={`cms-sprite down-icn ${(this.state.activePanel==6 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="6">
                        <ServiceComplaint />
                    </Panel>
                    <Panel className={`${this.state.activePanel==7?'panel-active':''}`} header={<span>I want to Register Complaint against your Staff <i className={`cms-sprite down-icn ${(this.state.activePanel==7 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="7">
                        <ComplaintAgainstStaff cname={this.props.cname}/>
                    </Panel>
                    <Panel className={`${this.state.activePanel==8?'panel-active':''}`} header={<span>Complaint History <i className={`cms-sprite down-icn ${(this.state.activePanel==8 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="8">
                        <ComplaintHistory />
                    </Panel>
                </Accordion>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
        panel: state.activePanel,
        cname: state.contractDetails.contractInfo !== null && state.contractDetails.error!==1 ? state.contractDetails.contractInfo.company_details.cn : ''
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setActivePanel},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ComplaintsAboutAccount);