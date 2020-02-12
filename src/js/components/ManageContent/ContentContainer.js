import React, {Component} from 'react'
import Gallery from "./Gallery" 
import {Modal, Button } from 'react-bootstrap'
import NoData from '../No-data';

export default class ContentContainer extends Component{
	
	constructor(props){
		super(props)
		this.state={
			showModal : false,
			clickedKey : null
		}
		
		this.open = this.open.bind(this)
		this.close = this.close.bind(this)
	}

	open(key) {
	    this.setState({ showModal: true ,clickedKey : key});
	}

	close() {
    	this.setState({ showModal: false ,clickedKey : null});
  	}

	render(){
		let {data , loading} = this.props;
		let type = this.props.selectedValue;
		let clickedKey = this.state.clickedKey;

		if(type === 'default')
			return <div className="placeholder-text">Photos, Logo, Video & Menu should be displayed here (Approved + Rejected + Deleted)</div>
		else
			return (
				<div className="thumbs-container">
						<div className="toggleLoaderJD" style={(loading) ? {display : 'block'} : null}>
							<div className="loaderImageJD"></div>
							<div className="loaderText">JD</div>
							<div className="loadingText">Loading ...</div>
						</div>
						{
						  data!==null && data.length>0 ? 
							data.map((dataItem,i)=>{ 
								let tmbImagePath = dataItem.thumbImage;
								let approvedClass = (dataItem.approved === '0') ? 'crossed-icn' : 'checked-icn';
								return (
									<div className="thumbs" key={i} onClick={()=>{this.open(i)}}>
										<div className="thumbs-img">
											<img src={tmbImagePath} alt="Thumbnail Image" />
										</div>
										<div className="thumbs-date">
											{dataItem.create_date}
										</div>
										<span className={`cms-sprite notification-icon ${approvedClass}`}></span>
									</div>		
								)
						 	})
							
						  : <NoData />
						}
						<div className="thumbs dn">
							<div className="thumbs-img more-images">
								<div className="more-quant">+200</div>
								<div className="view-more">View More</div>
							</div>
						</div>

						<Modal show={this.state.showModal} onHide={this.close}>
				          <Modal.Header closeButton>
				            <Modal.Title>{this.props.selectedText}</Modal.Title>
				          </Modal.Header>
				          <Modal.Body>
				        	<Gallery clickedKey={clickedKey} data={data} type={type} />   
				          </Modal.Body>
				        </Modal>			       
				</div>		
			)
	}
}