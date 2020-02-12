import React , {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css'

import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export default class ManageContent extends Component {
  
  constructor(props){
    super(props)
  }
  
  renderVideoItem(item){
    return(
      <Video 
        loop
        ref="videoasa"
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster={item.thumbnail} >
            <source src={item.original} type="video/mp4" />
        </Video>
    )
  }

  render() {
    const videoRender = (this.props.type === 'v') ? this.renderVideoItem : null;         
    const items = this.props.data.map((dataItem)=>{
      return ({original : dataItem.mainImage, thumbnail : dataItem.thumbImage })
    }) 
    return(
      <div>
       <ImageGallery
          items={items}
          slideInterval={1000}
          showPlayButton={false}
          startIndex={this.props.clickedKey}
          renderItem = {videoRender}
          defaultImage = '../../images/thumb.jpg' 
        />
        </div>
    )
  }
}