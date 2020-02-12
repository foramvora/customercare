import React, {Component} from 'react'

export default class CategoryBanner extends Component{
	render(){
		const {name,data} = this.props;
		const { cat_data , uploadDt , banner_live} = data; 
		return (
			<section className="panel-section panel-body-wrap">
				<div className="panel-section-title">Please check your live banners below</div>
				<div className="panel-secondary-header">{name} Sponsership Banner</div>
				<div className="table-responsive panel-table-wrap">
					<table className="table" key={name}>
						<tbody>
							<tr>
								<td>
									<img src={data['banner_url']} alt="" className="img-responsive" />
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
									<th>{name} Sponsorship</th>
								</tr>
							</thead>
							<tbody>
							{
								cat_data!==undefined ? 
									cat_data.data.map((cat)=>{
										return (
											<tr key={cat.catid}>
												<td scope="row">{cat.cat_name}</td>
												<td><span className="cms-sprite checked-icn"></span></td>
											</tr>
										)
									})
								:   ''
							}	
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
									<td width="60%">{uploadDt}</td>
								</tr>
								<tr>
									<td className="fst-td">Contract Balance</td>
									<td>&#x20B9; --</td>
								</tr>
								<tr>
									<td className="fst-td">Banner Visibility Status</td>
									<td>{(banner_live==='1') ? "Enabled" : "Disabled"}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		)
	}
}