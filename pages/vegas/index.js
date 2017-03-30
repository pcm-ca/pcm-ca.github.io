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
        
        <p>
          <b>𝕍egas</b> is a software package for simulation, graphics and analysis tools
          for atomistic simulations of magnetic materials. This is hosted in
          github <a className="link" href="https://github.com/jdalzatec/vegas" target="_blank">here</a>.
        </p>

        <p>
          A simulation is composed by three parts essentially: sample building, computations and averages and plotting, where each part
          is as important as the others. The philosophy of <b>𝕍egas</b> is to separate these parts in order to the simulation
          is controlated by the user and don't by the software. Moreover, as it was said before, the part of averages and plotting
          doesn't correspond to the computation part. For this reason, <b>𝕍egas</b> saves all simulation history (magnetization and
          energy for each Monte Carlo Step for each step of field and temperature). This is usefull to compute critical exponents and
          correlation functions, because for those things it is necessary to have the simulation history.
        </p>

        <p>
          Hands on and let me to teach you with examples !.
        </p>

        <ul>
          <li>
              <Link className="link-bold" to={prefixLink("/vegas/installation/")}>
                Installation
              </Link>
          </li>
          <li>
              <Link className="link-bold" to={prefixLink("/vegas/sample-build/")}>
                Sample build
              </Link>
              <ul>
                <li>
                  <Link className="link-bold" to={prefixLink("/vegas/sample-build/update-policies/")}>
                    Spin update policies
                  </Link>
                </li>
                <li>
                  <Link className="link-bold" to={prefixLink("/vegas/sample-build/sample-build-examples/")}>
                    Examples
                  </Link>
                </li>
              </ul>
          </li>
        </ul>

      </div>
    )
  }
}

