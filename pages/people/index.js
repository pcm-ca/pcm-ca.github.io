import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'
import people from './people'
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

        <h2>The Bosses</h2>

        <div className='people'>
          {_.map(people.bosses, (props, key) => (
            <Person
              {...props}
              link={prefixLink(`/people/${key}/`)}
              key={key}
            />
          ))}
        </div>

        <hr/>
        <h2>Research Scientists / Doctoral Researchers</h2>

        <div className='people'>
          {_.map(people.range1, (props, key) => (
            <Person
              {...props}
              link={prefixLink(`/people/${key}/`)}
              key={key}
            />
          ))}
        </div>

        <hr/>
        <h2>Master students</h2>

        <div className='people'>
          {_.map(people.range2, (props, key) => (
            <Person
              {...props}
              link={prefixLink(`/people/${key}/`)}
              key={key}
            />
          ))}
        </div>

        <hr/>
        <h2>Undergraduate students</h2>

        <div className='people'>
          {_.map(people.range3, (props, key) => (
            <Person
              {...props}
              link={prefixLink(`/people/${key}/`)}
              key={key}
            />
          ))}
        </div>

      </div>
    )
  }
}

