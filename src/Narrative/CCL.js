import React, { Component } from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'
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
      <html>
        <head>
          <title>Card Crossed Lovers</title>
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
                  <h1>Card Crossed Lovers</h1>
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
                      Card Crossed Lovers is a game where you play as a Tarot card reader that does not believe in the fortune telling of the card, and is only trying to make a quick buck. However, you soon learn that your power as a Tarot reader is more real when a couple comes in seeking help over their failing marriage. Will you save their marriage? Or push them further apart?
              </div>
                  </section>

                  {/* <!-- Download Link --> */}
                  <iframe frameborder="0" src="https://itch.io/embed/509020?bg_color=593470&amp;border_color=593470" width="208" height="167"></iframe>
                  <div class="download"></div>
                </div>

                {/* <!-- Role(s) --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header">
                    <h1>Role(s)</h1>
                    <div class="text">Programmer</div>
                    <div class="text">Game Writing</div>
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
                    <div class="text">Implemented all art assets</div>
                    <div class="text">Created particle effects for scene changes</div>
                    <div class="text">Proof read the script</div>
                    <div class="text">Implemented UI/UX</div>
                    <div class="text">Wrote information about each Tarot card</div>
                  </section>
                </div>

                {/* <!-- About the Making --> */}
                <div class="col-xs-12 col-sm-12">
                  <section id="FormatProjectPage" class="header">
                    <h1>About the Process</h1>
                    <div class="bodytext about-making">
                      Card Crossed Lovers was made in a week during a game jam hosted by the Northeastern Game Dev Club (of which I am an EBord member) and the Emerson Game Dev Club. I worked mainly as a programmer, but was able write about the tarot and proofread the game's script. The game is currently still in development and will be updated periodically as the team has time.
              </div>
                  </section>
                </div>

                {/* <!-- Screen Shots --> */}
                <div class="row">
                  <Carousel indicators={false}>
                    <Carousel.Item>
                      <img
                        src={one}
                        alt="First slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        src={two}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        src={three}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        src={four}
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

export default CCL;