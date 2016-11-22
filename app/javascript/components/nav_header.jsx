
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
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
});