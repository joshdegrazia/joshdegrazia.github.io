import React from 'react';

import 'styles/components/circle-image-container';

class CircleImageContainer extends React.Component {
  render() {
    return (
      <div className='circle-image-container'>
        <img src={this.props.src}/>
      </div>
    );
  }
}

CircleImageContainer.propTypes = {
  src: React.PropTypes.string
}

export default CircleImageContainer;