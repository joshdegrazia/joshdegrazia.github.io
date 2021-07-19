import React from 'react';

import '../common.scss';
import './term-container.scss';

class TermContainer extends React.Component {
  constructor(props) {
    super();
    this.state = { open: false };
  }

  toggleTermOpen() {
    this.setState({ open: !this.state.open });
  }

  renderTermHeader() {
    if (this.state.open) {
      var chevronClasses = 'fa fa-chevron-up';
    } else {
      var chevronClasses = 'fa fa-chevron-down';
    }
    return (
      <div className='title term-header'>{this.props.term.name}<div className={chevronClasses}/></div>
    );
  }

  renderTermDescription() {
    if (this.state.open) {
      return (
        <div className='term-description'>{this.props.term.description}</div>
      );
    }
  }

  render() {
    if (this.state.open) {
      var termContainerClasses = 'term-container open';
    } else {
      var termContainerClasses = 'term-container';
    }

    return (
      <div className={termContainerClasses} onClick={() => this.toggleTermOpen()}>
        {this.renderTermHeader()}
        {this.renderTermDescription()}
      </div>
    );
  }
}

export default TermContainer;