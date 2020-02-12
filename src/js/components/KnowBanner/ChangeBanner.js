import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

import { updateBannerData,closeBannerModal } from  '../../actions/bannerActions';
import { PARENTID,DOCID,DTCITY } from '../../../index.js';


class ChangeBanner extends Component{

	constructor(props) {
		super(props);
		this.state={
			bannerText:'',
			formErrors: {bannerText: ''},
			textValid: false,
			thumbnail: [],
			formValid: false,
			typeError: '',
			imageModal: true,
			closeModal : false,
			errorModal : false
		}
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeUpload = this.changeUpload.bind(this);
        this.renderThumbnail = this.renderThumbnail.bind(this);
        this.reset = this.reset.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.removeThumb = this.removeThumb.bind(this);
	}

	handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
    }

    changeUpload(index){

    	 var files = document.getElementById("file_upload_data").files;
    	 var self=this;
		 var type_error = '';
		 var dataSrc=[];
		 var file_name=[];
		 var file_type=[];
		 var file_superSet = [];
		 //setTimeout(()=>{self.setState({"thumbnail":dataSrc})},1);
		 var j=0;

		for (var i = 0; i < files.length; i++)
		{
			file_superSet.push(files[i]);
			file_name.push(files[i].name);
			file_type.push(files[i].type);
 		 	
 		 	/*var reader = new FileReader();
		 	reader.addEventListener("load", function (event,index) {
				var picFile = event.target;
				dataSrc.push({url:picFile.result, filename: file_name[j], filetype: file_type[j]}); 
				j++;
         	});
 			reader.readAsDataURL(files[i]); */

 			if(files[i].type == 'image/jpeg' || files[i].type == 'image/jpg' || files[i].type == 'image/png'){
 				this.setState({formValid : true});
 				this.setState({typeError:''});
			}else{
				this.setState({formValid : false});
				this.setState({imageModal : false});
				type_error += 'Invalid Image Type '+files[i].name+'; ';
				this.setState({typeError:type_error});
			}

			var prom=new Promise(function (resolve, reject) {
				let reader = new FileReader();

				reader.addEventListener("load", function (event,index) {
					resolve(reader);
					var picFile = event.target;
					dataSrc.push({url:picFile.result, filename: file_name[j], filetype: file_type[j]}); 
				});
				reader.onerror = reject;
				reader.readAsDataURL(files[i]);
 			}).then(function(){
 				self.setState({ "thumbnail":[...self.state.thumbnail,...dataSrc],
							"file_superSet":[...self.state.file_superSet,...file_superSet]}
						)
 				dataSrc=[];
 				j++;
 			});
		}

		if(type_error){
			return false;
		}
    }
    reset(){
    	//document.getElementById("bannerForm").reset();
    	var files = document.getElementById("file_upload_data").files; //Fetch previous selected file
    	this.setState({"file_superSet": this.state.file_superSet !== undefined ? this.state.file_superSet : files}); //set of all the files selected in multiple instances
    }

    handleSubmit(event) {
    	let emoji_charcode = '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])';
        let bnrText = this.state.bannerText;
        bnrText = bnrText.replace(new RegExp(emoji_charcode, 'g'), ''); //Drop emojis from textarea

		var formData = new FormData();
		formData.append('action', 'updateBannerDetails');
		/********banner text api**********/
		formData.append('parentId', PARENTID);
		formData.append('campaignId', '5,13');
		formData.append('bannerText', bnrText);
		/*****************/
		/********banner image api**********/
		formData.append('docid', DOCID);
		formData.append('city', DTCITY);
		formData.append('upload_by', 'vendor');
		formData.append('insta', '0');
		formData.append('source', 'cbnr');
		formData.append('type', 'cbnr');
		/*****************/
 		//var files1 = document.getElementById("file_upload_data").files;
 		var files = this.state.file_superSet;
 		var filename=this.state.thumbnail.map(data =>  data.filename);

 		for (var i = 0; i < files.length; i++)
		{
			if(filename.indexOf(files[i].name)!=-1){
			   formData.append('file_upload_data[]',files[i]);
			}
		}
	   /*for (var key of formData.entries()) {		//check the files being selected
	       	console.log(key[0] + ', ' + key[1]);
	   }*/
  		this.props.updateBannerData(formData);
  		this.setState({errorModal:false})
  		this.setState({closeModal:false})
  		this.setState({typeError:''})
     }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let textValid = this.state.textValid;

        switch(fieldName) {
        	case 'bannerText':
	            textValid = true ;
	            fieldValidationErrors.bannerText = textValid ? '': ' should be atleast 10 characters';
	            break;
	        default:
	            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        textValid: textValid
                      }, this.validateForm);
        
    }

    validateForm() {
      this.setState({formValid: this.state.textValid});
    }

    errorClass(error) {
         return(error.length === 0 ? '' : 'has-error');
     }

	renderThumbnail(){
		 return this.state.thumbnail.map((data,index)=>{
		 	return(
				<div key={index} className="thumbnail-items">
					<div className="thumbnail-name">{data.filename}</div>
					<div className="thumbnail-img">
						<img   src={data.url} alt="" />
					</div>
					<span className="cms-sprite close-icn" onClick={() => this.removeThumb(index)}></span>
				</div>
			   )
		 }) 
	}

	removeThumb(index){
		this.state.thumbnail.splice(index,1);
		this.setState({thumbnail:this.state.thumbnail});

		var files = this.state.thumbnail;
		var type_error = '';
		if(files.length == 0 && this.state.bannerText === ''){
			this.setState({formValid : false});
		}
		else{
			for (var i = 0; i < files.length; i++)
			{
	 			if(files[i].filetype == 'image/jpeg' || files[i].filetype == 'image/jpg' || files[i].filetype == 'image/png'){
	 				this.setState({formValid : true});
	 				this.setState({typeError:''});
				}else{
					this.setState({formValid : false});
					this.setState({imageModal : false});
					type_error += 'Invalid Image Type '+files[i].filename+'; ';
					this.setState({typeError:type_error});
				}
			}
		}
	}

	hideModal(type){
		if(type === 1){
			this.setState({imageModal:true})
		}else{
			this.props.closeBannerModal()
			this.setState({bannerText:''})
			this.setState({thumbnail:[]})
			this.setState({file_superSet:[]})
			this.setState({formValid:false})
			this.setState({closeModal:true})
			this.setState({errorModal:true})
		}
	}

	render(){
		let {modalStatus,loading} = this.props;
		let submit = loading === true ? '' : 'Submit'
		let loader_cls = loading === true ? 'loadSubmt' : ''
		let status = this.props.bannerStatus;
		let bannerImage_status = status!==null && status.bannerImage !== undefined  ? status.bannerImage.error_code : '';
		let bannerText_status = status!==null && status.bannerText !== undefined  ? status.bannerText.error : '';

		let errorModal = ((bannerImage_status === 1 || bannerText_status === 1) && this.state.errorModal === false) ? true : false;
		errorModal = (errorModal === true && modalStatus === 1) ? false : errorModal;
		
		let modalOpen = ((bannerImage_status === 0 || bannerText_status === 0) && this.state.closeModal === false) ? true : false;
		modalOpen = ((modalOpen === true && modalStatus === 1 )|| errorModal === true) ? false : modalOpen;

		return (
			<div className="panel-body panel-section">
					<div className="panel-section-title">Not happy with the current live banner design?</div>
					<div className="panel-secondary-title-blue">Want to incorporate customised text for your banner? Any instruction for your banner design</div>
					<form   encType="multipart/form-data" method="post" name="bannerForm" id="bannerForm">
						<div className="form-container custom-form">
							<div className={`form-group ${this.errorClass(this.state.formErrors.bannerText)}`}>
								<label htmlFor="">Text for your banner</label>
								<textarea name="bannerText" className="form-control" onBlur={this.handleChange} value={this.state.bannerText} onChange={this.handleChange} placeholder="Your text for banner"></textarea>
								<span id="err-complnttype" className="jerr">{`${this.state.formErrors.bannerText!==''?'Banner Text' :''} ${this.state.formErrors.bannerText}`}</span>
							</div>
							<div className="file-thumbnails">

							{this.renderThumbnail()}

							</div>
							<div className="upload-files">
								<span className="cms-sprite upload-icn"></span>
							    <span className="input-title">Add Photos*</span>
							    <input type="file" accept="image/*" className="upload" name="file_upload_data[]" onClick={this.reset} onChange={this.changeUpload} id="file_upload_data" multiple />
							    <div className="text-right">
							    	<span className="subBtnWrp">
								    	<input disabled={!this.state.formValid || loading===true} onClick={this.handleSubmit} className="btn btn-primary" type="button" value={submit} />
										<span className={loader_cls}></span>
									</span>
								</div>
							</div>
							
						</div>
					</form>
					<div className="notify-text">* Upload your banner designing material like logo, product or services photo.</div>
					<div className="com-webs">
						<div className="note">
							<span className="note-tx">NOTE</span>
							<div className="view-dtl">Banner logo, images & text should be related to your company & signed categories</div> 
						</div>
					</div>
					<Modal show={modalOpen} onHide={this.hideModal}>
					  <Modal.Body>
					      <div className="hdr-tx">
					        <button type="button" onClick={this.hideModal} className="clsbtn no-border" aria-label="Close"></button>
					      </div>
					      <section className="tab-flw tnks-visit">
					        <div className="tx2 ">Thank you for your inputs. We shall verify the details & update the banner accordingly.</div>
					        <br/>
					        <div className="text-center">
					          <button className="btn btn-primary" aria-label="Close" onClick={this.hideModal}>OK</button>
					        </div>
					      </section>
					 </Modal.Body>
					</Modal>

					<Modal show={!this.state.imageModal} onHide={() => this.hideModal(1)}>
					  <Modal.Body>
					      <div className="hdr-tx">
					        <button type="button" onClick={() => this.hideModal(1)} className="clsbtn no-border" aria-label="Close"></button>
					      </div>
					      <section className="tab-flw tnks-visit">
					        <div className="tx2 ">{this.state.typeError}</div>
					        <br/>
					        <div className="tx2 ">Please upload only 'jpeg' and 'png' type images</div>
					        <br/>
					        <div className="text-center">
					          <button className="btn btn-primary" aria-label="Close" onClick={() => this.hideModal(1)}>OK</button>
					        </div>
					      </section>
					 </Modal.Body>
					</Modal>

					<Modal show={errorModal} onHide={this.hideModal}>
					  <Modal.Body>
					      <div className="hdr-tx">
					        <button type="button" onClick={this.hideModal} className="clsbtn no-border" aria-label="Close"></button>
					      </div>
					      <section className="tab-flw tnks-visit">
					        <div className="tx2 ">Oops! Something went wrong</div>
					        <br/>
					        <div className="text-center">
					          <button className="btn btn-primary" aria-label="Close" onClick={this.hideModal}>OK</button>
					        </div>
					      </section>
					 </Modal.Body>
					</Modal>

				</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
    	bannerStatus: state.bannerDetails.bannerUpdate,
    	modalStatus: state.bannerDetails.error,
    	loading : state.bannerDetails.loading
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateBannerData, closeBannerModal },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeBanner);