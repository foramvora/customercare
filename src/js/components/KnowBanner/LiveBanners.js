import React, {Component} from 'react'

export default class LiveBanners extends Component{
	render(){
		return (
			<section className="panel-section panel-body-wrap">
				<div className="panel-section-title">Please check your live banners below</div>
				<div className="panel-secondary-header">Category Sponsership Banner</div>
				<div className="table-responsive panel-table-wrap">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<img src="./images/Know-About-the-Banner01.jpg" alt="" className="img-responsive" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="panel-secondary-header">Competitor Banner</div>
				<div className="table-responsive panel-table-wrap">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<img src="./images/Know-About-the-Banner02.jpg" alt="" className="img-responsive" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="panel-section-title">Selected Categories</div>
				<div className="company-info-table category-table">
					<div className="table-responsive">
						<table className="table table-bordered table-striped">
							<thead>
								<tr>
									<th scope="row">Category Name</th>
									<th>Category Sponsorship</th>
									<th>Competitor’s Banner</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td scope="row">Guest house for coprorate</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house (&#x20B9;2501 to 3000)</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house (&#x20B9;2501 to 3000)</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite crossed-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house (&#x20B9;3001 to 4000)</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house weekly rental</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house (&#x20B9;3001 to 4000)</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house for coprorate</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house (&#x20B9;2501 to 3000)</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house (&#x20B9;2501 to 3000)</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
								<tr>
									<td scope="row">Guest house (&#x20B9;3001 to 4000)</td>
									<td><span className="cms-sprite checked-icn"></span></td>
									<td><span className="cms-sprite checked-icn"></span></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="paydtls">
					<div className="table-responsive">
						<table className="table tbl">
							<tbody>
								<tr>
									<td width="40%" className="fst-td">Upload Date</td>
									<td width="60%">11 November 2016</td>
								</tr>
								<tr>
									<td className="fst-td">Contract Balance</td>
									<td>&#x20B9; 2000</td>
								</tr>
								<tr>
									<td className="fst-td">Banner Visibility Status</td>
									<td>Disabled</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		)
	}
}