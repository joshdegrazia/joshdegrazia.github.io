import React from 'react';

import ExternalLinksPanel   from '../components/external_links_panel.js';
import CircleImageContainer from '../components/circle_image_container.js';
import LocalLink from '../components/local_link.js';

import RedSelfie from '../resources/red_selfie.jpg';

import '../common.scss';
import './index.scss';

class IndexPage extends React.Component {
  render() {
    // the jsx syntax for sublime doesn't play nice with quote characters directly
    // inside divs, so i'm making most text in variables to avoid that

    var introText = `Software engineer currently working at Amazon in Seattle. Graduated from the University
                    of Waterloo in Waterloo, Ontario, Canada. Experienced in full-stack development, primarily
                    using AWS and React.`;

    return (
      <div className='index-root'>
        <div className='hcenter index-content'>
          <div className='header-panel'>
            <CircleImageContainer src={RedSelfie} size={200} href='/'/>
            <div className='title-container'>
              <div className='title'>Josh DeGrazia</div>
              <div className='hcenter subtitle'>Student & Software Developer</div>
              <ExternalLinksPanel/>
            </div>
          </div>
          <div className='intro-description'>{introText}</div>
          <div>
            <div className='local-links-panel'>
              <LocalLink linkTo='/education' icon='fa-book' text='Education'/>
              <LocalLink linkTo='/experience' icon='fa-briefcase' text='Work Experience'/>
            </div>
            <div className='local-links-panel'>
              <LocalLink linkTo='/projects' icon='fa-paint-brush' text='Projects'/>
              <LocalLink linkTo='/about' icon='fa-user' text='About Me'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;