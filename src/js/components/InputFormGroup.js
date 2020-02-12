import React,{Component} from 'react'
import {Col , FormGroup , ControlLabel , FormControl , Checkbox} from 'react-bootstrap'

export default class InputFormGroup extends Component{
	render(){
		let { name , id , label} = this.props; 
		return(
			<FormGroup controlId={id} className={'form-row'}>
                <Col lg={5} md={5} sm={5} xs={12} className={'form-cells'}>
                  <Checkbox className="custom-checkbox" id={`feature-${id}`} onChange={()=>{this.props.handleChange(name)}}>
                      <label htmlFor={`feature-${id}`}><span>{label}</span></label>
                  </Checkbox>
                </Col>
                <Col lg={7} md={7} sm={7} xs={12} className={'form-cells'}>
                 
                 <FormControl type="text" 
                 		placeholder="Enter Text" 
                  		disabled={!this.props[`${name}Checked`]} 
                  		onChange={this.props.handleInpChange}
                  		name = {name}
                   />
                </Col>
            </FormGroup>
		)
	}
	
} 