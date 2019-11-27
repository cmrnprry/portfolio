import React, { Component } from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'
import NavBar from './Nav_Programming'
import Footer from '../Both/Footer'
import trailer from '../Images/AliceecliA/Alice_Prototype.mp4';
import four from '../Images/AliceecliA/alice_screencap_four.PNG';
import three from '../Images/AliceecliA/alice_screencap_three.PNG';
import two from '../Images/AliceecliA/alice_screencap_two.PNG';
import one from '../Images/AliceecliA/alice_screencap_one.PNG';

class AliceecliA extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Alice ecilA</title>
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
                  <h1>Alice ecliA</h1>
                </section>
                {/* <!-- Trailer --> */}
                <div class="col-xs-12 col-sm-6">
                  <div style={{ width: 'auto', height: 'auto', paddingTop: '50px'}}>
                    <ResponsiveEmbed aspectRatio="16by9">
                      <embed src={trailer} type="video/mp4" />
                    </ResponsiveEmbed>
                  </div>
                  <section id="FormatProjectPage" class="caption padding-slides" align="center">
                    Original Sound Design and Music by <a href="https://www.daynamooney.com/" target="_blank" rel ="noopener noreferrer" class="resumeLink">
                      Dayna Mooney
                    </a>
                  </section>
                </div>

                {/* <!-- About --> */}
                <div class="col-xs-12 col-sm-6">
                  <section id="FormatProjectPage" class="header">
                    <h1>About the Game</h1>
                    <div class="bodytext about-game">
                      Our heroine, Alice, must traverse through a dangerous world to get home. She finds that all is not as it seems- there is another world parallel to hers, where everything is turned on its head. While her reflection helps guide her, she must use the mirrors scattered around to bring her back home.
                    </div>
                  </section>

                  {/* <!-- Download Link --> */}
                  <iframe frameborder="0" src="https://itch.io/embed/404467?bg_color=593470&amp;border_color=593470" width="208" height="167" title="downloadlink"></iframe>
                </div>

                {/* <!-- Roles --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header hover-padding">
                    <h1>Role</h1>
                    <div class="text">Narrative Design</div>
                    <div class="text">Game Writing</div>
                    <div class="text">Programming</div>
                    <div class="text">Background Art</div>
                    <div class="text">Animation</div>
                  </section>
                </div>

                {/* <!-- Engine --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header hover-padding">
                    <h1>Engine</h1>
                    <div class="text">Unity</div>
                  </section>
                </div>

                {/* <!-- Contributions --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header hover-padding">
                    <h1>Contributions</h1>
                    <div class="text">Scripted dialogue system and assisted in scripting mirror behaviour</div>
                    <div class="text">Designed the UI/UX</div>
                    <div class="text">Animated all charcter talk and run animations</div>
                    <div class="text">Drew speach bubbles, title card, and half the level backgrounds</div>
                  </section>
                </div>

                {/* <!-- About the Making --> */}
                <div class="col-xs-12 col-sm-12">
                  <section id="FormatProjectPage" class="header">
                    <h1>About the Process</h1>
                    <div class="bodytext about-making">
                      Alice elicA is a game that was made for my Game Concept and Devlopment class. It was created by a three person team, one artist/level designer, one programmer/background artist, and myself. We used Unity and C# to create a 2D puzzle platformer. Alice ecilA uses three types of mirrors to travse the levels. There a gravity flipping, teleporting, and bouncing mirror. Narraitively, each mirror will be "taught" to Alice by the residents of Wonderland as she comes across them. The game is still in development, as we are currently working with an audio engineer to implement orignal music and sound effects.
                    </div>
                  </section>
                </div>

                {/* <!-- Screen Shots --> */}
                <div class="row">
                  <Carousel indicators={false}>
                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '50%' }}
                        className="d-block w-100"
                        src={one}
                        alt="First slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '50%' }}
                        className="d-block w-100"
                        src={two}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '50%' }}
                        className="d-block w-100"
                        src={three}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        style={{ maxWidth: '50%' }}
                        className="d-block w-100"
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
export default AliceecliA;