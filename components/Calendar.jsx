import React from 'react'
import moment from 'moment-timezone'
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
                        {moment.tz(this.props.data.date, "America/Bogota").calendar()}
                    </span>
                    <span className="event--address">
                        @ {_.get(this, 'props.data.address', 'PCM')}
                    </span>
                </div>
                <div className="event--info">
                        <Link className="link-bold" to={prefixLink(`${this.props.path}`)}>
                            {this.props.data.title}
                        </Link>
                    <span className="event--in-charge">
                        {_.map(this.props.data.inCharge, person =>
                            <div>
                                {_.has(info, person) ? (
                                    <span>
                                        <Link 
                                            className="link"
                                            to={prefixLink(`/people/${person}/`)}
                                        >
                                            {info[person].name}
                                        </Link>
                                    </span>
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
        const events_new_first = _.orderBy(
            this.props.events,
            'data.date',
            'desc'
        )
        const events_old_first = _.orderBy(
            this.props.events,
            'data.date'
        )
        return (
            <div>
                <h2 id="upcoming">Upcoming events</h2>
                <ul className='calendar'>
                    {_.map(events_old_first, event => (
                        <li key={event.data.title + event.data.date}>
                            {
                                moment.tz(event.data.date, "America/Bogota") > moment.tz("America/Bogota") ?
                                (<Event {...event} />)
                                :
                                (<span/>)
                            }
                        </li>
                    ))}
                </ul>

                <hr/>
                <h2 id="past">Past events</h2>
                <ul className='calendar'>
                    {_.map(events_new_first, event => (
                        <li key={event.data.title + event.data.date}>
                            {
                                moment.tz(event.data.date, "America/Bogota") < moment.tz("America/Bogota") ?
                                (<Event {...event} />)
                                :
                                (<span/>)
                            }
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Calendar