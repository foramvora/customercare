import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal,Button } from 'react-bootstrap';

import { fetchSURL } from "../../actions/contractActions"
import { DOCID } from '../../../index.js'

class StopActivateEcs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ecsClick : false
        }
        
        this.getScode = this.getScode.bind(this);
        this.handleRedirectECS = this.handleRedirectECS.bind(this);
    }

    handleRedirectECS(scode){
        window.location.href = 'http://jsdl.in/EC-'+scode+'/ecs'
        this.setState({ecsClick : false})
    }

    getScode(type)
    {
        this.setState({ecsClick : true})
        this.props.fetchSURL(DOCID);
    }

    componentDidUpdate() {
        let scode = this.props.contractDetails ? this.props.contractDetails.surl : null;
        if(this.props.contractDetails.error === 0 && scode !== null && this.props.activePanel ==="3" && this.state.ecsClick){
            this.handleRedirectECS(scode);
        }
    }
    

    render () {
        return(
            <div>
            <div className="panel-body">
                Click <a className="pointer" onClick={this.getScode}>here</a> to Stop / Reactivate My ECS
            </div>
            {/*<section className="react-ecs">
                <div className="chk-tab">
                    <label className="checkbox-inline">
                        <input type="checkbox" id="stopECScheckbox" defaultValue="option1" defaultChecked /> I need to Stop ECS
                    </label>
                    <label className="checkbox-inline">
                        <input type="checkbox" id="reactivateECScheckbox" defaultValue="option1" defaultChecked /> I need to Reactivate my ECS
                    </label>
                </div>
                <div id="stopECSid" className="stop-ecs">
                    <div className="ttle-txt">I need to Stop ECS</div>
                    <div className="ecs-frm">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Reason:</label>
                                <select className="form-control">
                                    <option>Select Reason</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Remarks:</label>
                                <textarea placeholder="Remarks for STOP Contract" rows={3} className="form-control" defaultValue={ ""} />
                            </div>
                            <div className="text-right">
                                <button className="btn btn-primary" type="submit">Stop ECS</button>
                            </div>
                        </form>
                    </div>
                </div>
                <section className="spmycntr" id="reactivateECSid">
                    <div className="ecssi-ttle btm-bdr">I need to Reactivate my ECS</div>
                    <div className="ecs-si-acti">
                        <table className="table tbl">
                            <tbody>
                                <tr>
                                    <td width="40%" className="fst-td">Parent ID</td>
                                    <td width="60%">PXX11.XX11.140428154605.P8H2</td>
                                </tr>
                                <tr>
                                    <td className="fst-td">Billdesk ID</td>
                                    <td>PXX11.XX11.140428154605.P8H2.0</td>
                                </tr>
                                <tr>
                                    <td className="fst-td">Status</td>
                                    <td>Deactivated</td>
                                </tr>
                                <tr>
                                    <td className="fst-td">Done On</td>
                                    <td>09 Feb 2015 07:45:27AM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ecs-frm">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Provide Reason for Re-activation:</label>
                                <textarea placeholder="Reason for Re-activation" rows={3} className="form-control" defaultValue={ ""} />
                            </div>
                            <div className="text-right">
                                <button className="btn btn-primary" type="submit">Reactivate</button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>*/}

                 {/*<Modal show={this.state.showError} onHide={this.close} dialogClassName="custom-modal">
                  <Modal.Header>
                    <Modal.Title>Error</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <p>Oops! Something went wrong. Please try again while we fix it!</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>*/}

            </div>
        )
    }
}


const mapStateToProps = (state)=>{
  return {
   contractDetails : state.contractDetails,
   activePanel : state.activePanel.panel
  } 
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchSURL},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(StopActivateEcs)