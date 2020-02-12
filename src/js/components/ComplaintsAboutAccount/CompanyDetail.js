import React,{ Component } from 'react';
import { DOCID,DTCITY,CNAME } from '../../../index.js'

class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(){
        let url =  "https://www.justdial.com/"+DTCITY+"/"+(this.props.cname).replace(/\ /g , "-")+"/"+DOCID.replace(/\./g , "-")+"_BZDET";
        window.location.href = url
    }
    
    render () {
        return(
            <section className="com-webs">
                <div className="nrl-tx">Visit
                    <span>
                        <a className="stars" onClick={this.handleRedirect}>{this.props.cname}</a>
                    </span>page
                </div>
                <div className="note">
                    <span className="note-tx">NOTE</span>
                    <div className="view-dtl">Please click on Company Name to view details</div>
                </div>
            </section>
        )
    }
}

export default CompanyDetail;