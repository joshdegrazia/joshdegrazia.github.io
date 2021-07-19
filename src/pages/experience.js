import React from 'react';

import Sidebar from '../components/sidebar';
import LanguageLabel from '../components/language_label';
import TermContainer from '../components/term_container';

import '../common.scss';
import './experience.scss';

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
        { 'icon': 'devicons-python', 'text': 'Python' },
        { 'icon': 'devicons-perl', 'text': 'Perl' },
      ],
      'terms' : [
        { 
          'name' : 'Summer 2014',
          'description' : 'In my first co-op term, RPM tasked myself and two other co-op students with building \
                           a compiler that would translate code from Visual Basic 6 to modern C# in order to move \
                           on from one of their old legacy programs. With this program we were able to port most \
                           of the program over, where we wrote new basic infrastructure to replace constructs \
                           that didn\'t translate well.',
        },
        {
          'name' : 'Summer 2015',
          'description' : 'Primarily in my second term at RPM, I worked on font-end development for their \
                           brokerage platforms, both on the web (using C# with ASP.net) and on desktop (in \
                           Java).'
        },
        {
          'name' : 'Winter 2016',
          'description' : 'My third term at RPM was spent on an internal testing tool which built sample test \
                           reports normally generated by the government (so that the QA workers would not have \
                           to build them by hand). It started as a simple bugfix for the small Python project \
                           another employee had built, but as I used it, I noticed many new features to be added. \
                           This project turned into adding function after function to the test program, \
                           including dynamically generating UI elements based on the reports being given.',
        }
      ]
    },
    {
      'name' : 'Chalk.com',
      'logo' : '[chalk-logo]',
      'link' : 'http://www.chalk.com',
      'description' : 'Chalk.com is an education solution for teachers to organize both with other \
                       teachers at a school level and an administrative level. I did full-stack work here, \
                       implementing many new front-end and back-end features, as well as helping the team create \
                       new code standards to improve their old code and create clean code going forwards.',
      'technologies' : [
        { 'icon': 'devicons-react', 'text': 'React' },
        { 'icon': 'devicons-coffeescript', 'text': 'Coffeescript' },
        { 'icon': 'devicons-ruby_on_rails', 'text': 'Ruby on Rails' },
        { 'icon': 'devicons-sass', 'text': 'Sass' }
      ],
      'terms' : [
        {
          'name' : 'Fall 2016',
          'description' : 'During my term at Chalk.com I implemented many new features, including \
                           allowing administrators to leave and view feedback for teachers, exporting standard \
                           coverage and attendance to PDF, as well as working with another employee to reimplement \
                           the client infrastructure to allow for individual schools to be identified in our system.'
        }
      ]
    },
    {
      'name' : 'Amazon',
      'logo' : '[amazon-logo]',
      'link' : 'http://www.amazon.com',
      'description' : 'At Amazon, I worked on their Recruiting Experience team, which handled the internal tools that \
                       Amazon\'s recruiters use when managing candidates and job openings. I worked primarily on their legacy \
                       back-end system in order to clean it up and make it more usable for developers.',
      'technologies' : [
        { 'icon': 'devicons-java', 'text': 'Java' },
        { 'icon': 'devicons-amazonwebservices', 'text': 'AWS' },
      ],
      'terms' : [
        {
          'name' : 'Summer 2017',
          'description' : 'During my internship with Amazon, I worked primarily on the email sending portion of thier backend. Their current \
                           email system sent way too many emails, which got very spammy for most of its users. My task was to allow \
                           users to filter certain email types. However, implementing this was nearly impossible with how unclean their \
                           legacy code was, so my project evolved to also include a large refactoring and restructuring task. I worked closely \
                           with a high-level engineer on my team in order to develop a new domain for emails in our system and create a scalable, more \
                           workable object model that would satisfy the system\'s needs in a much more versatile way.',
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
    return data.companies.reverse().map(
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