import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Modal,Button } from 'react-bootstrap';

import { blockUnblockMobile, resetBlockUnblock } from  '../../actions/accountComplaintsActions';
import { fetchContractDet } from '../../actions/contractActions';
import { PARENTID,DTCITY } from '../../../index.js';

class BlockUnblockMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            activePanel5: false,
            closeModal: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }


    componentDidUpdate(){//console.log(this.props.activePanel,this.state.activePanel5)
         if(this.props.activePanel==5 && this.state.activePanel5 === false){
            this.setState({activePanel5 :true});
            //const parentid = PARENTID;
            //const city = DTCITY;

            //let params = "&parentid="+parentid+"&city="+city;
            this.props.fetchContractDet(PARENTID,DTCITY);
         }
         if(this.props.status.blockUnblock==1 && this.state.closeModal === false){
            this.setState({ isModalOpen: !this.state.isModalOpen });
            this.setState({activePanel5 :false});
            this.props.resetBlockUnblock();
            this.setState({closeModal :true});
        }
    }

    handleModal(){
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleClick(event){
        let params=[];

        const blocked_flag = this.props.contract_detail.company_details.bfv;
        /*@_@@_@@_@@_@@_@@_@************************@_@@_@@_@@_@@_@@_@@_@*/
        //const parentid = PARENTID;
        //const city = DTCITY;
        /*@_@@_@@_@@_@@_@@_@************************@_@@_@@_@@_@@_@@_@@_@*/
        const actions = parseInt(blocked_flag) === 1 ? 'unblockingVirtualNo' : 'blockingVirtualNo';
        const block = parseInt(blocked_flag) === 1 ? '0' : '1';

        params['action'] = actions;
        params['parentid'] = PARENTID;
        params['city'] = DTCITY;
        params['block'] = block;

        //let params = "&action="+actions+"&parentid="+parentid+"&city="+city+"&block="+block;
        this.props.blockUnblockMobile(params);
        this.setState({closeModal :false});
        event.preventDefault();
    }

    render () {//console.log(this.props.loading)
        let comp_details = this.props.contract_detail !== null ? this.props.contract_detail.company_details : '';
        let blocked_flag = comp_details !== undefined ? comp_details.bfv : '';//console.log(blocked_flag)
        let block_text = parseInt(blocked_flag) === 1 ? 'UnBlock' : 'Block';


            return(
                <div>
                    <section className="advnt-vert">
                        <div className="ttle-txt">Advantages of Special Number</div>
                        <ul className="advnt-list">
                            <li><b>Special Number:</b> It's a unique mobile number allocated to you which helps our clients saving any business opportunity getting missed by connecting the user's call to all their phone numbers present in the contract.</li>
                            <li><b>Map them all:</b> We have given a provision to clients to map up-to 8 of his actual numbers to a special number (it can be landline, mobile or toll free).</li>
                            <li><b>Lead through JD Number:</b> JD directly parks you the potential customer with its identical JD number 022-71588888 which ensures our client receiving the lead calls.</li>
                            <li><b>Caller Line Identification Number (022-71588888): </b>Request to save this number & white-list from mobile handset, truecaller App if the same is blocked as it may lead to missout on Special Numbers Calls through our portal.</li>
                            <li><b>JD App Inbox:</b> Clients can also track Special Number Enquiries via JD app-Inbox where each user details will be visible.</li>
                            <li><b>Dialing Feature:</b> Two types of dialing is available:-
                                <ul>
                                    <li>Parallel dialing - All the map number ring all together (Very high chances of call getting connected).</li>
                                    <li>Sequential dialing - All the map number ring one-after-another priority given to Business Landline (call switches on alternate if it didn't get connected to 1st 2nd and so on).</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="note">
                            <span className="note-tx">NOTE</span>
                            <div className="view-dtl">Client can switch either to Parallel or Sequential dialing mode upon request (Parallel dialing is by default for every special number).</div>
                        </div>
                        <ul className="advnt-list">
                            <li><b>Missed call alert:</b>  Clients receive instant sms/email feedback irrespective of call getting connected / not connected.</li>
                            <li><b>Caller Information:</b> JD shares you caller name, number and DND details via sms/email feedback.</li>
                            <li><b>Feedback &amp; Analytic:</b> Clients can request for detailed analytic / call details report / sms-email feedback from Justdial.</li>
                            <li><b>Security Concern:</b> Client's actual numbers are not shown on the site which avoids misuse of actual information.</li>
                            <li><b>Retention:</b> JD reserves your special number - Client can retain the same special number in case the contract gets expired within the validity period i.e. 6 months.</li>
                        </ul>
                        <div className="ftr-tx">I want to {block_text} Special number &amp; want to display actual number</div>
                        <a onClick={this.handleModal} className="btn btn-primary blk-btn" data-toggle="modal" data-target="#block-unblock-popup" role="button">{block_text} Virtual Number </a>
                    </section>

                    <Modal bsStyle='primary' title='Modal heading' show={this.state.isModalOpen}>
                        <Modal.Body>
                            <div className="hdr-tx">
                              <button type="button" onClick={this.handleModal} className="clsbtn no-border" aria-label="Close"></button>
                            </div>
                            <section className="tab-flw tnks-visit">
                              <div className="tx2 ">Do you really want to {block_text} Virtual Number?</div>
                              <br/>
                              <div className="text-center">
                                <Button bsStyle="primary" onClick={this.handleModal}>No</Button>
                                <Button bsStyle="primary" onClick={this.handleClick}>Yes</Button>
                              </div>
                            </section>
                        </Modal.Body>
                    </Modal>
                </div>
            )
    }
}

const mapStateToProps = (state) => {//console.log(state)
    return {
        status:state.blockUnblock,
        activePanel: state.activePanel.panel,
        contract_detail: state.contractDetails.contractInfo
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({blockUnblockMobile, fetchContractDet, resetBlockUnblock},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BlockUnblockMobile);