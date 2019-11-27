import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'
import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import alice from '../Images/AliceecliA/AliceTitle.png';
import au from '../Images/AU/title_card.png';
import lh from '../Images/LH/lovehunt.png';
import dl from '../Images/DL/title.png';
import ccl from '../Images/CCL/CCL_Title.jpg';


class Home extends Component {
  render() {

    return (
      <html>
        <head>
          <title>Projects</title>
          <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
          <link rel="stylesheet" type="text/css" href="mystyle.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>
          <div class="container">

            {/* <!-- Header --> */}
            <div class="row">
              <div class="col-xs-12">
                <section id="Title" className="titleText">Cam Perry</section>
                <section id="Title" className="subtext">Narrative Designer and Writer</section>
              </div>
            </div>

            <NavBar />
            
            {/* <!--Programming Projects--> */}
            <div class="row">
              <div class="col-xs-12">
                <h2 class="Projects">Projects</h2>
                <div class="row">

                  {/* <!--Alice ecilA--> */}
                  <div class="col-med-3 mx-auto">
                    <div class="gallery">
                      <a href="aa">
                        <img src={alice} alt="AliceecilA" />
                        <div class="overlay">
                          <div class="hovertitle hover-padding"><b>Alice ecilA</b></div>
                          <div class="hovertext">
                            Narrative Design <br />
                            Game Writing <br />
                            Programming <br />
                            Background Art <br />
                            Animation
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* <!--Absolute Unit--> */}
                  <div class="col-med-3 mx-auto">
                    <div class="gallery">
                      <a href="au">
                        <img src={au} alt="Absolute_Unit" />
                        <div class="overlay">
                          <div class="hovertitle hover-padding2"><b>Absolute Unit</b></div>
                          <div class="hovertext">
                            Programming <br />
                            Game Design <br />
                            Game Writing
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* <!--Love Hunt--> */}
                  <div class="col-med-3 mx-auto">
                    <div class="gallery">
                      <a href="lh">
                        <img src={lh} alt="Love_Hunt" />
                        <div class="overlay">
                          <div class="hovertitle hover-padding3"><b>Love Hunt</b></div>
                          <div class="hovertext">
                            Game Writing <br />
                            Narrative Design <br />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* <!--Greek Myth--> */}
                  <div class="col-med-3 mx-auto">
                    <div class="gallery">
                      <a href="dl">
                        <img src={dl} alt="Don't_Look" />
                        <div class="overlay">
                          <div class="hovertitle hover-padding3"><b>Don't Look</b></div>
                          <div class="hovertext">
                            Game Writing <br />
                            Narrative Design <br />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* <!--Card Crossed Lovers--> */}
                  <div class="col-med-3 mx-auto">
                    <div class="gallery">
                      <a href="ccl">
                        <img src={ccl} alt="Card_Crossed_Lovers" />
                        <div class="overlay">
                          <div class="hovertitle hover-padding2">
                            <b>Card Crossed Lovers</b>
                          </div>
                          <div class="hovertext">
                            Programming <br />
                            Game Writing
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
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
                                    
export default Home;