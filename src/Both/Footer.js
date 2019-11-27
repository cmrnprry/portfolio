import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'

class Footer extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Projects</title>
          <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
          <link rel="stylesheet" type="text/css" href="mystyle.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>
          <div class="row">
            <div class="col-xs-12">
              <section id="Contact" class="contactLinks padding5">
                {/* <!--Email--> */}
                <a href="mailto:perry.ca@husky.neu.edu" style={{ color: "#FFFFFF", textDecoration: 'none', padding: '10px' }} class="fas fa-envelope" rel="noopener noreferrer"></a>
                
                {/* <!--LinkedIn--> */}
                <a target="_blank" href="https://www.linkedin.com/in/cameron-perry-015/" style={{ color: "#FFFFFF", textDecoration: 'none', padding: '10px' }} class="fab fa-linkedin-in" rel="noopener noreferrer"></a>
                
                {/* <!--GitHub--> */}
                <a target="_blank" href="https://github.com/cmrnprry" style={{ color: "#FFFFFF", textDecoration: 'none', padding: '10px' }} class="fab fa-github-square contact-link" rel="noopener noreferrer"></a>
                
                {/* <!--Instagram--> */}
                <a target="_blank" href="https://www.instagram.com/n0t_cameron/" style={{ color: "#FFFFFF", textDecoration: 'none', padding: '10px' }} class="fab fa-instagram" rel="noopener noreferrer"></a>
                
                {/* <!--Twitter--> */}
                <a target="_blank" href="https://twitter.com/n0t_cameron" style={{ color: "#FFFFFF", textDecoration: 'none', padding: '10px' }} class="fab fa-twitter" rel="noopener noreferrer"></a>
              </section>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default Footer;