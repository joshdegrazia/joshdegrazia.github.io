import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Resume from '../resources/resume.pdf';

import '../common.scss'
import './external-links-panel.scss';

class ExternalLinksPanel extends React.Component {
  render() {
    return (
      <div className='external-links-panel'>
        <a className='link' href='mailto:joshdegrazia@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope}/>
        </a>
        <a className='link' href='https://github.com/joshdegrazia'>
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a className='link' href='https://ca.linkedin.com/in/joshdegrazia'>
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a className='link title' href={Resume}>Resume</a>
      </div>
    )
  }
}

export default ExternalLinksPanel;