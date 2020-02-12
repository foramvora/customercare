import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel,Accordion } from 'react-bootstrap';

import CertificateStatus from '../components/KnowJDRR/CertificateStatus';
import Feedback from '../components/Feedback';
import Faq from '../components/KnowJDRR/JDRRFaq';

import { setActivePanel } from '../actions/accountComplaintsActions';
 
class KnowJDRR extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePanel:'',
            toggleIcon:false,
            formTitle: 'Your feedback is important to us. Kindly share your feedback about the JDRR Certificate to help us serve you better.'
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


  render() {
    return (
    	<div>
            <div className="content-title">Know about JDRR</div>

            <div>
                <Accordion onSelect={this.handleSelect.bind(this)} activeKey={this.state.activePanel}>
                    <Panel className={`${this.state.activePanel==1?'panel-active':''}`} header={<span>Your JDRR Certificate Status<i className={`cms-sprite down-icn ${(this.state.activePanel==1 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="1">
                      <CertificateStatus action={this.handleClickHere}/>
                    </Panel>
                    <Panel className={`${this.state.activePanel==2?'panel-active':''}`} header={<span>Feedback About JDRRs<i className={`cms-sprite down-icn ${(this.state.activePanel==2 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="2">
                        <Feedback type="214||Customer feedback- JDRR" title={this.state.formTitle} />
                    </Panel> 
                    <Panel className={`${this.state.activePanel==3?'panel-active':''}`} header={<span>FAQ About JDRR<i className={`cms-sprite down-icn ${(this.state.activePanel==3 && this.state.toggleIcon)?'up-icn':''}`} /></span>} eventKey="3">
                        <Faq />
                    </Panel>
                </Accordion>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {panel: state.activePanel};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setActivePanel},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(KnowJDRR);