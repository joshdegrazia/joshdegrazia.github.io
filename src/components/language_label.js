import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './language-label.scss';

class LanguageLabel extends React.Component {
  render() {
    return (  
      <div className='language-label'>
        <FontAwesomeIcon icon={this.props.icon}/>
        <div className='label-text'>{this.props.text}</div>
      </div>
    );
  }
}

export default LanguageLabel;