import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Carousel } from 'react-bootstrap'
import '../css/bootstrap.scss'


export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />

        <h1>
          Homepage
        </h1>
        <p>Welcome to the PCM Computational Applications Group’s webpage at the Universidad Nacional de Colombia.</p>
        
        <div class="img-fluid">
          <Carousel >
            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_0.jpg"/>
              </center>
              <Carousel.Caption>
                <h4>Final configurations for different anisotropy surface values of a manganite nanoparticle.</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_1.jpg"/>
              </center>
              <Carousel.Caption>
                <h4>Simulation of a Bit Patterned Media of Cobalt.</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_2.jpg"/>
              </center>
              <Carousel.Caption>
                <h4>Simulation of heat assisted magnetic recording of a magnetic nanotorus.</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_3.jpg"/>
              </center>
              <Carousel.Caption>
                <h4>Simulation of fission gas release in pellets of uranium oxide.</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_4.jpg"/>
              </center>
              <Carousel.Caption>
                <h4>Scheme of a magnetic graphene to study magnetic compensation phenomena.</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_5.jpg"/>
              </center>
              <Carousel.Caption>
                <h4>Schemes of Core/Shell nanoparticles to study the influence of the interfacial roughness.</h4>
              </Carousel.Caption>
            </Carousel.Item>
            
            
          </Carousel>
          </div>
        
        <br/>
        <h2>What are we ?</h2>
        <p>We are an investigation group interested in studying many topics in
          computational physics and applied mathematics, in special, magnetic,
          mechanical and nanoscale properties.</p>
        <h2>Where are we ?</h2>
        <p>We are at the Universidad Nacional de Colombia.
          The group's core is in <a className="link" target='_blank' href="https://es.wikipedia.org/wiki/Manizales">Manizales</a> in the Nubia Campus, near of the airport of Manizales.</p>
        <h2>What does <b style={{color: "black"}}>PCM</b> mean?</h2>
        <p><b style={{color: "black"}}>PCM</b> are the abbreviations for Physics, Chemistry and Mathematics.</p>
        <h2>Who is(are) the Boss(es) ?</h2>
        <p>We have really two bosses. One of them is the boss
          for the physics and chemistry students and her name
          is <a className="link" href="mailto:erestrepopa@unal.edu.co">Elisabeth Restrepo Parra</a>. The another boss is for
          the mathematics students and his name is <a className="link" href="mailto:jcrianoro@unal.edu.co">Juan Carlos Riaño Rojas</a>.
          Both of them are teachers of the Universidad Nacional de Colombia
          and belong to the Faculty of exact and natural sciences.</p>
          <h2>Do you want to know another things?</h2>
          <p>Please write us.</p>
      </div>
    )
  }
}

