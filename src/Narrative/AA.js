import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import trailer from '../Images/AliceecliA/Alice_Prototype.mp4';
import four from '../Images/AliceecliA/alice_screencap_four.PNG';
import three from '../Images/AliceecliA/alice_screencap_three.PNG';
import two from '../Images/AliceecliA/alice_screencap_two.PNG';
import one from '../Images/AliceecliA/alice_screencap_one.PNG';

class AliceecliA extends Component {
  render() {
    return (
      <Container style={{ maxWidth: '1200px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Alice ecilA</title>
        </Helmet>

        <NavBar />

        <div className="col-xs-12">

          <Row>
            {/* <!-- Start Page --> */}
            <section id="FormatProjectPage" className="header">
              <h1>Alice ecliA</h1>
            </section>
          </Row>

          <Row>
            {/* <!-- Trailer --> */}
            <Col xs={12} sm={6}>
              <div style={{ width: 'auto', height: 'auto', paddingTop: '50px' }}>
                <video width="100%" height="auto" controls>
                  <source src={trailer} type="video/mp4" />
                </video>
              </div>

              <section id="FormatProjectPage" className="caption padding-slides" align="center">
                Original Sound Design and Music by <a href="https://www.daynaambrosio.com/" target="_blank" rel="noopener noreferrer" className="resumeLink">
                  Dayna Ambrosio
                </a>
              </section>

            </Col>

            {/* <!-- About --> */}
            <Col xs={12} sm={6}>
              <section id="FormatProjectPage" className="header">
                <h1>About the Game</h1>
                <div className="bodytext about-game">
                  Our heroine, Alice, must traverse through a dangerous world to get home. She finds that all is not as it seems- there is another world parallel to hers, where everything is turned on its head. While her reflection helps guide her, she must use the mirrors scattered around to bring her back home.
                </div>
              </section>

              {/* <!-- Download Link --> */}
              <iframe frameBorder="0" src="https://itch.io/embed/404467?bg_color=593470&amp;border_color=593470" width="208" height="167" title="downloadlink"></iframe>
            </Col>
          </Row>

          <Row>
            <CardDeck>
              {/* <!-- Roles --> */}
              <Card style={{ border: '1px solid rgba(0,0,0,0)', width: '40rem', backgroundColor: "rgba(0,0,0,0)" }}>
                <Card.Body>
                  <Card.Title>
                    <section id="FormatProjectPage" className="header">
                      <h1>Role</h1>
                    </section></Card.Title>
                  <Card.Text>
                    <section id="FormatProjectPage" className="header">
                      <div className="text"> - Programming</div>
                      <div className="text"> - Narrative Design</div>
                      <div className="text"> - Game Writing</div>
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* <!-- Engine --> */}
              <Card style={{ border: '1px solid rgba(0,0,0,0)', width: '40rem', backgroundColor: "rgba(0,0,0,0)" }}>
                <Card.Body>
                  <Card.Title>
                    <section id="FormatProjectPage" className="header">
                      <h1>Engine</h1>
                    </section></Card.Title>
                  <Card.Text>
                    <section id="FormatProjectPage" className="header">
                      <div className="text">Unity</div>
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* <!-- Contributions --> */}
              <Card style={{ border: '1px solid rgba(0,0,0,0)', width: '40rem', backgroundColor: "rgba(0,0,0,0)" }}>
                <Card.Body>
                  <Card.Title>
                    <section id="FormatProjectPage" className="header">
                      <h1>Contributions</h1>
                    </section></Card.Title>
                  <Card.Text>
                    <section id="FormatProjectPage" className="header">
                      <div className="text"> - Scripted dialogue system and assisted in scripting mirror behaviour</div>
                      <div className="text"> - Designed the UI/UX</div>
                      <div className="text"> - Animated all charcter talk and run animations</div>
                      <div className="text"> - Drew speach bubbles, title card, and half the level backgrounds</div>
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            {/* <!-- About the Making --> */}
            <Col xs={12} sm={12}>
              <section id="FormatProjectPage" className="header">
                <h1>About the Process</h1>
                <div className="bodytext about-making">
                  Alice elicA is a game that was made for my Game Concept and Devlopment class. It was created by a three person team, one artist/level designer, one programmer/background artist, and myself. We used Unity and C# to create a 2D puzzle platformer. Alice ecilA uses three types of mirrors to travse the levels. There a gravity flipping, teleporting, and bouncing mirror. Narraitively, each mirror will be "taught" to Alice by the residents of Wonderland as she comes across them. The game is still in development, as we are currently working with an audio engineer to implement orignal music and sound effects.
                </div>
              </section>
            </Col>
          </Row>

          {/* <!-- Screen Shots --> */}
          <Row>
            <Carousel indicators={false}>
              <Carousel.Item>
                <Image
                  style={{ maxWidth: '50%' }}
                  className="d-block w-100"
                  src={one}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  style={{ maxWidth: '50%' }}
                  className="d-block w-100"
                  src={two}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  style={{ maxWidth: '50%' }}
                  className="d-block w-100"
                  src={three}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  style={{ maxWidth: '50%' }}
                  className="d-block w-100"
                  src={four}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Row>
        </div>

        <Footer />
      </Container >
    );
  }
}
export default AliceecliA;