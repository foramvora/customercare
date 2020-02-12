import React, {Component} from 'react'

export default class VideoFAQ extends Component{
	render(){
		return (
			<div className="tab-pane active" id="3">
	      		<section className="question-answer-section faq-section">
						<div className="question">
							<span className="question-number">Q1.</span> <span className="question-text">How can I upload Video through my JD Profile?</span>
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
									Select <span className="bold-text">'Video'</span> Tab.
								</span>
							</li>
							<li>
								<span className="list-text">
									Click <span className="bold-text">'Add Video'</span> &amp; select the desired video clip from your system and click 'Submit'.
								</span>
							</li>

						</ul>
						<div className="ps-note">
							[Video Content uploaded will be reflected in 24 working hours (max) on our website after quality checking. During quality check Justdial have rights to remove the Video, if it does not meet the guidelines.]
						</div>
						<div className="question">
							<span className="question-number">Q2.</span> <span className="question-text">What is the Video duration, file size &amp; format supported by Justdial?</span>
						</div>
						<ul className="answer">
							<li>
								<span className="list-text">
									<span className="bold-text">Duration:</span> 30 sec. (min) to 10 min. (max).
								</span>
							</li>
							<li>
								<span className="list-text">
									<span className="bold-text">Format:</span> MP4, MPEG, FLV, WMV, AVI.
								</span>
							</li>
							<li>
								<span className="list-text">
									<span className="bold-text">Minimum Dimension:</span> 282 pix (Width) X 200 pix (Height)
								</span>
							</li>
							<li>
								<span className="list-text">
									<span className="bold-text">File Size:</span> 10 MB (Max).</span>
								
							</li>
							<li>
								<span className="list-text">
									<span className="bold-text">Type:</span>Miniature of a TV Ad. Professionally edited video should contain company name,address, voice-over, music, readable text &amp; original content. Video should promote the same business as per the categories booked with us.
								</span>
							</li>
							<li>
								<span className="list-text">
									Only one video can be uploaded currently.
								</span>
							</li>
						</ul>
						<div className="question">
							<span className="question-number">Q3.</span> <span className="question-text">How can I Delete/Replace Video through JD Profile?</span>
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
								<span className="list-text">Select <span className="bold-text">'Video'</span> Tab.</span>
							</li>
							<li>
								<span className="list-text">Click on <span className="bold-text">'Delete'</span> &amp; 'Submit'.</span>
							</li>
							<li>
								<span className="list-text">You can now upload your new Video.</span>
							</li>
						</ul>
						<div className="question">
							<span className="question-number">Q4.</span> <span className="question-text">How to upload logo if video is not in correct format?</span>
						</div>
						<ul className="answer">
							<li>
								<span className="list-text">
									Convert the videos from formats like mov, 3gp, 3g2, m4v, ogv, acc etc. to formats like mp4, mpeg, avi, flv, wmv. and proceed to upload it in the module.
								</span>
							</li>
						</ul>
					</section>
					<section className="dos-and-donts-section panel-section">
						<div className="panel-section-title">Do's and Dont's</div>
						<div className="second-title">Do's</div>
						<ul className="panel-list custom-list">
							<li><span>Video must be according to company business only.</span></li>
							<li><span>The text on the video needs to be clear and in accordance to the company profile.</span></li>
							<li><span>Each video should have music or voice over,</span></li>
							<li><span>The video duration should be of 5 minutes max.</span></li>
						</ul>
						<div className="second-title">Dont's</div>
						<ul className="panel-list custom-list">
							<li><span>Objectionable and copyright video will not be allowed.</span></li>
							<li><span>The videos should not be shaky, blurred, shot in dim light and noisy.</span></li>
							<li><span>Videos with incorrect orientation will not be allowed.</span></li>
							<li><span>Self made videos or videos with only images (copyright images or Google images) will not be accepted.</span></li>
						</ul>
					</section>
			</div>		
		)
	}
}