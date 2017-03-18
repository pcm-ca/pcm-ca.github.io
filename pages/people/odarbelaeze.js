import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

import { Image } from 'react-bootstrap'; 


export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | people | odarbelaeze'} />
        
        <h1>
          Óscar David Arbeláez Echeverri
        </h1>

        <Image src="../images/oscar_david_arbelaez_echeverri.jpg" rounded />
      
      </div>
      
       
    )
  }
}

