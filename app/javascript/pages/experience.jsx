import React from 'react';

import Sidebar from 'javascript/components/sidebar';
import LanguageLabel from 'javascript/components/language_label';
import TermContainer from 'javascript/components/term_container';

import 'styles/pages/experience';
import 'styles/common';

var data = {
  'companies' : [
    {
      'name' : 'RPM Technologies',
      'logo' : '[rpm-logo]',
      'link' : 'http://www.rpmtec.com/',
      'description' : 'RPM creates backoffice solutions for financial companies. Here I primarily worked on internal tools \
                       geared at making development at RPM more painless.',
      'technologies' : [
        { 'icon': 'devicons-visualstudio', 'text': 'C#' },
        { 'icon': 'devicons-java', 'text': 'Java' },
        { 'icon': 'devicons-visualstudio', 'text': 'Visual Basic' },
        { 'icon': 'devicons-python', 'text': 'Python' }
      ],
      'terms' : [
        { 
          'name' : 'Summer 2014',
          'description' : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
        },
        {
          'name' : 'Summer 2015',
          'description' : ''
        },
        {
          'name' : 'Winter 2016',
          'description' : ''
        }
      ]
    },
    {
      'name' : 'Chalk.com',
      'logo' : '[chalk-logo]',
      'link' : 'http://www.chalk.com',
      'description' : 'Chalk.com is an education solution for teachers to organize both with other \
                       teachers at a school level and an administrative level. I did full-stack work here, \
                       implementing many new front-end and back-end features.',
      'technologies' : [
        { 'icon': 'devicons-react', 'text': 'React' },
        { 'icon': 'devicons-coffeescript', 'text': 'Coffeescript' },
        { 'icon': 'devicons-ruby_on_rails', 'text': 'Ruby on Rails' },
        { 'icon': 'devicons-sass', 'text': 'Sass' }
      ],
      'terms' : [
        {
          'name' : 'Fall 2016',
          'description' : ''
        }
      ]
    }
  ]
}

class ExperiencePage extends React.Component {
  renderCompanyTechnologies(technologies) {
    return technologies.map(
      (technology) => (
        <LanguageLabel text={technology.text} icon={technology.icon}/>
      )
    );
  }

  renderWorkTerms() {
    return data.companies.map(
      (company) => (
        <div className='company-container'>
          <div className='title-bar'>
            <div className='title-row'>
              <div className='company-name title'>
                {company.name}<a className='fa fa-external-link' href={company.link}/>
              </div>
            </div>
            <div className='title-row'>
              {this.renderCompanyTechnologies(company.technologies)}
            </div>
          </div>
          <div className='company-description'>{company.description}</div>
          {company.terms.map((term) => <TermContainer term={term}/>)}
        </div>
      )
    );
  }

  render() {
    return (
      <div className='root'>
        <Sidebar currentPage='experience'/>
        <div className='experience-page'>
          {this.renderWorkTerms()}
        </div>
      </div>
    );
  }
}

export default ExperiencePage;