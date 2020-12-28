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
import title from '../Images/Cosmic/title_cosmic.png';
import three from '../Images/Cosmic/screencap_three.png';
import two from '../Images/Cosmic/screencap_two.png';
import one from '../Images/Cosmic/screencap_one.png';


class Cosmic extends Component {
    render() {

        return (
            <Container style={{ maxWidth: '1200px' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Cosmic Delights</title>
                </Helmet>

                <NavBar />

                <div className="col-xs-12">

                    <Row>
                        {/* <!-- Start Page --> */}
                        <section id="FormatProjectPage" class="header">
                            <h1>Cosmic Delights</h1>
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
                                    Evangeline the witch is available to take your call and create a custom spell or charm to suit your needs. She's assisted by an authentic forest spirit, who will carefully print your incantation on to parchment before it is mailed by express raven.
                                </div>
                            </section>

                            {/* <!-- Download Link --> */}
                            <iframe frameBorder="0" src="https://itch.io/embed/778238?bg_color=593470&amp;border_color=593470" width="208" height="167" />
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
                                            <div class="text"> - Created a system to allow the Ink script to work in Unity</div>
                                            <div class="text"> - Scripted game flow to be dynamic</div>
                                            <div class="text"> - Imported some art assets and animations</div>
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
                                    Cosmic Delights was made for the Wholesome Game Jam 2020! We all wanted to make something cute and happy, while also not overloading the team. Since the team was small, and the jam was only 48 hours long, we decided to keep it short and simple! 
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
                                    src={three}
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image
                                    className="d-block"
                                    src={two}
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

export default Cosmic;