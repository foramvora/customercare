import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import CustomAccordion from "../components/layout/CustomAccordion" 
import CategoryBanner from "../components/KnowBanner/CategoryBanner" 
import ChangeBanner from "../components/KnowBanner/ChangeBanner" 
import BannerFeedback from "../components/KnowBanner/BannerFeedback" 
import BannerFAQ from "../components/KnowBanner/BannerFAQ" 

import { fetchBannerData } from '../actions/bannerActions'
import { PARENTID,DTCITY } from '../../index.js'

class KnowBanner extends React.Component {
  constructor(props)
  {
    super(props)
 
    this.state = {
      selectedKey : null,
      PARENTID : PARENTID, 
    }
    this.handleSelect = this.handleSelect.bind(this) 
  }
  
  handleSelect(k,e){
    if(k==='4.1.1')
      this.props.fetchBannerData(this.state.PARENTID,DTCITY,2);
    else if(k==='4.1.2')
      this.props.fetchBannerData(this.state.PARENTID,DTCITY,5);
    
    this.setState({selectedKey : k})
    return;   
  }

  render() {
    let { bannerData ,loading , params} = this.props;
    let selectedTab = (params.tab) ? params.tab : null;
    let { selectedKey } = this.state;

    let CategoryBannerContent = (loading == true) ? 'Loading...' : (Object.keys(bannerData).length > 0 && selectedKey==='4.1.1') ? <CategoryBanner name={"Category"} data={bannerData[this.state.PARENTID]} /> : 'Sorry, No Data Found!!';
    let CompetitorBannerContent = (loading == true) ? 'Loading...' : (Object.keys(bannerData).length > 0 && selectedKey==='4.1.2') ? <CategoryBanner name={"Competitor"} data={bannerData[this.state.PARENTID]} /> : 'Sorry, No Data Found!!';

    let panel = [{id : '4.1.1' , header : 'Category Banners' ,content : CategoryBannerContent},
                 {id : '4.1.2' , header : 'Competitor Banners' ,content : CompetitorBannerContent },
                 {id : '4.1.3' , header : 'Want Changes In My Banner Design' , content : <ChangeBanner/>},
                 {id : '4.1.4' , header : 'Feedback About Banners' , content : <BannerFeedback/>},
                 {id : '4.1.5' , header : 'FAQ About Banners' , content : <BannerFAQ/>}]            
    return (
      <div>
        <div className="content-title">All You Want To Know About Banner</div>
        <CustomAccordion panels={panel} onSelect={this.handleSelect} selectedTab={selectedTab} />        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { 
       bannerData : state.bannerDetails.bannerDetails,
       loading : state.bannerDetails.loading,
       error : state.bannerDetails.error,
    };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchBannerData },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(KnowBanner)