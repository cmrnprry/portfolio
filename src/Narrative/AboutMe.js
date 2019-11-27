import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'
import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import me from '../Images/Me.jpg';

class AboutMe extends Component {
  render() {

    return (
      <html>
        <head>
          <title>About</title>
          <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>
          <div class="container">
            <NavBar />

            {/* <!--About Text--> */}
            <div class="row">
              <div class="col-xs-12">
                <section id="AboutPage" class="format">
                  <h1>About Me</h1>

                  <div class="col-xs-12 col-sm-6">
                    <img src={me} />
                  </div>
                    
                  <div class="col-xs-12 col-sm-6">
                    <p>
                      Thank you for visiting my website! I created the it from the ground up! My name is Cam and I am currently a student at Northeastern University, studying Computer Science and Game Development. I have been interested in games since high school. Since becoming a student at Northeastern, I have worked on a variety of games, mainly working as either a writer or {' '}
                      <OverlayTrigger
                        overlay=
                        {
                          <Tooltip id={`tooltip-top`}>
                            Check out my work as a programmer!
                          </Tooltip>
                        } >
                        <a href="index" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
                          programmer (gameplay or UI/UX).
                        </a>
                      </OverlayTrigger>
                    </p>
                  </div>
            
                  <div class="col-xs-12">
                    <p>
                      I was lucky enough to intern at Disruptor Beam this past summer as an engineering intern. While there I worked on Player Support Tools, hooking up the UI/UX art to the game and programming in gameplay elements. I worked on two games, one was Archer: Danger Phone and I can't talk about he other... Yet. In addtion to my internship, I have worked on a variety of games both in and out school. You can see more about them on the <a href="home" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>"Projects"</a> section of the page.
                    </p>

                    <p class="padding4">
                      Games play a huge role in my life, but they are not an all consuming part of my life. I also enjoy reading, painting (both water color and acrylic), baking and volunteering!
                    </p>
                  </div>
                </section>
              </div>
            </div>
          
            <Footer />
            
          </div>
        </body>
      </html>
        );
    }
}
                                                
export default AboutMe;