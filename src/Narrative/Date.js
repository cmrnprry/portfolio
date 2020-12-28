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
import four from '../Images/Date/screencap_four.png';
import three from '../Images/Date/screencap_three.png';
import two from '../Images/Date/screencap_two.png';
import one from '../Images/Date/screencap_one.png';
import title from '../Images/Date/title.png';

class Date extends Component {
    render() {

        return (
            <Container style={{ maxWidth: '1200px' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Date N' Dash</title>
                </Helmet>

                <NavBar />

                <div className="col-xs-12">
                    <Row>
                        {/* <!-- Start Page --> */}
                        <section id="FormatProjectPage" class="header">
                            <h1>Date N' Dash</h1>
                        </section>
                    </Row>

                    <Row>
                        {/* <!-- Trailer --> */}
                        <Col xs={12} sm={6}>
                            <img src={title} class="trailer" />
                        </Col>


                        {/* <!-- About --> */}
                        <Col xs={12} sm={6}>
                            <section id="FormatProjectPage" class="header">
                                <h1>About the Game</h1>
                                <div class="bodytext about-game">
                                    Play as Lyla, a confident firefighter who finally has a day off.  You bump into a cute girl, or rather she bumps into you, on your way to your local café.  Will the two of you hit off? Or will you get your heart broken?
                                </div>
                            </section>

                            {/* <!-- Download Link --> */}
                            <iframe frameborder="0" src="https://itch.io/embed/805509?bg_color=593470&amp;border_color=593470" width="208" height="167"></iframe>
                            <div class="download"></div>
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
                                            <div className="text"> - Collaborated with another writer to come up with overall narrative</div>
                                            <div className="text"> - Wrote narrative for days two, three and parts of five</div>
                                            <div className="text"> - Wrote narrative for two of four possible endings</div>
                                            <div className="text"> - Translated the script to work with the Ink Plugin for Unity</div>
                                        </section>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Row>

                    <Row>
                        {/* <!-- About the Making --> */}
                        <div class="col-xs-12 col-sm-12">
                            <section id="FormatProjectPage" class="header">
                                <h1>About the Process</h1>
                                <div class="bodytext about-making">
                                    Made for the Jam-O-Lanutrn Game Jam 2020, Date N' Dash was made when someone posed the question: "What if a dating sim, but everytime you died it got <i>faster?"</i> This led the team to creating a Groundhog Day-esc dating sim that was really fun to create. The team managed to finish the game before the end of the jam with a script that was 69 pages long, eleven different music tracks and some voice acting!
                                </div>
                            </section>
                        </div>
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
                        </Carousel>
                    </Row>
                </div>

                <Footer />
            </Container >
        );
    }
}

export default Date;