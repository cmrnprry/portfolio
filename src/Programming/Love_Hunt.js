import React, { Component } from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'
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
      <html>
        <head>
          <title>Love Hunt</title>
          <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
          <link rel="stylesheet" type="text/css" href="mystyle.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
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
                  <h1>Love Hunt</h1>
                </section>

                {/* <!-- Trailer --> */}
                <div class="col-xs-12 col-sm-6">
                  <img src={title} class="trailer" />
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
                  <iframe frameborder="0" src="https://itch.io/embed/445242?bg_color=593470&amp;border_color=593470" width="208" height="167"></iframe>
                  <div class="download"></div>
                </div>

                {/* <!-- Role(s) --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header">
                    <h1>Role(s)</h1>
                    <div class="text">Game Writing</div>
                    <div class="text">Narrative Designer</div>
                    <div class="text">Programmer</div>
                  </section>
                </div>

                {/* <!-- Engine --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header">
                    <h1>Engine</h1>
                    <div class="text">Ren'Py</div>
                  </section>
                </div>

                {/* <!-- Contributions --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header">
                    <h1>Contributions</h1>
                    <div class="text">Wrote all dialogue pertaining to the character Zoe</div>
                    <div class="text">Wrote end of day dialogue</div>
                    <div class="text">Assisted in overall charcter creation and overall story</div>
                  </section>
                </div>

                {/* <!-- About the Making --> */}
                <div class="col-xs-12 col-sm-12">
                  <section id="FormatProjectPage" class="header">
                    <h1>About the Process</h1>
                    <div class="bodytext about-making">
                      Love Hunt was made in less than two days during the SIP Game Jam 2019 in a team of eight (three programmers/writers, one artist/writer, and four artists). Although visual novels/dating sims usually aren't the best type of game to make during a game jam, we were able to create a project I ended up very happy with. This was the first time I prioritized the writing the narrative over the programming in a game I've worked on, and I'm hoping I can do this more in the future.
                    </div>
                  </section>
                </div>

                {/* <!-- Screen Shots --> */}
                <div class="row">
                  <Carousel indicators={false}>
                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '75%' }}
                        src={one}
                        alt="First slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '75%' }}
                        src={two}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '75%' }}
                        src={three}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '75%' }}
                        src={four}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '75%' }}
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

export default Love_Hunt;