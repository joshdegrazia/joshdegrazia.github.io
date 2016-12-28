import React from 'react';

import ExternalLinksPanel   from 'javascript/components/external_links_panel';
import CircleImageContainer from 'javascript/components/circle_image_container';
import LocalLink            from 'javascript/components/local_link';

import RedSelfie from 'images/red_selfie.jpg';

import 'styles/common';
import 'styles/pages/index';

class IndexPage extends React.Component {
  render() {
    // the jsx syntax for sublime doesn't play nice with quote characters directly
    // inside divs, so i'm making most text in variables to avoid that

    var introText = `I'm a fourth-year University of Waterloo student studying Computer Science.
                     I seek to develop myself in the field and learn as much about the industry
                     as I can before I graduate.`;

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