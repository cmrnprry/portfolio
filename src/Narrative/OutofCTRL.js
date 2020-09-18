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

class OutOfCTRL extends Component {
    render() {
        return (
            <Container style={{ maxWidth: '1200px' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Out of CTRL</title>
                </Helmet>

                <NavBar />

                <div className="col-xs-12">

                    <Row>
                        {/* <!-- Start Page --> */}
                        <section id="FormatProjectPage" className="header">
                            <h1>Out of CTRL</h1>
                        </section>
                    </Row>

                    <Row>
                        {/* <!-- Trailer --> */}
                        <Col xs={12} sm={6}>
                            <div style={{ width: 'auto', height: 'auto' }}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/RDJEwZe17V0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <section id="FormatProjectPage" className="caption padding-slides" align="center">
                                Trailer made by <a href="https://twitter.com/daichifob/" target="_blank" rel="noopener noreferrer" className="resumeLink">
                                    Daichi
                </a>
                            </section>

                        </Col>

                        {/* <!-- About --> */}
                        <Col xs={12} sm={6}>
                            <section id="FormatProjectPage" className="header">
                                <h1>About the Game</h1>
                                <div className="bodytext about-game">
                                    Have a conversation with an old computer. While the computer can type whatever it wants, the only way you can respond is by copy and pasting pieces of the text from previous parts of the conversation.
                </div>
                            </section>

                            {/* <!-- Download Link --> */}
                            <iframe frameBorder="0" src="https://itch.io/embed/694019?bg_color=593470&amp;border_color=593470" width="208" height="167" title="downloadlink"></iframe>
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
                                            <div className="text"> - Wrote all dialogue and text</div>
                                            <div className="text"> - Designed dialogue in a way that responses to the player made sense without the need for context</div>
                                            <div className="text"> - Collaborated with a voice actor to add more life to character dialgoue</div>
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
                                    Out of CTRL was made for the 2020 GMTK Jam. I was brought onto the team a bit late, as I had originally not been participating in the jam, but when the idea was presented to me, I <i>had</i> to work on it. This was my first project where I worked as the only writer, and had no hand in the coding. It was different, but I really enjoyed working on this. The team is planning to release a version that is more responsive to the player in the future!
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
export default OutOfCTRL;