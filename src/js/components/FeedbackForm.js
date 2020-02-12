import React , {Component} from 'react'

export default class FeedbackForm extends Component {
	constructor(props)
	{
	    super(props)  
	    this.state = {
	    	[this.props.name] : '',
	    	[this.props.name+'Error'] : false,
		}
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(name,type)
  	{
  		let emoji_charcode = '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])';
        let feedback = this.state[name];
        feedback = feedback.replace(new RegExp(emoji_charcode, 'g'), ''); //Drop emojis from textarea

		if(this.state[name].length === 0)
			return this.setState({ [`${name}Error`] : true })  //empty validation 
		else
		{
			this.props.handleSubmit(name,type,feedback);
			this.setState({[name] : ""})
 		} 
  	}

  	handleChange({target}){
	    this.setState({ [`${target.name}Error`] : (this.state[target.name].length === 0 && this.state[`${target.name}Error`]) ? true : false}) 
	    this.setState({
	      [target.name] : target.value
	    })
  	}

	render(){		
		const {name , type, loading} = this.props;
		let submit = loading === true ? '' : 'Submit'
		let loader_cls = loading === true ? 'loadSubmt' : ''
		return(
			<div className="form-container">
	            <textarea className={`form-text ${(this.state[name+'Error']) ? "errorText" : ""}`} 
	            	name={name} 
	            	onChange={this.handleChange} 
	            	value = {this.state[name]}
	            	placeholder="If you still have any queries, kindly give your feedback">
	            </textarea>
	            <div className={(this.state[name+'Error']) ? "errorDiv" : "dn"} >Oops , nothing to submit!</div>
	            <div className="text-right">
             		 <span className="subBtnWrp"> 
             		 	<input onClick={()=>{this.handleSubmit(name,type)}} className="btn btn-primary" type="submit" value={submit} />
             		 	<span className={loader_cls}></span>
             		 </span>
          		</div>
	        </div>
		)
	}
}  

