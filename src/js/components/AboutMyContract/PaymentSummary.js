import React from 'react';
import PaymentDetails from './PaymentDetails';
 
export default class PaymentSummary extends React.Component {

  render() {
    const { paymentDet } = this.props;
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    });

    return (            
            <div className="panel-body-wrap">

                  {Object.keys(paymentDet).map((v,key)=>{
                    return (
                      <PaymentDetails key={key} paymentDet={paymentDet[v]} header={v} formatter={formatter} />
                      )
                  })}
            </div>
        )
    }
}