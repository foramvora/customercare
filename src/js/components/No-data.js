import React from 'react';

export default class NoData extends React.Component {

	render() {
	    return (
				<div role="tabpanel" className= "feedback-table" id="rate-review" aria-labelledby="rate-review-tab">
				    <div className="compay-name">
				      Sorry! No data Available
				    </div>
				</div>
		)
	}
}