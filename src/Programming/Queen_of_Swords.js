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
import title from '../Images/QOS/swords.png';
import five from '../Images/QOS/qos_screencap_five.PNG';
import four from '../Images/QOS/qos_screencap_four.PNG';
import three from '../Images/QOS/qos_screencap_three.PNG';
import two from '../Images/QOS/qos_screencap_two.PNG';
import one from '../Images/QOS/qos_screencap_one.PNG';


class Absolute_Unit extends Component {
    render() {

        return (
            <Container style={{ maxWidth: '1300px' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Queen of Swords</title>
                </Helmet>

                <NavBar />

                <div className="col-xs-12">

                    <Row>
                        {/* <!-- Start Page --> */}
                        <section id="FormatProjectPage" class="header">
                            <h1>Queen of Swords</h1>
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
                                    A short dungeon crawler about a princess trying to obtain a sword and slay a dragon. She wakes up after a killer party only to find out that the necormancers never de-summoned their minions. The princess now has to fight her way using the swords given to her by our trusty narrator.
                                </div>
                            </section>

                            {/* <!-- Download Link --> */}
                            <iframe frameBorder="0" src="https://itch.io/embed/477218?bg_color=593470&amp;border_color=593470" width="208" height="167" />
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
                                            <div class="text"> - Scripted enemy AI and attack</div>
                                            <div class="text"> - Scripted player movement</div>
                                            <div class="text"> - Imported all art assets and added particle effcts</div>
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
                                    Queen of Swords was made during the Community Jam, which was hosted by a few Youtubers who make tutorials focused on game design. I worked purely as a programer on this project, along with two other programmers, two artists, three sound designers, one writer and a voice actor. This is the biggest team I worked on since my first game jam, but it went surprisingly well. The game only has two levels as of now, but the team plans to continue working on the game.
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

                            <Carousel.Item>
                                <Image
                                    className="d-block"
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