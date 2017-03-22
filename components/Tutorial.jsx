import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import info from '../pages/people/info'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Tutorial extends React.PureComponent {
    render() {
        console.log(this.props);
        return (
            <div className='tutorial'>
                <div className="tutorial--venue">
                    <span className="tutorial--date">
                        {moment.utc(this.props.data.date).calendar()}
                    </span>
                </div>
                <div className="tutorial--info">
                    <strong>
                        <Link className="link" to={prefixLink(`${this.props.path}`)}>
                            {this.props.data.title}
                        </Link>
                    </strong>
                    <span className="tutorial--in-charge">
                        {_.map(this.props.data.inCharge, person =>
                            <div>
                                {_.has(info, person) ? (
                                    <span><Link className="link" to={prefixLink(`/people/${person}/`)}>{person}</Link></span>
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

export default Tutorial