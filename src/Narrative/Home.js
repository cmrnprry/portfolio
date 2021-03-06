import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import alice from '../Images/AliceecliA/AliceTitle.png';
import au from '../Images/AU/title_card.png';
import lh from '../Images/LH/lovehunt.png';
import dl from '../Images/DL/title.png';
import outOfCTRL from '../Images/OutOfCTRL/outofCTRL.PNG';
import date from '../Images/Date/title.png';


class Home extends Component {
  render() {

    return (
      <Container style={{ maxWidth: '1200px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects</title>
        </Helmet>

        {/* <!-- Header --> */}
        <Row>
          <Col xs={12} className="col-xs-12">
            <section id="Title" className="titleText">Cam Perry</section>
            <section id="Title" className="subtext">Narative Designer and Writer</section>
          </Col>
        </Row>

        <NavBar />

        {/* <!--Programming Projects--> */}
        <Row>
          <Col xs={12} className="col-xs-12">
            <h2 className="Projects">Projects</h2>
            <Row>

              {/* <!--Date N' Dash--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="date-n-dash">
                    <Image src={date} alt="OutOfCTRL" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding3"><b>Date N' Dash</b></div>
                      <div className="hovertext">
                        Narrative Design <br />
                        Game Writing <br />
                      </div>
                    </div>
                  </a>
                </div>
              </Col>

              {/* <!--Out of CTRL--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="out-of-ctrl">
                    <Image src={outOfCTRL} alt="OutOfCTRL" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding3"><b>Out of CTRL</b></div>
                      <div className="hovertext">
                        Narrative Design <br />
                            Game Writing <br />
                      </div>
                    </div>
                  </a>
                </div>
              </Col>

              {/* <!--Alice ecilA--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="aa">
                    <Image src={alice} alt="AliceecilA" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding"><b>Alice ecilA</b></div>
                      <div className="hovertext">
                        Narrative Design <br />
                            Game Writing <br />
                            Programming <br />
                      </div>
                    </div>
                  </a>
                </div>
              </Col>

              {/* <!--Absolute Unit--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="au">
                    <Image src={au} alt="Absolute_Unit" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding2"><b>Absolute Unit</b></div>
                      <div className="hovertext">
                        Game Writing <br />
                            Programming <br />
                            Game Design
                          </div>
                    </div>
                  </a>
                </div>
              </Col>

              {/* <!--Love Hunt--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="lh">
                    <Image src={lh} alt="Love_Hunt" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding3"><b>Love Hunt</b></div>
                      <div className="hovertext">
                        Game Writing <br />
                            Narrative Design <br />
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>

            {/* <Row>
              {/* <!--Greek Myth--> 
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="dl">
                    <Image src={dl} alt="Don't_Look" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding3"><b>Don't Look</b></div>
                      <div className="hovertext">
                        Game Writing <br />
                            Narrative Design <br />
                      </div>
                    </div>
                  </a>
                </div>
              </Col>


            </Row> */}
          </Col>
        </Row>

        <Footer />

      </Container >
    );
  }
}

export default Home;