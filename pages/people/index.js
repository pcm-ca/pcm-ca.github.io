import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'
import info from './info'
import { prefixLink } from 'gatsby-helpers'
import _ from 'lodash'

import Person from '../../components/Person'


export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | people'} />

        <h1>
          People
        </h1>

        <h2>The bosses</h2>

        <div className='people'>
          {_.map(_.filter(info, {"level": "boss"}), person => (
            <Person
              {...person}
              link={prefixLink(`/people/${person.username}/`)}
              key={person.username}
            />
          ))}
        </div>

        <hr/>
        <h2>Research Scientists / Doctoral Researchers</h2>

        <div className='people'>
          {_.map(_.filter(info, {"level": "range1"}), person => (
            <Person
              {...person}
              link={prefixLink(`/people/${person.username}/`)}
              key={person.username}
            />
          ))}
        </div>

        <hr/>
        <h2>Master students</h2>

        <div className='people'>
          {_.map(_.filter(info, {"level": "range2"}), person => (
            <Person
              {...person}
              link={prefixLink(`/people/${person.username}/`)}
              key={person.username}
            />
          ))}
        </div>

        <hr/>
        <h2>Undergraduate students</h2>

        <div className='people'>
          {_.map(_.filter(info, {"level": "range3"}), person => (
            <Person
              {...person}
              link={prefixLink(`/people/${person.username}/`)}
              key={person.username}
            />
          ))}
        </div>

      </div>
    )
  }
}

