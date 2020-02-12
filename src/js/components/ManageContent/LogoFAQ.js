import React, {Component} from 'react'

export default class LogoFAQ extends Component{
	render(){
		return (
				<div className="tab-pane active" id="2">
          			<section className="question-answer-section faq-section">
							<div className="question">
								<span className="question-number">Q1.</span> <span className="question-text">How can I upload a Logo for my JD Profile?</span>
							</div>
							<ul className="answer">
								<li>
									<span className="list-text">
										Kindly visit your company profile page and click on 	<span className="bold-text">'Edit This'.</span>
									</span>
								</li>
								<li>
									<span className="list-text">
										Click on <span className="bold-text">'Own This'</span> &amp; complete the verification process.
									</span>
								</li>
								<li>
									<span className="list-text">
										Select <span className="bold-text">'Logo'</span> Tab.
									</span>
								</li>
								<li>
									<span className="list-text">
										Click <span className="bold-text">'Add Logo'</span> &amp; Browse Logo from your system and click 'Submit'.
									</span>
								</li>

							</ul>
							<div className="ps-note">
								[The logo uploaded will take 24 hours (max) to reflect on our website, post a quality check. Justdial has the rights to remove any photo/s that does not meet the guidelines of our quality check]
							</div>
							<div className="question">
								<span className="question-number">Q2.</span> <span className="question-text">What is the Logo type &amp; dimension supported by Justdial?</span>
							</div>
							<ul className="answer">
								<li>
									<span className="list-text">
										<span className="bold-text">Dimension:</span>143 pix (Width) X 96 Pix (Height).
										[In case of bigger dimension logo, our moderation team will re-size it according to the specifications]
									</span>
								</li>
								<li>
									<span className="list-text">
										<span className="bold-text">Format:</span> JPG &amp; GIF.</span>
									
								</li>
								<li>
									<span className="list-text">
										<span className="bold-text">File Size:</span> 5 MB (Max).</span>
									
								</li>
								<li>
									<span className="list-text">
										<span className="bold-text">Type:</span>The logo should belong specifically to your company and not be that of a random brand. You can upload only one logo.</span>
									
								</li>
							</ul>
							<div className="question">
								<span className="question-number">Q3.</span> <span className="question-text">How can I Delete/Replace Logo through JD Profile</span>
							</div>
							<ul className="answer">
								<li>
									<span className="list-text">
										Kindly visit your company profile page and click on <span className="bold-text">'Edit This'.</span>
									</span>
								</li>
								<li>
									<span className="list-text">Click on <span className="bold-text">'Own This'</span> &amp; complete verification process</span>
								</li>
								<li>
									<span className="list-text">Select<span className="bold-text"> 'Logo'</span> Tab.</span>
								</li>
								<li>
									<span className="list-text">Click on <span className="bold-text">'Delete'</span> &amp; 'Submit'.</span>
								</li>
								<li>
									<span className="list-text">You can now upload your new Logo</span>
								</li>
							</ul>
							<div className="question">
								<span className="question-number">Q4.</span> <span className="question-text">How to upload logo if logo is not in correct format?</span>
							</div>
							<ul className="answer">
								<li>
									<span className="list-text">
										If the logo which is in png, pdf, gif, doc, excel, ppt, psd, cdr, etc. it has to be converted to jpg format to proceed and upload it
									</span>
								</li>
							</ul>
						</section>
						<section className="dos-and-donts-section panel-section">
							<div className="panel-section-title">Do's and Dont's</div>
							<div className="second-title">Do's</div>
							<ul className="panel-list custom-list">
								<li><span>The logo needs to be specifically of the company and not the dealership company. (Ex. HCL dealer cannot use HCL logo).</span></li>
								<li><span>Logo should be clear to rea</span></li>
							</ul>
							<div className="second-title">Dont's</div>
							<ul className="panel-list custom-list">
								<li><span>A company cannot upload the dealership company's logo in its profile.</span></li>
								<li><span>Logo should not be stretched vertically or horizontally.</span></li>
								<li><span>Do not upload the logos of two companies together. (Ex. Blue Dart + DHL).</span></li>
								<li><span>Do not upload a blur logo.</span></li>
							</ul>
						</section>
					</div>				
		)
	}
}