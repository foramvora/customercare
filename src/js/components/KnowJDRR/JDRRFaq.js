import React,{ Component } from 'react';
//import { bindActionCreators } from 'redux';
//import {connect} from 'react-redux';


class Faq extends Component {

	render () {

		return (
		        <section className="question-answer-section faq-section">
              <div className="question">
                <span className="question-number">Q1.</span> <span className="question-text">What type of JDRR Certificates does Justdial offer to its clients?</span>
              </div>
              <ul className="answer">
                <li>
                  <span className="list-text">
                    There are two types of certificates that are offered – Regular Size 16 inch (W) X 12 (H) inch and Big Size 24 inch (W) X 18 (H) inch
                  </span>
                </li>
              </ul>
              <div className="question">
                <span className="question-number">Q2.</span> <span className="question-text">Can I use my logo, specific font, colour &amp; design in JDRR Certificate?</span>
              </div>
              <ul className="answer">
                <li>
                  <span className="list-text">
                    We regret to inform you that the JDRR Certificate is an Auto Generated certificate which follows a standard format and editing in the standard format is not possible
                  </span>
                </li>
              </ul>
              <div className="question">
                <span className="question-number">Q3.</span> <span className="question-text">Can I change my Star Ratings in JDRR Certificate?</span>
              </div>
              <ul className="answer">
                <li>
                  <span className="list-text">
                    Star Ratings in the JDRR Certificate are based on the reviews posted by the users for your company's products/services. We capture the same reviews at the time of creation of the JDRR Certificate, thus making any manual changes to the Star Ratings in your certificate is not possible.
                  </span>
                </li>
              </ul>
              <div className="question">
                <span className="question-number">Q4.</span> <span className="question-text">Can I change my company name in the JDRR Certificate?</span>
              </div>
              <ul className="answer">
                <li>
                  <span className="list-text">
                    The company name reflecting on the JDRR Certificate will be the same as per the signed contract &amp; generated invoice. An automail will be sent to your registered Email ID to confirm the company name &amp; address, along with a sample of the JDRR Certificate. In case of any change in the company name after contract activation, you are requested to submit the Company Registration Certificate or Trade License Documents to update our database. Only then the JDRR Certificate will be updated with the requested company name.
                  </span>
                </li>
              </ul>
              <div className="question">
                <span className="question-number">Q5.</span> <span className="question-text">Can I get the JDRR Certificate delivered to my alternate address?</span>
              </div>
              <ul className="answer">
                <li>
                  <span className="list-text">
                    An automail will be sent to your registered Email ID to confirm the company name and address along with the JDRR Certificate sample. You can reply on the same mail within the next 24 hours mentioning the alternate home or office address where you want the JDRR Certificate to be delivered along with the reason for the same.
                  </span>
                </li>
              </ul>
              <div className="question">
                <span className="question-number">Q6.</span> <span className="question-text">What is the timeline for the JDRR Certificate delivery?</span>
              </div>
              <ul className="answer">
                <li>
                  <span className="list-text">
                    JDRR Certificate will be delivered to your registered address within 15 days after your contract activation. We will keep you informed at every steps for this process through Email &amp; SMS.
                  </span>
                </li>
              </ul>
              <div className="question">
                <span className="question-number">Q7.</span> <span className="question-text">Can I use the received JDRR Certificate for other business promotional activities?</span>
              </div>
              <ul className="answer">
                <li>
                  <span className="list-text">
                    The JDRR Certificate should be displayed within your office/business place only. We regret to inform you that due to copyright / legal issues, displaying / sharing / making duplicates of JDRR Certificate is restricted for other uses in print/web media &amp; outdoor publicity
                  </span>
                </li>
              </ul>
              <div className="question">
                <span className="question-number">Q8.</span> <span className="question-text">What if the client has received a broken JDRR Certificate</span>
              </div>
              <ul className="answer">
                <li>
                  <span className="list-text">
                    If the client receives a broken JDRR Certificate, then they need to raise a complaint via our customer care page.
                  </span>
                </li>
              </ul>
            </section>
		)
	}

}


export default Faq;