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

        <h2>The Pedestrians</h2>

        <div className='people'>
          {_.map(people.pedestrians, (props, key) => (
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

