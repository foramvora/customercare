import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Modal,Button } from 'react-bootstrap';

import { fetchSURL } from "../../actions/contractActions"
import { DOCID } from '../../../index.js'

class LeadsComplaint extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "1",
            showError : false
        }
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleSelectedOption(event){
        this.setState({value: event.target.value});
    }

    handleRedirect(type)
    {
        this.props.handleRedirect(type,DOCID,(scode,error)=>{ 
            let path = 'edit';
            if(error === 0) 
              window.location.href = 'http://jsdl.in/EC-'+scode+'/'+path
            else
              this.setState({ showError : true }) ;
        })
    }
    
    render () {
            let close = () => this.setState({ showError: false});

            return(
                <div>
                    <section className="panel-section">
                        <div className="panel-section-title">Platinum / Diamond / Gold Listing</div>
                        <div className="panel-form blue-form">
                            <form>
                                <div className="form-group">
                                    <select onChange={this.handleSelectedOption.bind(this)} value={this.state.value} className="form-control selectpicker" id="selcomplaints" name="selstartmin">
                                            <option value={1}>I am not getting Enquiries</option>
                                            <option value={2}>I am getting less Enquiries, not able to convert</option>
                                            <option value={3}>I am getting Irrelevant Enquiries</option>
                                            <option value={4}>I am not getting SMS &amp; Email intimation</option>
                                            <option value={5}>Why I am getting SMS message late ?</option>
                                            <option value={6}>I am getting out of area leads</option>
                                            <option value={7}>Not getting JD verified stamp in my contract</option>
                                            <option value={8}>How do i get my reviews and rating deleted</option>
                                            <option value={9}>I am getting Incomplete Enquiries from Website, not able to convert</option>
                                    </select>
                                </div>
                            </form>
                        </div>{/*end of comp-listing*/}
                        <div className={`enquiry-wrapper ${this.state.value==="1"?'db':'dn'}`}>
                            <div className="enquiry-title">I am not getting Enquiries</div>
                            <div className="semi-bold-text">The flow of leads is purely based on the type of contract, contract value and market conditions of demand and supply.
                                <br />
                                <br />What you need to do it go through your contact detail &amp; categories selected in your contract is correct or if any addition/deletion is required.
                                <br />
                                <br />Check Phone Number &amp; address mentioned in your contract.
                                <br />
                                <br />Check Contract budget value. Speak to your sales representative for more details about budget value.</div>
                            <br />
                            <div className="semi-bold-text">To do this :</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    Click on <a className="pointer" onClick={()=>{ this.handleRedirect('EL')}} >'Edit this'</a> link in your company profile page.
                                </li>
                                <li>
                                    If everything is fine with your contract and still if your answer has not been found here please <a onClick={this.props.action}>click here</a> to register your request.
                                </li>
                            </ul>
                        </div>{/*end of enqui-list*/}
                        <div className={`enquiry-wrapper ${this.state.value=="2"?'db':'dn'}`}>
                            <div className="enquiry-title">I am getting less Enquiries, not able to convert</div>
                            <div className="semi-bold-text">The flow of leads is purely based on the type of contract, contract value and market conditions of demand and supply.
                                <br />
                                <br />What you need to do it go through your contact detail &amp; categories selected in your contract is correct or if any addition/deletion is required.
                                <br />
                                <br />Check Phone Number &amp; address mentioned in your contract.
                                <br />
                                <br />Check Contract budget value. Speak to your sales representative for more details about budget value.
                            </div>
                            <br />
                            <div className="semi-bold-text">To do this :</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    Click on <a className="pointer" onClick={()=>{ this.handleRedirect('EL')}} >'Edit this'</a> link in your company profile page.
                                </li>
                                <li>
                                    If everything is fine with your contract and still if your answer has not been found here please <a onClick={this.props.action}>click here</a> to register your request.
                                </li>
                            </ul>
                        </div>{/*end of enqui-list*/}
                        <div className={`enquiry-wrapper ${this.state.value==="3"?'db':'dn'}`}>
                            <div className="enquiry-title">I am getting irrelevant enquiries</div>
                            <div className="semi-bold-text">Enquiries generated for your company is purely based on the categories selected in your contract.
                                <br />
                                <br />What you need to do it go through your contact detail &amp; categories selected in your contract is correct or if any addition/deletion is required.
                                <br />
                                <br />Check Phone Number &amp; address mentioned in your contract.
                            </div>
                            <br />
                            <div className="semi-bold-text">To do this :</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    Click on <a className="pointer" onClick={()=>{ this.handleRedirect('EL')}} >'Edit this'</a> link in your company profile page.
                                </li>
                                <li>
                                    If everything is fine with your contract and still if your answer has not been found here please <a onClick={this.props.action}>click here</a> to register your request.
                                </li>
                            </ul>
                        </div>{/*end of enqui-list*/}
                        <div className={`enquiry-wrapper ${this.state.value==="4"?'db':'dn'}`}>
                            <div className="enquiry-title">I am not getting SMS &amp; Email intimation</div>
                            <div className="semi-bold-text">Check your registered SMS mobile number and Email ID present in your contract.</div>
                            <br />
                            <div className="semi-bold-text">To do this :</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    Click on <a className="pointer" onClick={()=>{ this.handleRedirect('EL')}} >'Edit this'</a> link in your company profile page incase registered SMS/Email present in your contract is incorrect.
                                </li>
                                <li>
                                    If SMS/Email is correct.
                                </li>
                                <li>
                                    Then kindly check your Email spam box and SMS(Screen message folder).
                                </li>
                                <li>
                                    If everything is fine with your contract and still if your answer has not been found here please <a onClick={this.props.action}>click here</a> to register your request.
                                </li>
                            </ul>
                        </div>{/*end of enqui-list*/}
                        <div className={`enquiry-wrapper ${this.state.value==="5"?'db':'dn'}`}>
                            <div className="enquiry-title">Why I am getting SMS message late ?</div>
                            <div className="semi-bold-text">Messages can sometimes become delayed within a mobile operator network, particularly at peak times when they deal with heavy traffic</div>
                            <br />
                            <div className="semi-bold-text">There are many other possible reasons that could cause an SMS message to be delayed including:</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    Handset out of coverage temporarily
                                </li>
                                <li>
                                    Handset switched off
                                </li>
                                <li>
                                    Handset memory full
                                </li>
                                <li>
                                    Source or destination network congestion
                                </li>
                                <li>
                                    Signalling or communication errors
                                </li>
                            </ul>
                            <br />
                            <div className="semi-bold-text">If your message has still not delivered after 10 minutes, please check the following:</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    Is the registered number present in your contract is correct ?
                                </li>
                                <li>
                                    Is the handset switched on and receiving GSM signal?
                                </li>
                                <li>
                                    If everything is fine with your contract and still if your answer has not been found here please <a onClick={this.props.action}>click here</a> to register your request.
                                </li>
                            </ul>
                        </div>{/*end of enqui-list*/}
                        <div className={`enquiry-wrapper ${this.state.value==="6"?'db':'dn'}`}>
                            <div className="enquiry-title">I am getting out of area leads</div>
                            <div className="semi-bold-text">Enquiries generated for your company is purely based on the categories search type &amp; pincode selected in your contract.
                                <br />
                                <br />What you need to do it go through all the categories present in your contract &amp; if all the categories present in your contract is relevant to your business or not.</div>
                            <br />
                            <div className="semi-bold-text">To do this:</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    Click on <a className="pointer" onClick={()=>{ this.handleRedirect('EL')}} >'Edit this'</a> link in your company profile page.
                                </li>
                                <li>
                                    Check the 'categories search type' whether it is 'zonal' or 'all area' category i e. If you want enquiries from near by areas you can take only zonal categories but if you want enquiries from far areas than you can take all area categories.
                                </li>
                                <li>
                                    If everything is fine with your contract and still if your answer has not been found here please <a onClick={this.props.action}>click here</a> to register your request.
                                </li>
                            </ul>
                        </div>{/*end of enqui-list*/}
                        <div className={`enquiry-wrapper ${this.state.value==="7"?'db':'dn'}`}>
                            <div className="enquiry-title">Not getting JD verified stamp in my contract</div>
                            <div className="semi-bold-text">JD verified stamp will be visible only in Paid Sponsored Listings.
                                <br />
                                <br />Check if your contract balance is greater than zero.</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    If 'yes' JD verified stamp will appear.
                                </li>
                                <li>
                                    If 'no' JD verified stamp will not appear.
                                </li>
                                <li>
                                    If everything is fine with your contract and still if your answer has not been found here please <a onClick={this.props.action}>click here</a> to register your request.
                                </li>
                            </ul>
                        </div>{/*end of enqui-list*/}
                        <div className={`enquiry-wrapper ${this.state.value==="8"?'db':'dn'}`}>
                            <div className="enquiry-title">How do i get my reviews and rating deleted</div>
                            <div className="semi-bold-text">Reviews and ratings are public opinion about your company given by the user, so it can be positive as well as negative.</div>
                            <ul className="rectify-steps-list">
                                <li>
                                    In case of negetive reviews deletion speak to user once and get their issue addressed.
                                </li>
                                <li>
                                    After providing solution to user, write to our team to get the same deativated.
                                </li>
                                <li>
                                    If everything is fine and still if your answer has not been found here please <a onClick={this.props.action}>click here</a> to register your request.
                                </li>
                            </ul>
                        </div>{/*end of enqui-list*/}
                        <div className={`enquiry-wrapper ${this.state.value==="9"?'db':'dn'}`}>
                            <div className="enquiry-title">I am getting Incomplete Enquiries from Website, not able to convert</div>
                            <div className="semi-bold-text">Benefits of Leads Generated through Web/APP/WAP - </div>
                            <ul className="rectify-steps-list">
                                <li>
                                    Our majority users prefer using our App or Website for their requirements as it is more convenient for them.
                                </li>
                                <li>
                                    Anyone who would search for your category details or for company details on Just Dial web/app/wap, we are providing their details to you via email/sms.
                                </li>
                                <li>
                                    You may contact them via email id provided for user convenience.The user prefers to be reached via email only.
                                </li>
                                <li>
                                    These leads have no connections with your existing leads &amp; shall be unaffected. What enquiries you are receiving is completely additional business enquiries for you to increase your business.
                                </li>
                                <li>
                                    We are sure that you would have noticed an sudden increase in lead volume in last few days &amp; it has purely happened because of the new feature/implementation done for your benefits.
                                </li>
                            </ul>
                            <br />
                            <br />
                            <div className="semi-bold-text">Still, you have any query which is not answered, Please <a onClick={this.props.action}>click here</a> to register your request.</div>
                        </div>
                    </section>

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

const mapDispatchToProps = (dispatch) => {
  return {
    handleRedirect : (type,docid,callback)=>{ 
        dispatch(fetchSURL(docid)).then((response)=>{ 
          callback(response.payload,response.error)
        }) 
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeadsComplaint)
