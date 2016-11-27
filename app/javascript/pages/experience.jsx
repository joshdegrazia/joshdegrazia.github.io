import React from 'react';

import NavHeader from 'javascript/components/nav_header';

export default React.createClass({
  render: function() {
    return (
      <div className='root'>
        <NavHeader/>
        <div>This is the Experience page.</div>
      </div>
    );
  }
});