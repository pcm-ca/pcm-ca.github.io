import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import _ from 'lodash'

import { prefixLink } from 'gatsby-helpers'

export default class Index extends React.Component {
  render() {
    const sortedPages = sortBy(this.props.route.pages, 'data.date')
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visibleTutorials = sortedPages.filter(page => (
      (
        get(page, 'file.ext') === 'md' && !_.includes(page.path, '/404')
        || get(page, 'data.date')
      ) && (_.includes(get(page, 'file.dir'), 'tutorials'))
    ))

    return (
      <div>
        <Helmet title={config.siteTitle + ' | resources'} />

        <h1>
          Tutorials
        </h1>
        {visibleTutorials.map((page) => (
              <li key={page.path}>
                <Link className="linksResources" to={prefixLink(page.path)}>
                    {get(page, 'data.title', page.path)}
                </Link>
              </li>
          ))}
      </div>
    )
  }
}

