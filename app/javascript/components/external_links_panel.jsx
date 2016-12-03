import React from 'react';

import 'styles/components/external-links-panel';

export default React.createClass({
  render: function() {
    return (
      <div className='external-links-panel'>
        <a className='link fa fa-envelope' href='mailto:joshdegrazia@gmail.com'/>
        <a className='link fa fa-github' href='https://github.com/joshdegrazia'/>
        <a className='link fa fa-linkedin-square' href='https://ca.linkedin.com/in/joshdegrazia'/>
        <a className='link fa fa-twitter' href='https://twitter.com/josh_degrazia'/>
      </div>
    )
  }
});