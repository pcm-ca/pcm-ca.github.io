import React from 'react';


class Paper extends React.PureComponent {
    render() {
        const paper = this.props;
        return (
            <span className='paper'>
                {paper.author}, <strong>{paper.title}</strong>, <em>{paper.journal}</em>,
                {paper.volume}, {paper.number}, (<strong>{paper.year}</strong>), pp. {paper.pages}.
                <br/>
                {paper.doi && (<a href={paper.doi} target="_blank">DOI: {paper.doi}</a>)}
                {paper.link && (<a href={paper.link} target="_blank">Download</a>) }
            </span>
        )
    }
}


Paper.propTypes = {
    author: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    journal: React.PropTypes.string.isRequired,
    volume: React.PropTypes.string.isRequired,
    number: React.PropTypes.string.isRequired,
    year: React.PropTypes.string.isRequired,
    pages: React.PropTypes.string.isRequired,
    doi: React.PropTypes.string,
    link: React.PropTypes.string,
}


export default Paper;