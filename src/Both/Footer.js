import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Logo Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faEnvelope);

class Footer extends Component {

  render() {
    return (
      <Row>
        <Col xs={12} className="col-xs-12">
          <section id="Contact" style={{ paddingBottom: '15px' }} className="contactLinks">
            {/* <!--Email--> */}
            <a href="mailto:camperrygames@gmail.com" rel="noopener noreferrer">
              <FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon="envelope" size="lg" />
            </a>

            {/* <!--LinkedIn--> */}
            <a target="_blank" href="https://www.linkedin.com/in/cameron-perry-015/" rel="noopener noreferrer">
              <FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon={['fab', 'linkedin']} size="lg" />
            </a>

            {/* <!--GitHub--> */}
            <a target="_blank" href="https://github.com/cmrnprry" rel="noopener noreferrer">
              <FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon={['fab', 'github-square']} size="lg" />
            </a>

            {/* <!--Itch.io--> */}
            <a target="_blank" href="https://cmrnprry.itch.io/" rel="noopener noreferrer">
              <FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon={['fab', 'itch-io']} size="lg" />
            </a>

            {/* <!--Instagram--> */}
            <a target="_blank" href="https://www.instagram.com/n0t_cameron/" rel="noopener noreferrer">
              <FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon={['fab', 'instagram']} size="lg" />
            </a>

            {/* <!--Twitter-->
                <a target="_blank" href="https://twitter.com/n0t_cameron" style={{ color: "#FFFFFF", textDecoration: 'none', padding: '10px' }} className="fab fa-twitter" rel="noopener noreferrer"></a> */}
          </section>
        </Col>
      </Row>
    );
  }
}

export default Footer;