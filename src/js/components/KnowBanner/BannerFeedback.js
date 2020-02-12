import React, {Component} from 'react'
import Feedback from '../Feedback'

export default class BannerFeedback extends Component{
	render(){
		return (
			<div>
				<Feedback type="213||Customer feedback- Banner" title={'Kindly share your feedback about the banner design. This important to serve you better.'} />
			</div>
		)
	}
}