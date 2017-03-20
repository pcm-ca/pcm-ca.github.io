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
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: 40,
                fontWeight: "bold",
                marginBottom: rhythm(1),
              }}
            >
              PCM Computational Applications
            </Link>

            <nav>
              <ul>
                <li><Link activeStyle={{ color: 'crimson' }} to={prefixLink('/people/')}>People</Link></li>
                <li><Link activeStyle={{ color: 'crimson' }} to={prefixLink('/research/')}>Research</Link></li>
                <li><Link activeStyle={{ color: 'crimson' }} to={prefixLink('/publications/')}>Publications</Link></li>
                <li><Link activeStyle={{ color: 'crimson' }} to={prefixLink('/resources/')}>Resources</Link></li>
                <li><Link activeStyle={{ color: 'crimson' }} to={prefixLink('/contact/')}>Contact us</Link></li>

              </ul>
            </nav>

          </Container>
        </Headroom>

        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>


      </div>

    )
  },
})
