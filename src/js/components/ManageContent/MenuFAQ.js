import React, {Component} from 'react'

export default class MenuFAQ extends Component{
	render(){
		return (
				<div className="tab-pane active" id="4">
	          		<section className="question-answer-section faq-section">
							<div className="question">
								<span className="question-number">Q1.</span> <span className="question-text">How can I upload my Menu Card on my JD Profile?</span>
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
										Select <span className="bold-text">'Menu'</span> Tab.
									</span>
								</li>
								<li>
									<span className="list-text">
										Click <span className="bold-text">'Add Menus'</span> Menus' &amp; browse the menu pages one by one from your system and click 'Submit'.
									</span>
								</li>
							</ul>
							<div className="ps-note">
								[Menu Content uploaded will be reflected in 24 working hours (max) on our website after quality checking. During quality check Justdial have rights to remove the menu, if it does not meet the guidelines.]
							</div>
							<div className="question">
								<span className="question-number">Q2.</span> <span className="question-text">What are the types &amp; dimensions of the Menu that are supported by Justdial?</span>
							</div>
							<ul className="answer">
								<li>
									<span className="list-text">
										<span className="bold-text">Duration:</span> 800 pix (Width) X 1500 pix (Height) max.
									</span>
								</li>
								<li>
									<span className="list-text">
										<span className="bold-text">Format:</span> JPG &amp; GIF.
									</span>
								</li>
								<li>
									<span className="list-text">
										<span className="bold-text">File Size:</span> 5 MB (Max).</span>
									
								</li>
								<li>
									<span className="list-text">
										<span className="bold-text">Type:</span>Menu pages should be of same restaurant branch with the items and prices clearly visible.
									</span>
								</li>
							</ul>
							<div className="question">
								<span className="question-number">Q3.</span> <span className="question-text">How much time does it take to reflect the digital Menu?</span>
							</div>
							<ul className="answer">
								<li>
									<span className="list-text">
										It takes 72 hours (max) to digitize and reflect the menu on the website. When digitizing the menu items and prices, images will be removed in the process.
									</span>
								</li>
							</ul>
							<div className="question">
								<span className="question-number">Q4.</span> <span className="question-text">How can I delete/replace the Menu from my JD Profile?</span>
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
										Select <span className="bold-text">'Menu'</span> Tab.
									</span>
								</li>
								<li>
									<span className="list-text">
										Click on <span className="bold-text">'Delete'</span> &amp; 'Submit'.
									</span>
								</li>
								<li>
									<span className="list-text">
										You can now upload your new Menu Card.
									</span>
								</li>
							</ul>
						</section>
						<section className="dos-and-donts-section panel-section">
							<div className="panel-section-title">Do's and Dont's</div>
							<div className="second-title">Do's</div>
							<ul className="panel-list custom-list">
								<li><span>The menu of the same company and branch must be uploaded.</span></li>
								<li><span>For multiple branches of the same restaurant listed on the website, you must upload the menu cards for each listing.</span></li>
								<li><span>The text on the menu card should be clearly visible.</span></li>
								<li><span>Please ensure that the dimensions of every page is as per the mentioned specifics so that it can be downloaded easily and read properly.</span></li>
							</ul>
							<div className="second-title">Dont's</div>
							<ul className="panel-list custom-list">
								<li><span>The text on the menu should not be blur.</span></li>
								<li><span>Avoid uploading duplicate menu pages.</span></li>
								<li><span>To upload a fresh menu, firstly deactivate the already uploaded menu and proceed to upload the new one.</span></li>
								<li><span>Refrain from uploading the menu of another establishment.</span></li>
							</ul>
						</section>
					</div>
		)
	}
}
