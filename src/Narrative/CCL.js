import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import four from '../Images/CCL/CCL_screencap_four.JPG';
import three from '../Images/CCL/CCL_screencap_three.JPG';
import two from '../Images/CCL/CCL_screencap_two.JPG';
import one from '../Images/CCL/CCL_screencap_one.jpg';
import title from '../Images/CCL/CCL_Title.jpg';

class CCL extends Component {
  render() {

    return (
      <Container style={{ maxWidth: '1500px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Card Crossed Lovers</title>
        </Helmet>

        <NavBar />

        <div className="col-xs-12">

          {/* <!-- Start Page --> */}
          <Row>
            <section id="FormatProjectPage" className="header">
              <h1>Card Crossed Lovers</h1>
            </section>
          </Row>

          <Row>
            {/* <!-- Trailer --> */}
            <Col xs={12} sm={6}>
              <Image src={title} className="trailer" />
            </Col>


            {/* <!-- About --> */}
            <Col xs={12} sm={6}>
              <section id="FormatProjectPage" className="header">
                <h1>About the Game</h1>
                <div className="bodytext about-game">
                  Card Crossed Lovers is a game where you play as a Tarot card reader that does not believe in the fortune telling of the card, and is only trying to make a quick buck. However, you soon learn that your power as a Tarot reader is more real when a couple comes in seeking help over their failing marriage. Will you save their marriage? Or push them further apart?
              </div>
              </section>

              {/* <!-- Download Link --> */}
              <iframe frameBorder="0" src="https://itch.io/embed/509020?bg_color=593470&amp;border_color=593470" width="208" height="167"></iframe>
              <div className="download"></div>
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
                      <div className="text"> - Implemented all art assets</div>
                      <div className="text"> - Created particle effects for scene changes</div>
                      <div className="text"> - Implemented UI/UX</div>
                      <div className="text"> - Wrote information about each Tarot card</div>
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
                  Card Crossed Lovers was made in a week during a game jam hosted by the Northeastern Game Dev Club (of which I am an EBord member) and the Emerson Game Dev Club. It was created in a smaller team of mainly programmers, and the main idea behind the game's creation was "What if a tarot card reader acidentally gave out real* fortunes?" The team then went on to create a narrative about a failing marriage, and the differnt outcomes of a reading. While the team really enjoyed the making of the game, we will not be developing further.
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
            </Carousel>
          </Row>
        </div>

        <Footer />

      </Container >
    );
  }
}

export default CCL;