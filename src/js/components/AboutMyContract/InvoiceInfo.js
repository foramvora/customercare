import React,{Component} from 'react' 
import { connect } from 'react-redux'
import { fetchInvoicePdf  } from "../../actions/contractActions"
import { PARENTID,DTCITY,DOCID } from '../../../index.js'

class InvoiceInfo extends React.Component                 
{
    constructor(props){
      super(props);
    }

    render(){ 
      const { invoiceInfo } = this.props;
      let invoices = Object.keys(invoiceInfo).map((k) => { return { ...invoiceInfo[k] , key : k } });
      return( 
                <div className="panel-body-wrap">  
                    <div className="panel-secondary-header">Summary of Invoices</div>
                    <div className="table-responsive panel-table-wrap invoice-table">
                      <table className="table">
                        <tbody>
                          {
                            invoices.map((invoiceItem,k)=>{ 
                              return(
                                  <tr key={invoiceItem.key}>
                                    <td>
                                      <span className="pull-left"><i>Invoice No. {k+1} | {invoiceItem.approved_date[0]}</i></span>
                                      <span className="pull-right">
                                        <a className="btn btn-default blue-btn" onClick={()=>this.props.handleInvoiceClick(invoiceItem.version[0],invoiceItem.approved_date[0])} role="button"> Download</a>
                                      </span>
                                    </td>
                                  </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                </div>    
      )              
    }                
}                    

const mapStateToProps = (state)=>{
  return {
   error : state.error,
  } 
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleInvoiceClick : (version,date)=>{  
        dispatch(fetchInvoicePdf(PARENTID,DTCITY,version,date))
    },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InvoiceInfo)