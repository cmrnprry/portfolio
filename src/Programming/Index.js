import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Programming'
import Footer from '../Both/Footer'
import alice from '../Images/AliceecliA/AliceTitle.png';
import au from '../Images/AU/title_card.png';
import ccl from '../Images/CCL/CCL_Title.jpg';
import qos from '../Images/QOS/swords.png';


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
            <section id="Title" className="subtext">Programmer and Designer</section>
          </Col>
        </Row>

        <NavBar />

        {/* <!--Programming Projects--> */}
        <Row>
          <Col xs={12} className="col-xs-12">
            <h2 className="Projects">Projects</h2>
            <Row>

              {/* <!--Alice ecilA--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="alice-eclia">
                    <Image src={alice} alt="AliceecilA" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding"><b>Alice ecilA</b></div>
                      <div className="hovertext">
                        Programming <br />
                        Game Writing <br />
                        Narrative Design<br />
                      </div>
                    </div>
                  </a>
                </div>
              </Col>

              {/* <!--Absolute Unit--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="absolute-unit">
                    <Image src={au} alt="Absolute_Unit" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding2"><b>Absolute Unit</b></div>
                      <div className="hovertext">
                        Programming <br />
                            Game Design <br />
                            Game Writing
                          </div>
                    </div>
                  </a>
                </div>
              </Col>

              {/* <!--Card Crossed Lovers--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="card-crossed-lovers">
                    <Image src={ccl} alt="Card_Crossed_Lovers" />
                    <div className="overlay">
                      <div className="hovertitle hover-padding2">
                        <b>Card Crossed Lovers</b>
                      </div>
                      <div className="hovertext">
                        Programming <br />
                            Game Writing
                          </div>
                    </div>
                  </a>
                </div>
              </Col>

            </Row>
            <Row>
              {/* <!--Queen of Swords--> */}
              <Col med={3} style={{ flexGrow: '0' }} className="col-med-3 mx-auto">
                <div className="gallery">
                  <a href="queen-of-swords">
                    <Image src={qos} alt="Queen_of_Swords" />
                    <div className="overlay">
                      <div className="hovertitle" style={{ paddingTop: '65px' }} >
                        <b>Queen of Swords</b>
                      </div>
                      <div className="hovertext">
                        Programming <br />
                            Narrative Design
                          </div>
                    </div>
                  </a>
                </div>
              </Col>

            </Row>
          </Col>
        </Row>

        <Footer />
      </Container>
    );
  }
}

export default Home;