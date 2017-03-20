import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'

import { prefixLink } from 'gatsby-helpers'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | resources'} />

        <h1>
          Resources
        </h1>
        
        <div className="resourcesDiv">
          <span className="resourcesItems">
            <ul>
              <li><Link className="linksResources" to={prefixLink('/resources/tutorials/')}>Tutorials</Link></li>
              <li><Link className="linksResources" to={prefixLink('/resources/calendar/')}>Calendar</Link></li>
              <li><Link className="linksResources" to={prefixLink('/resources/vegas/')}>Vegas</Link></li>
            </ul>
          </span>
        </div>
        

      </div>
    )
  }
}

