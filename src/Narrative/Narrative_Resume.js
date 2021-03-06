import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet"

import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import resume from '../Docs/narrative_design_resume.pdf';


class Narrative_Resume extends Component {
  render() {

    return (
      <Container style={{ maxWidth: '1200px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Resume</title>
        </Helmet>

        <NavBar />

        {/* <!--Resume PDF viewer and download link--> */}
        <Row>
          <Col xs={12} className="col-xs-12">
            <h1 class="resume-text">
              If you can't view the pdf, <a href={resume} style={{ color: '#FFFFFF', textDecoration: 'underline' }}> here's a link!</a>
            </h1>
            <div class="embed-responsive embed-responsive-4by3">
              <embed class="embed-responsive-item" src={resume}></embed>
            </div>
          </Col>
        </Row>

        <Footer />
      </Container >
    );
  }
}

export default Narrative_Resume;