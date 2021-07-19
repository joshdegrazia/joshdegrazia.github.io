import React from 'react';

import Resume from '../resources/resume.pdf';

import '../common.scss'
import './external-links-panel.scss';

class ExternalLinksPanel extends React.Component {
  render() {
    return (
      <div className='external-links-panel'>
        <a className='link fa fa-envelope' href='mailto:joshdegrazia@gmail.com'/>
        <a className='link fa fa-github' href='https://github.com/joshdegrazia'/>
        <a className='link fa fa-linkedin-square' href='https://ca.linkedin.com/in/joshdegrazia'/>
        <a className='link title' href={Resume}>Resume</a>
      </div>
    )
  }
}

export default ExternalLinksPanel;