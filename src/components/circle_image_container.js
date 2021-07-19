import React from 'react';
import { Link } from 'react-router-dom';

import './circle-image-container.scss';
import TorontoSkyline from '../resources/toronto.jpg'

class CircleImageContainer extends React.Component {
  render() {
    var imageStyle = { height: this.props.size, width: this.props.size }

    return (
      <Link to={this.props.href} className='circle-image-container'>
        <img src={TorontoSkyline} style={imageStyle}/>
      </Link>
    );
  }
}

// CircleImageContainer.propTypes = {
//   src: React.PropTypes.string,
//   href: React.PropTypes.string
// }

export default CircleImageContainer;