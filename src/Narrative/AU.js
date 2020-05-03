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
import five from '../Images/AU/au_screencap_five.PNG';
import four from '../Images/AU/au_screencap_four.PNG';
import three from '../Images/AU/au_screencap_three.PNG';
import two from '../Images/AU/au_screencap_two.PNG';
import one from '../Images/AU/au_screencap_one.PNG';

class Absolute_Unit extends Component {
  render() {

    return (
      <Container style={{ maxWidth: '1500px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Absolute Unit</title>
        </Helmet>

        <NavBar />

        <div className="col-xs-12">

          <Row>
            {/* <!-- Start Page --> */}
            <section id="FormatProjectPage" className="header">
              <h1>Absolute Unit</h1>
            </section>
          </Row>

          <Row>
            {/* <!-- Trailer --> */}
            <div className="col-xs-12 col-sm-6">
              <div className="video-responsive">
                <iframe width="300" height="300" className="hover-padding" src="https://www.youtube.com/embed/e8FI4RX8EYs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" />
              </div>
            </div>

            {/* <!-- About --> */}
            <div className="col-xs-12 col-sm-6">
              <section id="FormatProjectPage" className="header">
                <h1>About the Game</h1>
                <div className="bodytext about-game">
                  Absolute Unit is a game about a skinny dog named Boofus who doesn't have an owner. He sees that all the other happy dogs with their owners are a little chubby. He decides to embark on a quest to get all the treats to become an absolute unit, and get an owner. Play as Boofas as you beg for treats, make friends, and become the biggest boy.
                    </div>
              </section>

              {/* <!-- Download Link --> */}
              <iframe frameBorder="0" src="https://itch.io/embed/406198?bg_color=593470&amp;border_color=000000" width="208" height="167" />
              <div className="download"></div>
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
                    </section>
                  </Card.Title>
                  <Card.Text>
                    <section id="FormatProjectPage" className="header">
                      <div className="text"> - Programming</div>
                      <div className="text"> - Narrative Design</div>
                      <div className="text"> - Game Design</div>
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
                    </section>
                  </Card.Title>
                  <Card.Text>
                    <section id="FormatProjectPage" className="header">
                      <div className="text">RPG Maker VX Ace</div>
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
                      <div className="text"> - Import audio and art assets</div>
                      <div className="text"> - Balance encounters</div>
                      <div className="text"> - Write dialogue/flavor text</div>
                      <div className="text"> - Create the world layout (using the artist's assests) and character interactions</div>
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          {/* <!-- About the Making --> */}
          <Row>
            <Col xs={12} sm={12}>
              <section id="FormatProjectPage" className="header">
                <h1>About the Process</h1>
                <div className="bodytext about-making">
                  Absolute Unit was made in less than 48 hours during a game jam hosted by Berklee College. I worked on a team with only one artist and two sound designers/composers. Since I was the only one with programming experience on the team, we decided to use RPG Maker. This allowed me to more easily import the art and music, while also focusing on the design and programming of the game.
                </div>
              </section>
            </Col>
          </Row>



          {/* <!-- Screen Shots --> */}
          <Row>
            <Carousel indicators={false}>
              <Carousel.Item>
                <Image
                  src={one}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src={two}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src={three}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src={four}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
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

export default Absolute_Unit;