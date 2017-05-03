import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle + ' | Clases'}
          meta={[
            {"name": "description", "content": "Lista de clases"},
            {"name": "keywords", "content": "clases, informatics"},
          ]}
        />
        <h1>
            Informática III
        </h1>
        <h2>Lista de clases</h2>
        <ul>
          <li>
            <Link className="link-bold" to={prefixLink('/informatication/intro/')}>Intro</Link>
          </li>
          <li>
            <Link className="link-bold" to={prefixLink('/informatication/graficos/')}>Gráficos</Link>
          </li>
          <li>
            <Link className="link-bold" to={prefixLink('/informatication/ajustes/')}>Ajustes</Link>
          </li>
        </ul>
      </div>
    )
  }
}
