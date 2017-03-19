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
          Publications
        </h1>

        <div>
            {_.map(bib, (papers, key) =>(
                <ul>
                    {_.map(papers, (paper, key2) =>(
                        <div>
                            <li>
                                {_.map(paper.authors, (author, key3) => (
                                    author + ", "
                                ))}
                                <b>{paper.title}</b>
                                {", " + paper.journal +
                                ", vol. " + paper.volume +
                                ", " + paper.number +
                                ", ("}
                                <b>{paper.year}</b>
                                {")" +
                                ", pp. " + paper.pages.split(" ")}.
                                <br/>
                                {paper.doi && (<a href={paper.doi} target="_blank">DOI: {paper.doi}</a>) }
                                {paper.link && (<a href={paper.link} target="_blank">Download</a>) }
                            </li>
                        </div>
                    ))}
                </ul>
            ))
            }
        </div>


      </div>
    )
  }
}

