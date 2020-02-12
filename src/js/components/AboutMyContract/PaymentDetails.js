import React,{Component} from 'react' 

export default class PaymentDetails extends React.Component                 
{
    render(){
      const {paymentDet , formatter ,header} = this.props;
      return(
              <div>
              <div className="panel-secondary-header">{header}</div>
              <div className="table-responsive panel-table-wrap">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="text-blue">
                        <span className="pull-left">Start Date:<br className="visible-xs-block" /> { paymentDet['Start_Date'] != undefined && paymentDet['Start_Date'] != null && paymentDet['Start_Date'] != '' ? paymentDet['Start_Date'].split(' ')[0] : '--' }</span>
                        <span className="pull-right">End Date:<br className="visible-xs-block" /> { paymentDet['End_Date'] != undefined && paymentDet['End_Date'] != null && paymentDet['End_Date'] != '' ? paymentDet['End_Date'].split(' ')[0] : '--' }</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Amount</th>
                    </tr>
                    <tr>
                      <td>
                        <p><label>Total Amount</label> { formatter.format(paymentDet['Total_Amount']) }</p>
                        <p><label>Used Amount</label> { formatter.format(paymentDet['Used_Amount']) }</p>
                        <p><label>Balance Amount</label> { formatter.format(paymentDet['Balance_Amount']) }</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
      )              
    }                
}                    