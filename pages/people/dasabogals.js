import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

import info from './info'
import PersonPage from '../../components/PersonPage'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | people | dasabogals'} />
        
        <PersonPage
              {...info.dasabogals}
              picture="../images/dasabogals.jpg"
          />
      </div>
      
      
       
    )
  }
}

