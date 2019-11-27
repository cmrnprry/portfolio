import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {

    return (
      <html>
        <head>
        </head>
        <body>
          {/* <!-- Navigation Bar --> */}
          < div class="row" >
            <div class="col-xs-12 download">
              <section id="menu" class="menu">
                <div class="col-xs-12 col-sm-3">
                  <a href="/">Projects</a>
                </div>
                <div class="col-xs-12 col-sm-3">
                  <a href="about">About</a>
                </div>
                <div class="col-xs-12 col-sm-3">
                  <a href="programming-resume">Resume</a>
                </div>
                <div class="col-xs-12 col-sm-3">
                  <a href="contact">Contact</a>
                </div>
              </section>
            </div>
          </div >
        </body>
      </html>
    );
  }
}

export default Header;