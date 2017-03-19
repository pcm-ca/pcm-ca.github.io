import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'

import { prefixLink } from 'gatsby-helpers'
import _ from 'lodash'
import bib from "./people/bib";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | publications'} />

        <h1>
          Contact us
        </h1>

        <p>
            <div className="uptext">
              If you have some question about the group or about some work,
              don't hesitate in write to the appropiate person (<Link to={prefixLink('/people/')}>People</Link>).
            </div>

            <div className="uptext">
              Universidad Nacional de Colombia<br/>
              Sede Manizales<br/>
              Campus La Nubia<br/>
              W. 2__<br/>
              Phone: +57 6 8879300 ext ____
            </div>
            
            <center><img src="/images/build_w.jpg" alt=""/></center>
            <center>Build W, Campus La Nubia.</center>

        </p>
        

      </div>
    )
  }
}

