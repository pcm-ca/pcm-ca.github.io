import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import info from '../pages/people/info'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Event extends React.PureComponent {
    render() {
        return (
            <div className='event'>
                <div className="event--venue">
                    <span className="event--type">
                        {_.get(this, 'props.data.type', 'seminar').toUpperCase()}
                    </span>
                    <span className="event--date">
                        {moment.utc(this.props.data.date).calendar()}
                    </span>
                    <span className="event--address">
                        @ {_.get(this, 'props.data.address', 'PCM')}
                    </span>
                </div>
                <div className="event--info">
                    <strong className="event--title">
                        <Link to={prefixLink(`/calendar/${this.props.file.name}/`)}>
                            {this.props.data.title}
                        </Link>
                    </strong>
                    <span className="event--in-charge">
                        {_.map(this.props.data.inCharge, person =>
                            <div>
                                {_.has(info, person) ? (
                                    <span><Link to={prefixLink(`/people/${person}/`)}>{person}</Link></span>
                                )
                                :
                                (
                                    <span>{person}</span>
                                )
                                }
                            </div>
                        )}
                    </span>
                </div>
            </div>
        )
    }
}


class Calendar extends React.PureComponent {
    render() {
        const events = _.orderBy(
            this.props.events,
            'data.date',
            'desc'
        )
        return (
            <ul className='calendar'>
                {_.map(events, event => (
                    <li key={event.data.title + event.data.date}>
                        <Event {...event} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default Calendar