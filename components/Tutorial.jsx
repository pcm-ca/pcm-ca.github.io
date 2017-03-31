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
                        {moment.tz(this.props.data.date, "America/Bogota").format('DD/MM/YYYY')}
                    </span>
                </div>
                <div className="tutorial--info">
                    <Link className="link-bold" to={prefixLink(`${this.props.path}`)}>
                        {this.props.data.title}
                    </Link>
                    <span className="tutorial--in-charge">
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

export default Tutorial