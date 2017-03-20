import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

import bib from './bib'
import info from './info'
import PersonPage from '../../components/PersonPage'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | people | hhortiza'} />
        
        <PersonPage
              {...info.hhortiza}
              picture="../images/hhortiza.jpg"
          />
      </div>
      
      
       
    )
  }
}

