import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/pcm'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(0.5),
          }}
          style={{
            background: '#B9BDEF',
            borderBottom: '2px solid black'
          }}
        >
          <Container
            style={{
              maxWidth: 1000,
              paddingTop: 0,
              padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
              paddingBottom: 10,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            
              
            <Link className="link-logo-and-name-pcm"
              to={prefixLink('/')}
              title="Home"
              style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: 40,
                fontWeight: "bold",
                marginBottom: rhythm(0.0),
              }}
            >
              <Container className="logo-and-name">
                <img className="logo-pcm" src={prefixLink('/android-icon-72x72.png')} alt=""/>
                <div className="name-pcm">
                  PCM Computational Applications
                </div>
                <img className="logo-un" src={prefixLink('/images/logo-un.png')} alt=""/>
              </Container>
            </Link>


            <nav>
              <ul>
                <li><Link className="link-bold" activeStyle={{ color: 'crimson' }} to={prefixLink('/people/')}>People</Link></li>
                <li><Link className="link-bold" activeStyle={{ color: 'crimson' }} to={prefixLink('/research/')}>Research</Link></li>
                <li><Link className="link-bold" activeStyle={{ color: 'crimson' }} to={prefixLink('/publications/')}>Publications</Link></li>
                <li><Link className="link-bold" activeStyle={{ color: 'crimson' }} to={prefixLink('/resources/')}>Resources</Link></li>
                <li><Link className="link-bold" activeStyle={{ color: 'crimson' }} to={prefixLink('/calendar/')}>Calendar</Link></li>
                <li><Link className="link-bold" activeStyle={{ color: 'crimson' }} to={prefixLink('/contact/')}>Contact us</Link></li>

              </ul>
            </nav>

          </Container>
        </Headroom>

        <Container
          style={{
            maxWidth: 1000,
            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>

        <div className="bottomText">
          <div>PCM Computational Applications, designed by: {" "}
            <Link className="link" to={prefixLink('/people/jdalzatec/')}>jdalzatec</Link>, {" "}
            <Link className="link" to={prefixLink('/people/odarbelaeze/')}>odarbelaeze</Link></div>
        </div>
      </div>

    )
  },
})
