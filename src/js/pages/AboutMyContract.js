import React from 'react';
import { Accordion,Panel,Modal,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchContractDet ,fetchSURL, fetchEcsSiInfo ,fetchInvoiceInfo } from "../actions/contractActions"

import ContractSummary from '../components/AboutMyContract/ContractSummary';
import LeadsReport from '../components/AboutMyContract/LeadsReport';
import InvoiceInfo from '../components/AboutMyContract/InvoiceInfo';
import ECSccsi from '../components/AboutMyContract/ECSccsi';
import PaymentSummary from '../components/AboutMyContract/PaymentSummary';
import FormsnDocuments from '../components/AboutMyContract/FormsnDocuments';
import NoData from '../components/No-data';
import { PARENTID,DTCITY,DOCID } from '../../index.js'

 
class AboutMyContract extends React.Component {

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

  handleRedirect(type)
  {
      this.props.handleRedirect(type,DOCID,(scode,error)=>{ 
          let path = (type === 'EL') ? "edit" : "ecs"
          if(error === 0) 
            window.location.href = 'http://jsdl.in/EC-'+scode+'/'+path;
          else
            this.setState({ showError : true }) ;
      })
  }

  render() {
    const activeKey = this.state.activeKey;
    const collapsed = this.state.collapsed;
    const {contractInfo , invoiceInfo , ecsCcsiInfo , error, loading } = this.props.contractDetails;
    const ContractCollapsed = (activeKey == 2 && !collapsed);
    let close = () => this.setState({ showError: false});

    return (
      <div>
        <div className="content-title">All About My Contract - { this.props.companyname}</div>
        
        <div>
              <Accordion onSelect={this.handleSelect.bind(this)} >
                <Panel className={(activeKey == 2 && !collapsed) ? "panel-active" : ""} header={<span>My contract Summary - All about my contract <i className={`cms-sprite ${(activeKey == 2 && !collapsed) ? ' up-icn' : ' down-icn'}`} /></span>} eventKey="2" onSelect={ ()=>this.props.onContractDetClick(PARENTID,DTCITY,ContractCollapsed)} >
                  {(!error && contractInfo) ? <ContractSummary { ...contractInfo } /> :<NoData />} 
                </Panel>

                <Panel className={(activeKey == 1 && !collapsed) ? "panel-active" : ""} header={<span>Help me change my contract details <i className={`cms-sprite ${(activeKey == 1 && !collapsed) ? 'up-icn' : 'down-icn'}`}/></span>} eventKey="1">
                  Click <a className="pointer" onClick={()=>{ this.handleRedirect('EL')}} >here </a> to visit Edit Listing page of Contract
                </Panel>

                <Panel className={(activeKey == 9 && !collapsed) ? "panel-active" : ""} header={<span>Invoice Details <i className={`cms-sprite ${(activeKey == 9 && !collapsed) ? ' up-icn' : ' down-icn'}`} /></span>} eventKey="9" onSelect={ ()=>this.props.onInvoiceDetClick(PARENTID,DTCITY,ContractCollapsed)} >
                  { loading ? 'Loading...' : (!error && invoiceInfo && invoiceInfo.errorCode!==1 && invoiceInfo.data.invoiceAnnexure ) ?  <InvoiceInfo invoiceInfo={invoiceInfo.data.invoiceAnnexure} /> : <NoData /> }
                </Panel>  

                <Panel className={(activeKey == 3 && !collapsed) ? "panel-active" : ""} header={<span>Help me generate Leads Report For My Company <i className={`cms-sprite ${(activeKey == 3 && !collapsed) ? ' up-icn' : ' down-icn'}`} /></span>} eventKey="3" >
                  <LeadsReport />
                </Panel>

                <Panel className={(activeKey == 8 && !collapsed) ? "panel-active" : ""} header={<span>Show me my ECS/CCSI details<i className={`cms-sprite ${(activeKey == 8 && !collapsed) ? ' up-icn' : ' down-icn'}`} /></span>} eventKey="8" onSelect={ ()=>this.props.onECSccsiClick(PARENTID,DTCITY,ContractCollapsed)}>
                  {(!error && ecsCcsiInfo && contractInfo) ? <ECSccsi ecsCcsi={ecsCcsiInfo.data} { ...contractInfo.company_details } /> : <NoData /> }
                </Panel>

                <Panel className={(activeKey == 4 && !collapsed) ? "panel-active" : ""} header={<span>Stop My Contract <i className={`cms-sprite ${(activeKey == 4 && !collapsed) ? ' up-icn' : ' down-icn'}`} /></span>} eventKey="4" >
                  Click <a onClick={()=>{ this.handleRedirect('STOPECS')}} >here </a> to stop ECS
                </Panel>

                <Panel className={(activeKey == 5 && !collapsed) ? "panel-active" : ""} header={<span>Reactivate My Contract <i className={`cms-sprite ${(activeKey == 5 && !collapsed) ? ' up-icn' : ' down-icn'}`} /></span>} eventKey="5" >
                 Click <a onClick={()=>{ this.handleRedirect('ACTECS')}} >here </a> to reactivate ECS
                </Panel>

                {/*<Panel className={(activeKey == 6 && !collapsed) ? "panel-active" : ""} header={<span>Let me know my Contract Balance/Expiry Date <i className={`cms-sprite ${(activeKey == 6 && !collapsed) ? ' up-icn' : ' down-icn'}`} /></span>} eventKey="6" onSelect={ ()=>this.props.onContractDetClick(PARENTID,DTCITY,ContractCollapsed)} >
                                  {(!error && contractInfo && contractInfo.payment_details) ? <PaymentSummary paymentDet={contractInfo.payment_details} /> : <NoData /> }
                                </Panel>*/}

                {/*
                  <Panel className={(activeKey == 7 && !collapsed) ? "panel-active" : ""} header={<span>My Contract Form &amp; Other Documents <i className={`cms-sprite ${(activeKey == 7 && !collapsed) ? ' up-icn' : ' down-icn'}`} /></span>} eventKey="7" onSelect={ ()=>this.props.onContractDetClick(PARENTID,DTCITY,ContractCollapsed)} >
                    <FormsnDocuments />
                  </Panel>
                */}
              </Accordion>
        </div>

         <Modal show={(this.state.showError)} onHide={close} dialogClassName="custom-modal">
          <Modal.Header>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <p>Oops! Something went wrong. Please try again while we fix it!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
   contractDetails : state.contractDetails,
   error : state.error,
   companyname : state.contractDetails.cn 
  } 
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onContractDetClick : (pid,city,ContractCollapsed)=>{  
        if(!ContractCollapsed)
          dispatch(fetchContractDet(pid,city))
    },
    onInvoiceDetClick : (pid,city,ContractCollapsed)=>{  
         dispatch(fetchInvoiceInfo(pid,city))
    },
    handleRedirect : (type,docid,callback)=>{ 
        dispatch(fetchSURL(docid)).then((response)=>{ 
          callback(response.payload,response.error)
        }) 
    },
    onECSccsiClick : (pid,city,ContractCollapsed)=>{  
        if(!ContractCollapsed)
          dispatch(fetchEcsSiInfo(pid,city))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutMyContract)
