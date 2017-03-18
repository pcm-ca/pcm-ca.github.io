import React from 'react';
import _ from 'lodash'

const Person_page = ({ name, email, picture, title, actual, education, research, publications, achievements}) => (
    <div className="person-page">
        <div className="person-page-initial">
            <img src={picture} alt="foto" className="person-page-picture" />
            <div className="person-page-info">
                <h2>{name}</h2>
                <strong>{title}</strong>
                <strong>{actual}</strong>
                <a href={"mailto:" + email}><strong>{email}</strong></a>
            </div>
        </div>

        <hr/>
        <h2>Education</h2>
        <div>
            {_.map(education, (props, key) => (
                <ul>
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
                            <ul>
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
                <ul>
                    <li>{props}</li>
                </ul>
            ))}
        </div>
        
        <hr/>
        <h2>Publications</h2>
        <div>
            {_.map(publications, (papers_year, year) => (
                <ul>
                    <h3>
                        {year}
                    </h3>

                    {_.map(papers_year, (paper, key) => (
                        <ul>
                            <li>
                            {_.map(paper.authors, (author, key2) => (
                                author + ", "
                            ))}
                            <b>{paper.title}</b>
                            {", " + paper.journal +
                             ", vol. " + paper.volume +
                             ", " + paper.issue +
                             ", (" + year + ")" +
                             ", pp. " + paper.pages.split(" ")}.
                            <br/>
                            {paper.doi && (<a href={paper.doi} target="_blank">DOI: {paper.doi}</a>) }
                            {paper.link && (<a href={paper.link} target="_blank">Download</a>) }
                            </li>
                        </ul>
                    ))}
                </ul>
            ))}
        </div>
        <hr/>
        

    </div>
);



Person_page.propTypes = {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    picture: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    actual: React.PropTypes.string.isRequired,
    education: React.PropTypes.array.isRequired,
}


export default Person_page;