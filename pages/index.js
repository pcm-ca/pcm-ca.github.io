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
        <p>Welcome to the PCM Computational Applications Research Group webpage.</p>
        
        <div class="img-fluid">
          <Carousel >
            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_0.jpg"/>
              </center>
              <Carousel.Caption>
                <h6>Final configurations for different anisotropy surface values of a manganite nanoparticle.</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_1.jpg"/>
              </center>
              <Carousel.Caption>
                <h6>Simulation of a Bit Patterned Media of Cobalt.</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_2.jpg"/>
              </center>
              <Carousel.Caption>
                <h6>Simulation of heat assisted magnetic recording of a magnetic nanotorus.</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_3.jpg"/>
              </center>
              <Carousel.Caption>
                <h6>Simulation of fission gas release in pellets of uranium oxide.</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_4.jpg"/>
              </center>
              <Carousel.Caption>
                <h6>Scheme of a magnetic graphene to study magnetic compensation phenomena.</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <center>
                <img height={300} src="images/fig_5.jpg"/>
              </center>
              <Carousel.Caption>
                <h6>Schemes of Core/Shell nanoparticles to study the influence of the interfacial roughness.</h6>
              </Carousel.Caption>
            </Carousel.Item>
            
            
          </Carousel>
          </div>
        
        <br/>
        <h2>About us</h2>
        <p>PCM Computational Applications (where  <b>PCM</b> stands for Physics, Chemistry and Mathematics) is a computational physics and applied mathematics research group 
          that uses analytical theory and computer simulations to understand interesting phenomena in different fields of physics, chemestry and mathematics.
          Our research focuses mainly on the study of mechanical and magnetic properties of nano and bulk materials. As part of our work, we have also developed an open-source software package, <a className="link" href="/vegas/">𝕍egas</a>, for the atomistic simulation of magnetic materials.</p>
        <h2>Where are we located ?</h2>
        <p>Our research group is located at the Universidad Nacional de Colombia - Sede Manizales - Campus La Nubia.</p>
        <h2>The bosses</h2>
        <p>Our research group has two bosses. Dr. <a className="link" href="mailto:erestrepopa@unal.edu.co">Elisabeth Restrepo Parra</a> is in charge of the research 
        in physics and chemestry, and Dr. <a className="link" href="mailto:jcrianoro@unal.edu.co">Juan Carlos Riaño Rojas</a> is in charge of the research in applied mathematics.</p>
      </div>
    )
  }
}

