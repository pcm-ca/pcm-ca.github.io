import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import info from '../pages/people/info'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Topic extends React.PureComponent {
    render() {
        console.log(this.props);
        return (
            <div className='topic'>
                <div className="topic--image--div">
                    <Link className="link" to={prefixLink(`${this.props.path}`)}>
                    <img className="topic--image" src={this.props.path + this.props.data.figure} alt="Img"/>
                    </Link>
                </div>
                <div className="topic--info">
                    <strong>
                        <Link className="link" to={prefixLink(`${this.props.path}`)}>
                            {this.props.data.title}
                        </Link>
                    </strong>
                    <span className="topic--abstract">
                        <b>Abstract:</b> {this.props.data.abstract}
                    </span>
                    <span className="topic--in-charge">
                        <b>{"People in charge: "}</b>
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

export default Topic