import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

import bib from './bib'
import info from './info'
import Person_page from '../../components/Person_page'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | people | yalopezmu'} />
        
        <Person_page
              {...info.yalopezmu}
              picture="../images/yalopezmu.jpg"
          />
      </div>
      
      
       
    )
  }
}

