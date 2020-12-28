import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Programming'
import Footer from '../Both/Footer'
import title from '../Images/Tamles/tamale_title.png';
import four from '../Images/Tamles/screencap_four.png';
import three from '../Images/Tamles/screencap_three.png';
import two from '../Images/Tamles/screencap_two.png';
import one from '../Images/Tamles/screencap_one.png';


class Tamles extends Component {
    render() {

        return (
            <Container style={{ maxWidth: '1200px' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Tamales: Con Familia</title>
                </Helmet>

                <NavBar />

                <div className="col-xs-12">

                    <Row>
                        {/* <!-- Start Page --> */}
                        <section id="FormatProjectPage" class="header">
                            <h1>Tamales: Con Familia</h1>
                        </section>
                    </Row>

                    <Row>
                        {/* <!-- Trailer --> */}
                        <Col xs={12} sm={6}>
                            <Image src={title} style={{ height: '100%', width: '100%', paddingTop: '25px' }} />
                        </Col>

                        {/* <!-- About --> */}
                        <Col xs={12} sm={6}>
                            <section id="FormatProjectPage" class="header">
                                <h1>About the Game</h1>
                                <div class="bodytext about-game">
                                    Play as a shy young child preparing tamales with their family. Listen in on the conversations of your mother, her sisters, and your grandmother. Touches on topics of loss and change. Takes place in US America with reminiscence of Mexico.
                                </div>
                            </section>

                            {/* <!-- Download Link --> */}
                            <iframe frameBorder="0" src="https://itch.io/embed/775242?bg_color=593470&amp;border_color=593470" width="208" height="167" />
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
                                            <div class="text"> - Scripted tamale making gameplay</div>
                                            <div class="text"> - Imported art assets and animations</div>
                                        </section>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Row>

                    <Row>
                        {/* <!-- About the Making --> */}
                        <Col xs={12} sm={12}>
                            <section id="FormatProjectPage" class="header">
                                <h1>About the Process</h1>
                                <div class="bodytext about-making">
                                    Tamales: Con Familia was a game that was made because our writer, <a rel="noopener noreferrer" target="_blank" class="resumeLink" href="https://www.samanthaivonne.com/">Samantha Ortiz</a> had an idea for a game for the Hispanic Heritage Month jam. The main focus of the game is the narrative, which can be read in either English or Spanish, while having simple, repetative gameplay as secondary. Tamales: Con Familia was Unidos Online Game Jam Finalist for art, audio and narrative.
                                </div>
                            </section>
                        </Col>
                    </Row>

                    <Row>
                        {/* <!-- Screen Shots --> */}
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <Image
                                    className="d-block"
                                    src={one}
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image
                                    className="d-block"
                                    src={two}
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image
                                    className="d-block"
                                    src={three}
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image
                                    className="d-block"
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

export default Tamles;