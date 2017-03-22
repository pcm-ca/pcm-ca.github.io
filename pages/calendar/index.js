import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import _ from 'lodash'

import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Calendar from '../../components/Calendar'


export default class Index extends React.Component {
  render() {
    const sortedPages = _.sortBy(this.props.route.pages, 'data.date')
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visibleEvents = sortedPages.filter(page => (
      (
        _.get(page, 'file.ext') === 'md' &&
        !_.includes(page.path, '/404') ||
        _.get(page, 'data.date')
      ) && (_.includes(_.get(page, 'file.dir'), 'calendar'))
    ))
    return (
      <div>
        <Helmet title={config.siteTitle + ' | resources'} />

        <div className="calendar--header">
            <h1>
              Calendar
            </h1>
            <div className="divUpcomingPast">
              <a className="link" href="#upcoming">Upcoming</a>
              <a className="link" href="#past">Past</a>
            </div>
        </div>
        <Calendar events={visibleEvents}/>

      </div>
    )
  }
}

