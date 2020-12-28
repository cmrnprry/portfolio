import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import NavBar from './Nav_Narrative'
import { Helmet } from "react-helmet"

//Logo Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faEnvelope);

class ContactMe extends Component {
	render() {
		return (
			<Container style={{ maxWidth: '1200px' }}>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Contact</title>
				</Helmet>

				<NavBar />

				{/* <!--Header--> */}
				<Row>
					<Col xs={12} className="col-xs-12">
						<section id="Contact" className="h2">
							Feel free to contact me on any of these platforms!
						</section>

						<Row>
							<section id="Contact" className="contactLinks">
								{/* <!--Twitter--> 
								<a target="_blank" href="https://twitter.com/n0t_cameron" style={{ color: "#FFFFFF", textDecoration: 'none', padding: '10px' }} target="_blank" className="fab fa-twitter " rel="noopener noreferrer"></a>
								*/}

								{/* <!--Email--> */}
								<a href="mailto:perry.ca@husky.neu.edu" rel="noopener noreferrer">
									<FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon="envelope" size="lg" />
								</a>

								{/* <!--LinkedIn--> */}
								<a target="_blank" href="https://www.linkedin.com/in/cameron-perry-015/" rel="noopener noreferrer">
									<FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon={['fab', 'linkedin']} size="lg" />
								</a>
							</section>
						</Row>

						{/* <!--Header--> */}
						<section id="Contact" className="h2">
							Or check out my projects and other works here!
								</section>
						<Row>
							<section id="Contact" className="contactLinks">
								{/* <!--GitHub--> */}
								<a target="_blank" href="https://github.com/cmrnprry" rel="noopener noreferrer">
									<FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon={['fab', 'github-square']} size="lg" />
								</a>

								{/* <!--Itch.io--> */}
								<a target="_blank" href="https://cmrnprry.itch.io/" rel="noopener noreferrer">
									<FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon={['fab', 'itch-io']} size="lg" />
								</a>

								{/* <!--Instagram--> */}
								{/* <a target="_blank" href="https://www.instagram.com/n0t_cameron/" rel="noopener noreferrer">
									<FontAwesomeIcon style={{ color: "#FFFFFF", textDecoration: 'none', marginLeft: '25px' }} icon={['fab', 'instagram']} size="lg" />
								</a> */}
							</section>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ContactMe;