import React from 'react'
import _ from 'lodash'
import bib from '../pages/people/bib'
import Paper from './Paper'
import crypto from 'crypto'


const PersonPage = ({ name, nameInPapers, email, picture, title, actual, education, research, publications, achievements}) => (
    <div className="person-page">
        <div className="person-page-initial">
            <img src={picture} alt="foto" className="person-page-picture" />
            <div className="person-page-info">
                <h2>{name}</h2>
                <strong>{title}</strong>
                <strong>{actual}</strong>
                <a className="link" href={"mailto:" + email}><strong>{email}</strong></a>
            </div>
        </div>

        <hr/>
        <h2>Education</h2>
        <div>
            {_.map(education, (props, key) => (
                <ul key={key}>
                    <li>{props}</li>
                </ul>
            ))}
        </div>

        {
            achievements && (
                <div>
                    <hr/>
                    <h2>Achievements</h2>
                    <div>
                        {_.map(achievements, (props, key) => (
                            <ul key={key}>
                                <li>{props}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            )
        }
        

        <hr/>
        <h2>Current Research</h2>
        <div>
            {_.map(research, (props, key) => (
                <ul key={key}>
                    <li>{props}</li>
                </ul>
            ))}
        </div>
        
        <hr/>
        <h2>Publications</h2>
        <div>
            <ol>
                {_.map(
                    _.filter(bib.papers, paper => _.includes(paper.author, nameInPapers)),
                    paper => (
                        <li key={crypto.createHash('md5').update(paper.title).digest('hex')}>
                            <Paper {...paper} />
                        </li>
                    )
                )}
            </ol>
        </div>
    </div>
);


PersonPage.propTypes = {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    picture: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    actual: React.PropTypes.string.isRequired,
    education: React.PropTypes.array.isRequired,
}


export default PersonPage;