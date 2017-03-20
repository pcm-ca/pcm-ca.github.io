import React from 'react'
import moment from 'moment'
import _ from 'lodash'


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
                        {this.props.data.title}
                    </strong>
                    <span className="event--in-charge">
                        {this.props.data.inCharge}
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