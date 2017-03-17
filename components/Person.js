import React from 'react';
import {Link} from 'react-router';


const Person = ({ name, email, picture, link }) => (
    <Link className='person' to={link}>
        <center><img src={picture} alt="foto" className="person--picture" /></center>
        <div className="person--info">
            <span className="person--name">{name}</span>
            <small className="person--email">{email}</small>
        </div>
    </Link>
);



Person.propTypes = {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    picture: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
}


export default Person;