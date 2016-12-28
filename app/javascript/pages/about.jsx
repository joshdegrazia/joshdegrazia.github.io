import React from 'react';

import NavHeader from 'javascript/components/nav_header';

class AboutPage extends React.Component {
  render() {
    return (
      <div className='root'>
        <NavHeader/>
        <div>This is the About Me page.</div>
      </div>
    );
  }
}

export default AboutPage;