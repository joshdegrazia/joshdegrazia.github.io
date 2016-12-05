import React from 'react';

import 'styles/components/circle-image-container';

class CircleImageContainer extends React.Component {
  render() {
    var imageStyle = { height: this.props.size, width: this.props.size }

    return (
      <div className='circle-image-container'>
        <img src={this.props.src} style={imageStyle}/>
      </div>
    );
  }
}

CircleImageContainer.propTypes = {
  src: React.PropTypes.string
}

export default CircleImageContainer;