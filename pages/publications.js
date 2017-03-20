import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import crypto from 'crypto'

import _ from 'lodash'
import bib from "./people/bib"
import Paper from '../components/Paper'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle + ' | publications'} />
        <h1>
          Publications
        </h1>
        <div>
            <ol>
                {_.map(bib.papers, paper => (
                    <li key={crypto.createHash('md5').update(paper.title).digest('hex')}>
                        <Paper {...paper} />
                    </li>
                ))}
            </ol>
        </div>
      </div>
    )
  }
}