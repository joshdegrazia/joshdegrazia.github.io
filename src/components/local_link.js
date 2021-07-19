import React    from 'react';
import { Link } from 'react-router-dom';

import './local-link.scss';

class LocalLink extends React.Component {
  render() {
    var iconClass = 'fa ' + this.props.icon

    return (
      <Link to={this.props.linkTo} className='local-link'>
        <div className='link-text'><div className={iconClass}/>{this.props.text}</div>
      </Link>
    );
  }
}

export default LocalLink;