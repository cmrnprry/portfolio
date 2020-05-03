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
              <a href="/">Projects</a>
            </div>
            <div className="nav-spacing">
              <a href="about">About</a>
            </div>
            <div className="nav-spacing">
              <a href="programming-resume">Resume</a>
            </div>
            <div className="nav-spacing">
              <a href="contact">Contact</a>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Header;