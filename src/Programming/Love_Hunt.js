import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Programming'
import Footer from '../Both/Footer'
import five from '../Images/LH/LH_screencap_five.PNG';
import four from '../Images/LH/LH_screencap_four.PNG';
import three from '../Images/LH/LH_screencap_three.png';
import two from '../Images/LH/LH_screencap_two.png';
import one from '../Images/LH/LH_screencap_one.png';
import title from '../Images/LH/lovehunt.png';

class Love_Hunt extends Component {
  render() {

    return (
      <Container style={{ maxWidth: '1200px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Love Hunt</title>
        </Helmet>

        <NavBar />

        <div className="col-xs-12">
          {/* <!-- Start Page --> */}
          <Row>
            <section id="FormatProjectPage" class="header">
              <h1>Love Hunt</h1>
            </section>
          </Row>

          <Row>
            {/* <!-- Trailer --> */}
            <div class="col-xs-12 col-sm-6">
              <Image src={title} class="trailer" />
            </div>


            {/* <!-- About --> */}
            <div class="col-xs-12 col-sm-6">
              <section id="FormatProjectPage" class="header">
                <h1>About the Game</h1>
                <div class="bodytext about-game">
                  Love Hunt is a game about a human magician (the tricks and mirrors kind) that stumbles their way into Creature Academy, a school for human-eating monsters. You must desguise yourself as a Witch to blend in until Halloween night. Armed with only the best cheap tricks your magic kit has to offer, will you find surivie long enough to find true love?
                    </div>
              </section>

              {/* <!-- Download Link --> */}
              <iframe frameBorder="0" src="https://itch.io/embed/445242?bg_color=593470&amp;border_color=593470" width="208" height="167"></iframe>
              <div class="download"></div>
            </div>
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
                      <div className="text"> - Game Writing</div>
                      <div className="text"> - Narrative Design</div>
                      <div className="text"> - Programming</div>
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
                      <div className="text">Ren'Py</div>
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
                      <div className="text"> - Wrote all dialogue pertaining to the character Zoe</div>
                      <div className="text"> - Wrote end of day dialogue</div>
                      <div className="text"> - Assisted in overall charcter creation and overall story</div>
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          {/* <!-- About the Making --> */}
          <Row>
            <Col xs={12} sm={12}>
              <section id="FormatProjectPage" class="header">
                <h1>About the Process</h1>
                <div class="bodytext about-making">
                  Love Hunt was made in less than two days during the SIP Game Jam 2019 in a team of eight (three programmers/writers, one artist/writer, and four artists). Although visual novels/dating sims usually aren't the best type of game to make during a game jam, we were able to create a project I ended up very happy with. This was the first time I prioritized the writing the narrative over the programming in a game I've worked on, and I'm hoping I can do this more in the future.
                    </div>
              </section>
            </Col>
          </Row>

          {/* <!-- Screen Shots --> */}
          <Row>
            <Carousel indicators={false}>
              <Carousel.Item>
                <Image
                  style={{ maxWidth: '75%' }}
                  src={one}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  style={{ maxWidth: '75%' }}
                  src={two}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  style={{ maxWidth: '75%' }}
                  src={three}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  style={{ maxWidth: '75%' }}
                  src={four}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  style={{ maxWidth: '75%' }}
                  src={five}
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

export default Love_Hunt;