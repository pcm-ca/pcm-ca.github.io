import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/pcm'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'skyblue',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
              display: 'flex',
              flexDirection: 'row',
              'justify-content': 'space-between',
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              PCM Computational Applications
            </Link>
            
          </Container>
        </Headroom>

        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
            flexDirection: 'row',
            'justify-content': 'space-between',
          }}
        >
          <nav>
            <ul>
            <li><Link to={prefixLink('/')}>Home</Link></li>
            <li><Link to={prefixLink('/people/')}>People</Link></li>
            <li><Link to={prefixLink('/research/')}>Research</Link></li>
            <li><Link to={prefixLink('/publications/')}>Publications</Link></li>
            <li><Link to={prefixLink('/resources/')}>Resources</Link></li>
            <li><Link to={prefixLink('/contact/')}>Contact us</Link></li>
            
          </ul>
        </nav>
        </Container>

        

        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>

        
      </div>
      
    )
  },
})
