import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'
import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import five from '../Images/AU/au_screencap_five.PNG';
import four from '../Images/AU/au_screencap_four.PNG';
import three from '../Images/AU/au_screencap_three.PNG';
import two from '../Images/AU/au_screencap_two.PNG';
import one from '../Images/AU/au_screencap_one.PNG';

class Absolute_Unit extends Component {
  render() {

    return (
      <html>
        <head>
          <title>Absolute Unit</title>
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
                  <h1>Absolute Unit</h1>
                </section>

                {/* <!-- Trailer --> */}
                <div class="col-xs-12 col-sm-6">
                  <div class="video-responsive">
                    <iframe width="400" height="400" class="hover-padding" src="https://www.youtube.com/embed/e8FI4RX8EYs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" />
                  </div>
                </div>

                {/* <!-- About --> */}
                <div class="col-xs-12 col-sm-6">
                  <section id="FormatProjectPage" class="header">
                    <h1>About the Game</h1>
                    <div class="bodytext about-game">
                      Absolute Unit is a game about a skinny dog named Boofus who doesn't have an owner. He sees that all the other happy dogs with their owners are a little chubby. He decides to embark on a quest to get all the treats to become an absolute unit, and get an owner. Play as Boofas as you beg for treats, make friends, and become the biggest boy.
                    </div>
                  </section>

                  {/* <!-- Download Link --> */}
                  <iframe frameborder="0" src="https://itch.io/embed/406198?bg_color=593470&amp;border_color=000000" width="208" height="167" />
                  <div class="download"></div>
                </div>

                {/* <!-- Roles --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header">
                    <h1>Role</h1>
                    <div class="text">Programmer</div>
                    <div class="text">Narrative Designer</div>
                    <div class="text">Game Designer</div>
                  </section>
                </div>

                {/* <!-- Engine --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header">
                    <h1>Engine</h1>
                    <div class="text">RPG Maker VX Ace</div>
                  </section>
                </div>

                {/* <!-- Contributions --> */}
                <div class="col-xs-12 col-sm-4">
                  <section id="FormatProjectPage" class="header">
                    <h1>Contributions</h1>
                    <div class="text">Import audio and art assets</div>
                    <div class="text">Balance encounters</div>
                    <div class="text">Write dialogue/flavor text</div>
                  </section>
                </div>

                {/* <!-- About the Making --> */}
                <div class="col-xs-12 col-sm-12">
                  <section id="FormatProjectPage" class="header">
                    <h1>About the Process</h1>
                    <div class="bodytext about-making">
                      Absolute Unit was made in less than 48 hours during a game jam hosted by Berklee College. I worked on a team with only one artist and two sound designers/composers. Since I was the only one with programming experience on the team, we decided to use RPG Maker. This allowed me to more easily import the art and music, while also focusing on the design and programming of the game.
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

                    <Carousel.Item>
                      <img
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