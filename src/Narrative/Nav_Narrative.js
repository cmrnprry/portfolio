import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Header extends Component {
  render() {

    return (
      <Row>
        <Col xs={12} className="col-xs-12">
          <div className="menu">
            <div className="nav-spacing">
              <a href="/home">Projects</a>
            </div>
            <div className="nav-spacing">
              <a href="about-me">About</a>
            </div>
            <div className="nav-spacing">
              <a href="narrative-resume">Resume</a>
            </div>
            <div className="nav-spacing">
              <a href="contact-me">Contact</a>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Header;