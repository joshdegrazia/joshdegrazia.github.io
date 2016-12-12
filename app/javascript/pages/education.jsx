import React from 'react';

import Sidebar from 'javascript/components/sidebar';

import 'styles/common';

class EducationPage extends React.Component {
  render() {
    return (
      <div className='root'>
        <Sidebar currentPage='education'/>
        <div className='right-pane'>This is the Education page.</div>
      </div>
    );
  }
}

export default EducationPage;