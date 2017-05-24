import React from 'react';

import Sidebar from 'javascript/components/sidebar';

import 'styles/pages/about';
import 'styles/common';

var data = {
  'interests' : [
    {
      'title' : 'Rock Climbing',
      'logo' : '[rock-climbing-logo]',
      'description' : 'I started bouldering in early 2015, which quickly became \
                       one of the most powerful factors towards losing a bunch of \
                       weight during that time. It can be hard to go to a good gym \
                       due to how frequently I move around, but I always stop by The \
                       Rock Oasis in Toronto or Grand River Rocks in Kitchener \
                       whenever I get the chance.'
    },
    {
      'title' : 'Music',
      'logo' : '[music-logo]',
      'description' : 'Music has been a huge part of my life for as long as I remember.\
                       I make a point of exploring music as often as possible, which has\
                       had a profound impact on my outlook on life. Some of my favourite\
                       artists include the Foo Fighters, Catfish and the Bottlemen, and Rush.'
    },
    {
      'title' : 'Board Games',
      'logo' : '[board-games-logo]',
      'description' : 'I began my exploration into board games late into my high school career.\
                       My friends and I started out with the classic Settlers of Catan and have\
                       branched deep into modern games. Some of my favourites are Lords of \
                       Waterdeep, Avalon, and Smallworld.'
    },
  ]
}

class AboutPage extends React.Component {
  
  renderHeader() {
    return (
      <div className='interest-header'>
        I don't just spend all my days coding! These are some of my hobbies and interests.
      </div>
    );
  }

  renderInterests() {
    return data.interests.map(
      (interest) => (
        <div className='interest-container'>
          <div className='title-row'>
            <div className='title interest-name'>{interest.title}</div>
          </div>
          <div className='horizontal-line'/>
          <div className='description'>{interest.description}</div>
        </div>
      )
    );
  }

  render() {
    return (
      <div className='root'>
        <Sidebar currentPage='about'/>
        <div className='about-page'>
          {this.renderHeader()}
          {this.renderInterests()}
        </div>
      </div>
    );
  }
}

export default AboutPage;