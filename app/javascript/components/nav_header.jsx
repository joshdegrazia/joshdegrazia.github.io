import React from 'react';
import { Link } from 'react-router';

import 'styles/components/nav-header';

class NavHeader extends React.Component {
  render() {
    return (
      <div className='nav-header'>
        <ul className='local-links'>
          <li className='header-link'>
            <Link to='/'>Josh DeGrazia</Link>
          </li>
          <li className='header-link'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='header-link'>
            <Link to='/experience'>Experience</Link>
          </li>
          <li className='header-link'>
            <Link to='/about'>About Me</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavHeader;