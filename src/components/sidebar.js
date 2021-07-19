import React from 'react';
import { Link } from 'react-router-dom';

import CircleImageContainer from './circle_image_container';
import ExternalLinksPanel from './external_links_panel';
import LocalLink from './local_link';

import './sidebar.scss';

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <CircleImageContainer className='hcenter' size={200} href='/'/>
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

export default Sidebar;