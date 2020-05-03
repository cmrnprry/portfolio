import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet"


import NavBar from './Nav_Programming'
import Footer from '../Both/Footer'
import resume from '../Docs/Games_Programming_Resume.pdf';


class Narrative_Resume extends Component {
  render() {

    return (
      <Container style={{ maxWidth: '1300px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Resume</title>
        </Helmet>

        <NavBar />

        {/* <!--Resume PDF viewer and download link--> */}
        <Row>
          <Col xs={12} className="col-xs-12">
            <h1 className="resume-text" style={{ padding: '25px' }}>
              If you can't view the pdf, <a href={resume} target="_blank" style={{ color: '#FFFFFF', textDecoration: 'underline' }} rel="noopener noreferrer"> here's a link!</a>
            </h1>
            <div className="embed-responsive embed-responsive-4by3">
              <embed className="embed-responsive-item" src={resume}></embed>
            </div>
          </Col>
        </Row>

        <Footer />
      </Container>
    );
  }
}

export default Narrative_Resume;