import React from 'react';
import { Link } from 'react-router';

import CircleImageContainer from 'javascript/components/circle_image_container';
import ExternalLinksPanel from 'javascript/components/external_links_panel';

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
        <Link to='/education' className='page-link education'><div className='fa fa-book'/>Education</Link>
        <Link to='/experience' className='page-link experience'><div className='fa fa-briefcase'/>Work Experience</Link>
        <Link to='/projects' className='page-link projects'><div className='fa fa-paint-brush'/>Projects</Link>
        <Link to='/about' className='page-link about'><div className='fa fa-user'/>About Me</Link>
      </div>
    )
  }
}

Sidebar.propTypes = {
  currentScreen: React.PropTypes.string
}

export default Sidebar;