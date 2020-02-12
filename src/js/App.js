import React from "react";
import Nav from "./components/layout/Nav";
//import Footer from "./components/layout/footer";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import { fetchContractDet } from "./actions/contractActions"

//import '../css/bootstrap.min.css';
import '../css/cms.css';
import '../css/header_footer.css';
import { PARENTID, DTCITY } from "../index.js";

class App extends React.Component
{
   constructor(props)
   {  
      super(props)
      this.state = {
          mobileDetection : 0,
          leftNavClass : 'block', 
          navContentClass : '',
      }
      this.handleMobileDetection = this.handleMobileDetection.bind(this);
      this.handleBack = this.handleBack.bind(this);
   } 

   componentDidMount() {
     window.addEventListener('resize', this.handleMobileDetection);
   }

   componentWillMount() {
     this.props.fetchContractDet(PARENTID, DTCITY);
   }

   handleMobileDetection(){
      let mobileDetection = (window.innerWidth<768) ? 1 :0 ;
      let leftNavClass = (mobileDetection) ? 'none' : 'block';
      let navContentClass = (mobileDetection) ? 'block' : '';
      this.setState({
          leftNavClass : leftNavClass, 
          navContentClass : navContentClass,
          mobileDetection : mobileDetection
      })
   }

   handleBack(){
      this.setState({
          leftNavClass : 'block', 
          navContentClass : 'none',
      })
   }

   render(){  
    const { location } = this.props;
    const leftNavClass = {
      display : this.state.leftNavClass 
    }
    const navContentClass = {
      display : this.state.navContentClass 
    }

    return(
      <div className="content-holder" id="CCContainer">
        <div className="main-wrapper">

          <div className="content-wrapper">
          
            <div className="img-container">
              <img className="img-responsive full-width hidden-xs" src="//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/cms/contact-us.jpg" />
              <img className="img-responsive full-width visible-xs-block" src="//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/cms/contact-us_mob.jpg" />
            </div>
            <div className="content-container">
              <div className="left-navigation col-sm-3" style={leftNavClass}>
                <Nav location = {location} handleNavClick={this.handleMobileDetection} />
              </div>  
              <div className="nav-content-wrapper col-sm-9" style={navContentClass}>
                <div className="nav-content">
                  <a className="backLink visible-xs-inline-block" onClick={this.handleBack}>&lt; Back</a>
                  {this.props.children}     
                </div>
              </div>
            </div>  
          </div>
        
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {//console.log(state);
  return { ...state };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchContractDet },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App)