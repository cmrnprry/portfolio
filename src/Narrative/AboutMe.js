import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import me from '../Images/Me.png';

class AboutMe extends Component {
  render() {

    return (
      <Container style={{ maxWidth: '1300px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Me</title>
        </Helmet>

        <NavBar />

        {/* <!--About Text--> */}
        <div className="col-xs-12">
          <div className="format">
            <h1>About Me</h1>
          </div>

          <Row>
            <Col sm={5} xs={12} className="format">
              <Image src={me} />
            </Col>

            <Col sm={6} xs={12} className="format">
              <p>
                Thank you for visiting my website! I created the it from the ground up! My name is Cam and I am currently a student at Northeastern University, studying Computer Science and Game Development. I have been interested in games since high school. Since becoming a student at Northeastern, I have worked on a variety of games, mainly working as either a writer or {' '}
                <OverlayTrigger
                  overlay=
                  {
                    <Tooltip id={`tooltip-top`}>
                      Check out my work as a programmer!
                          </Tooltip>
                  } >
                  <a href="index" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
                    programmer (gameplay or UI/UX).
                        </a>
                </OverlayTrigger>
              </p>
            </Col>

            <Col xs={12} className="format">
              <p>
                I was lucky enough to intern at Disruptor Beam this past summer as an engineering intern. While there I worked on Player Support Tools, hooking up the UI/UX art to the game and programming in gameplay elements. I worked on two games, one was Archer: Danger Phone and I can't talk about he other... Yet. In addtion to my internship, I have worked on a variety of games both in and out school. You can see more about them on the <a href="home" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>"Projects"</a> section of the page.
                    </p>

              <p class="padding4">
                Games play a huge role in my life, but they are not an all consuming part of my life. I also enjoy reading, painting (both water color and acrylic), baking and volunteering!
                    </p>
            </Col>
          </Row>
        </div>

        <Footer />
      </Container>
    );
  }
}

export default AboutMe;