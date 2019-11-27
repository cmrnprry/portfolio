import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'
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
            <html>
                <head>
                    <title>Queen of Swords</title>
                    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>

                <body>
                    <div class="container">
                        <NavBar />
                        <div class="row">
                            <div class="col-xs-12">

                                {/* <!-- Start Page --> */}
                                <section id="FormatProjectPage" class="header">
                                    <h1>Queen of Swords</h1>
                                </section>

                                {/* <!-- Trailer --> */}
                                <div class="col-xs-12 col-sm-6">
                                    <img src={title} style={{ height: '100%', width: '100%', paddingTop: '25px' }} />
                                </div>

                                {/* <!-- About --> */}
                                <div class="col-xs-12 col-sm-6">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>About the Game</h1>
                                        <div class="bodytext about-game">
                                            A short dungeon crawler about a princess trying to obtain a sword and slay a dragon. She wakes up after a killer party only to find out that the necormancers never de-summoned their minions. The princess now has to fight her way using the swords given to her by our trusty narrator.
                                        </div>
                                    </section>

                                    {/* <!-- Download Link --> */}
                                    <iframe frameborder="0" src="https://itch.io/embed/477218?bg_color=593470&amp;border_color=593470" width="208" height="167" />
                                    <div class="download"></div>
                                </div>

                                {/* <!-- Roles --> */}
                                <div class="col-xs-12 col-sm-4">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>Role</h1>
                                        <div class="text">Programmer</div>
                                    </section>
                                </div>

                                {/* <!-- Engine --> */}
                                <div class="col-xs-12 col-sm-4">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>Engine</h1>
                                        <div class="text">Unity</div>
                                    </section>
                                </div>

                                {/* <!-- Contributions --> */}
                                <div class="col-xs-12 col-sm-4">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>Contributions</h1>
                                        <div class="text">Scripted enemy AI and attack</div>
                                        <div class="text">Scripted player movement</div>
                                        <div class="text">Imported all art assets and added particle effcts</div>
                                    </section>
                                </div>

                                {/* <!-- About the Making --> */}
                                <div class="col-xs-12 col-sm-12">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>About the Process</h1>
                                        <div class="bodytext about-making">
                                            Queen of Swords was made during the Community Jam, which was hosted by a few Youtubers who make tutorials focused on game design. I worked purely as a programer on this project, along with two other programmers, two artists, three sound designers, one writer and a voice actor. This is the biggest team I worked on since my first game jam, but it went surprisingly well. The game only has two levels as of now, but the team plans to continue working on the game.
                    </div>
                                    </section>
                                </div>

                                {/* <!-- Screen Shots --> */}
                                <div class="row">
                                    <Carousel indicators={false}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src={one}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src={two}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src={three}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src={four}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src={five}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>

                        <Footer />

                    </div>
                </body>
            </html>
        );
    }
}

export default Absolute_Unit;