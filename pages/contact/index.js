import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'

import { prefixLink } from 'gatsby-helpers'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | contact'} />

        <h1>
          Contact us
        </h1>

        <p>
            <div className="uptext">
              If you have any questions about our group or the different research works,
              do not hesitate to contact the appropiate person (<Link className="link" to={prefixLink('/people/')}>People</Link>).
            </div>
            <br/>
            <div className="uptext">
              Universidad Nacional de Colombia<br/>
              Sede Manizales<br/>
              Campus La Nubia<br/>
              W. 216<br/>
              Phone: +57 6 8879300 ext 55631
            </div>
            
            <center><img src="/images/build_w.jpg" alt=""/></center>
            <center>W Building, Campus La Nubia.</center>

        </p>
        

      </div>
    )
  }
}

