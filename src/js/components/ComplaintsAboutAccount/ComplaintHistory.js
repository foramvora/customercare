import React,{ Component } from 'react';
import { Pagination } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {complaintHistory} from  '../../actions/accountComplaintsActions';
import { PARENTID,DTCITY } from '../../../index.js';
import NoData from '../No-data';

class ComplaintHistory extends Component {

    constructor(props) {
        super(props);
        this.state={activePage : 1}

        this.renderHistory=this.renderHistory.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        let prev_key = this.state.activePage;

        this.setState({
            activePage: eventKey
        });

        if(eventKey !== prev_key){
            const parentid = PARENTID;
            const city = DTCITY;
            this.props.complaintHistory(parentid,city,(eventKey-1)*10);
        }
    }

    componentDidUpdate(){
         if(this.props.activePanel==8 && this.props.data.history.length===0){
            const parentid = PARENTID;
            const city = DTCITY;
            this.props.complaintHistory(parentid,city);
         }
     }

    renderHistory(list){
          if(list!==undefined){
            return Object.keys(list).map((value,key)=>{
                let data=list[value];
                return (<tr key={key}>
                    <td>{data.autoid}</td>
                    <td>{data.complain_type}</td>
                    <td>{data.complain_registration_date}</td>
                    <td>{data.complain_resolved_date !== '0000-00-00 00:00:00' ? data.complain_resolved_date : '-'}</td>
                    <td>{data.complain_source}</td>
                    <td>{data.resolutionflag}</td>
                </tr>) 
            })
        }  
    }

    render () {
            let {history} =this.props.data;
            let list = history.histdata ? history.histdata.data : {};
            let items = history.histdata ? Math.ceil(history.histdata.data_count / 10) : 0
            let error = history.histdata ? history.histdata.error.code : 0
            let loading = this.props.data ? this.props.data.loading : false
             return(
                <div>
                    <div className="toggleLoaderJD" style={(loading) ? {display : 'block'} : null}>
                        <div className="loaderImageJD"></div>
                        <div className="loaderText">JD</div>
                        <div className="loadingText">Loading ...</div>
                    </div>
                        <section className="panel-section">
                            { !error && items>0 ? 
                                <div className="panel-section-title">You can check your Complaint Status &amp; History below.</div> : ''
                            }
                            <div className="table-responsive" id="histDivId">
                                { !error && items>0 ? 
                                <table className="table table-bordered complaints-table">
                                    <tbody>
                                        <tr>
                                            <td className="heading">Complaint Id</td>
                                            <td className="heading">Complaint Type</td>
                                            <td className="heading">Registered Date</td>
                                            <td className="heading">Closed Date</td>
                                            <td className="heading">Complaint Source</td>
                                            <td className="heading">Status</td>
                                        </tr>
                                        { this.renderHistory(list) }
                                    </tbody>
                                </table> : <div>{ <NoData /> }</div>
                                }
                            </div>
                        </section>
                        { !this.props.data.error && items>0 ?
                            <Pagination prev next ellipsis boundaryLinks items={items} maxButtons={4} activePage={this.state.activePage} onSelect={this.handleSelect} /> : ''
                        }
                   
                </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        data: state.complaintHistory,
        activePanel: state.activePanel.panel
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({complaintHistory},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ComplaintHistory);