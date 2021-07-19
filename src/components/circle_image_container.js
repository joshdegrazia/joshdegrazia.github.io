import React from 'react';
import { Link } from 'react-router-dom';

import './circle-image-container.scss';
import RedSelfie from '../resources/red_selfie.jpg'

class CircleImageContainer extends React.Component {
  render() {
    var imageStyle = { height: this.props.size, width: this.props.size }

    return (
      <Link to={this.props.href} className='circle-image-container'>
        <img src={RedSelfie} style={imageStyle}/>
      </Link>
    );
  }
}

export default CircleImageContainer;