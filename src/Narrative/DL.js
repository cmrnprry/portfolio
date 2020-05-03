import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer';
import title from '../Images/DL/title.png';

class DL extends Component {
    render() {

        return (
            <Container style={{ maxWidth: '1500px' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Don't Look</title>
                </Helmet>

                <NavBar />

                <div class="col-xs-12">
                    {/* <!-- Start Page --> */}
                    <Row>
                        <section id="FormatProjectPage" class="header">
                            <h1>Don't Look</h1>
                        </section>
                    </Row>

                    <Row>
                        {/* <!-- Trailer --> */}
                        <Col xs={12} sm={6}>
                            <Image src={title} class="trailer" />
                        </Col>


                        {/* <!-- About --> */}
                        <Col xs={12} sm={6}>
                            <section id="FormatProjectPage" class="header">
                                <h1>About the Game</h1>
                                <div class="bodytext about-game">
                                    Don't Look is a retelling of the Greek myth of Orpheus and Eurydice. You play as a recently dead Eurydice, content with her afterlife, when Orpheus begs Hades to let him bring her back. Dispite her protests, Hades laments, under the condition that he must never look back to her on his journey back to the surface. Can you make him look back?
                                </div>
                            </section>

                            {/* <!-- Download Link --> */}
                            <iframe frameborder="0" src="https://itch.io/embed/522037?bg_color=593470&amp;border_color=593470" width="208" height="167"></iframe>
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
                                            <div className="text">Twine</div>
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
                                            <div className="text"> - Added gameplay elements to a Greek myth</div>
                                            <div className="text"> - Researched original myth to retain accuracy</div>
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
                                    Don't Look was made over the course of a half a semester for my Narrative for Games class. Greek myths are something that I love, and this was my first time adapting one into something of my own. This was also my first time using Twine for a project, and while it is not fully complete, I plan to add more choices and visuals when I have the time to do so.
                                        </div>
                            </section>
                        </Col>
                    </Row>

                </div>
                <Footer />
            </Container>
        );
    }
}

export default DL;