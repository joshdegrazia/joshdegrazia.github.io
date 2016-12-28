import React from 'react';

import 'styles/components/language-label';

class LanguageLabel extends React.Component {
  render() {
    var iconClasses = 'devicons ' + this.props.icon;

    return (  
      <div className='language-label'>
        <div className={iconClasses}/>
        <div className='label-text'>{this.props.text}</div>
      </div>
    );
  }
}

LanguageLabel.propTypes = {
  text: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired
}

export default LanguageLabel;