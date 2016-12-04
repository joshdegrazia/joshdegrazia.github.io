import React from 'react';
import ExternalLinksPanel from 'javascript/components/external_links_panel';
import CircleImageContainer from 'javascript/components/circle_image_container';

import RedSelfie from 'images/red_selfie.jpg';

import 'styles/common';
import 'styles/pages/index';

export default React.createClass({
  render: function() {
    // the jsx syntax for sublime doesn't play nice with quote characters directly
    // inside divs, so i'm making most text in variables to avoid that

    var introText = `I'm a fourth-year University of Waterloo student studying Computer Science.`;

    return (
      <div className='hcenter index-root'>
        <div className='header-panel'>
          <CircleImageContainer src={RedSelfie}/>
          <div className='title-container'>
            <div className='title'>Josh DeGrazia</div>
            <ExternalLinksPanel/>
          </div>
        </div>
        <div className='intro-description'>{introText}</div>
      </div>
    );
  }
});