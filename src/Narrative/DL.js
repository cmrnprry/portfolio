import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/Narrative.css'
import '../StyleSheets/mystyle.css'
import NavBar from './Nav_Narrative'
import Footer from '../Both/Footer';
import title from '../Images/DL/title.png';

class DL extends Component {
    render() {

        return (
            <html>
                <head>
                    <title>Don't Look</title>
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
                        <div class="row">
                            <div class="col-xs-12">
                                {/* <!-- Start Page --> */}
                                <section id="FormatProjectPage" class="header">
                                    <h1>Don't Look</h1>
                                </section>

                                {/* <!-- Trailer --> */}
                                <div class="col-xs-12 col-sm-6">
                                    <img src={title} class="trailer" />
                                </div>


                                {/* <!-- About --> */}
                                <div class="col-xs-12 col-sm-6">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>About the Game</h1>
                                        <div class="bodytext about-game">
                                            Don't Look is a retelling of the Greek myth of Orpheus and Eurydice. You play as a recently dead Eurydice, content with her afterlife, when Orpheus begs Hades to let him bring her back. Dispite her protests, Hades laments, under the condition that he must never look back to her on his journey back to the surface. Can you make him look back?
                                        </div>
                                    </section>

                                    {/* <!-- Download Link --> */}
                                    <iframe frameborder="0" src="https://itch.io/embed/522037?bg_color=593470&amp;border_color=593470" width="208" height="167"></iframe>
                                    <div class="download"></div>
                                </div>

                                {/* <!-- Role(s) --> */}
                                <div class="col-xs-12 col-sm-4">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>Role(s)</h1>
                                        <div class="text">Game Writing</div>
                                        <div class="text">Narrative Designer</div>
                                    </section>
                                </div>

                                {/* <!-- Engine --> */}
                                <div class="col-xs-12 col-sm-4">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>Engine</h1>
                                        <div class="text">Twine</div>
                                    </section>
                                </div>

                                {/* <!-- Contributions --> */}
                                <div class="col-xs-12 col-sm-4">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>Contributions</h1>
                                        <div class="text">Wrote all dialogue and text</div>
                                        <div class="text">Added gameplay elements to a Greek myth</div>
                                        <div class="text">Researched original myth to retain accuracy</div>
                                    </section>
                                </div>

                                {/* <!-- About the Making --> */}
                                <div class="col-xs-12 col-sm-12">
                                    <section id="FormatProjectPage" class="header">
                                        <h1>About the Process</h1>
                                        <div class="bodytext about-making">
                                            Don't Look was made over the course of a half a semester for my Narrative for Games class. Greek myths are something that I love, and this was my first time adapting one into something of my own. This was also my first time using Twine for a project, and while it is not fully complete, I plan to add more choices and visuals when I have the time to do so.
                                        </div>
                                    </section>
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

export default DL;