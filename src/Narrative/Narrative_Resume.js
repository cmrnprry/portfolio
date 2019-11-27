import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/mystyle.css'
import '../StyleSheets/Narrative.css'
import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer'
import resume from '../Docs/narrative_design_resume.pdf';


class Narrative_Resume extends Component {
  render() {

    return (
      <html>
        <head>
          <title>Resume</title>
          <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
          <link rel="stylesheet" type="text/css" href="mystyle.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>
          <div class="container">

            <NavBar />

            {/* <!--Resume PDF viewer and download link--> */}
            <div classs="row">
              <div class="col-xs-12">
                <h1 class="resume-text">
                  If you can't view the pdf, <a href={resume} style={{ color: '#FFFFFF', textDecoration: 'underline' }}> here's a link!</a>
                </h1>
                <div class="embed-responsive embed-responsive-4by3">
                  <embed class="embed-responsive-item" src={resume}></embed>
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

export default Narrative_Resume;