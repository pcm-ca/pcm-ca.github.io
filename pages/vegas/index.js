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

        <center><img width={400} src="./images/vegas.png" alt=""/></center>
        

      </div>
    )
  }
}

