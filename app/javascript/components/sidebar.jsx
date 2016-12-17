import React from 'react';
import { Link } from 'react-router';

import CircleImageContainer from 'javascript/components/circle_image_container';
import ExternalLinksPanel from 'javascript/components/external_links_panel';
import LocalLink from 'javascript/components/local_link';

import RedSelfie from 'images/red_selfie';

import 'styles/components/sidebar';

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <CircleImageContainer className='hcenter' src={RedSelfie} size={200}/>
        <Link to='/' className='hcenter title title-text'>Josh DeGrazia</Link>
        <div className='hcenter subtitle'>Student & Software Developer</div>
        <ExternalLinksPanel/>
        <LocalLink linkTo='/education' icon='fa-book' text='Education'/>
        <LocalLink linkTo='/experience' icon='fa-briefcase' text='Work Experience'/>
        <LocalLink linkTo='/projects' icon='fa-paint-brush' text='Projects'/>
        <LocalLink linkTo='/about' icon='fa-user' text='About Me'/>
      </div>
    )
  }
}

Sidebar.propTypes = {
  currentScreen: React.PropTypes.string
}

export default Sidebar;