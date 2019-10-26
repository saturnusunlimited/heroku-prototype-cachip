import React from 'react';
import { Component } from 'react'
import double_quotes from './assets/svg/double_quotes.svg';
import './App.css';
import './css/CustomBootstrap.css'
import { Button, ButtonToolbar, InputGroup, FormControl } from 'react-bootstrap';
import QuotesDB from './lib/quotes-db.js'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  EmailIcon,
} from 'react-share';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*
<Router>
    <Route path="/quote/:id" component={AboutPage} />
    <Link to="/quote/1">Quote 1</Link>
</Router>
*/


class App extends Component {


    constructor (props) {

        super(props);

        const quoteDatabase = new QuotesDB();

        this.smallViewportWidth = 1000;

        this.state = {

            quoteDatabase: quoteDatabase,
            quote:         quoteDatabase.randomQuote(),
            search:        "",
            viewportWidth: window.visualViewport.width,
        };

        window.addEventListener('resize', this.handleResize)
    }

    newRandomQuote () {

        var newQuote = this.state.quoteDatabase.randomQuote();
        
        newQuote.setLeetSpeak( this.state.quote.getLeetSpeak() );

        this.setState( { quote: newQuote } );
    }

    toggleLeetSpeak () {

        this.state.quote.toggleLeetSpeak();

        this.setState( { quote: this.state.quote } );
    }

    shareUrl () {

        return "https://prototype-heroku-caschip.herokuapp.com";
    }

    // Note to self: This lambda notation will rid you of the need to use .bind(this)
    handleKeyPress = ( keyEvent ) => {

        var quoteRegexp = keyEvent.target.value;

        if (keyEvent.key === 'Enter') {

            var newQuote = this.state.quoteDatabase.search( quoteRegexp );

            if (newQuote != null) {

                this.setState( { quote: newQuote } );

            } else {

                alert( `Cannot find quote text or author that matches ${quoteRegexp}` ) ;
            }
        }
    }

    searchField( klass ) {

        return  <InputGroup className={`${klass}`}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onKeyPress={this.handleKeyPress} />
                </InputGroup>
    }

    searchFieldRight () {

        return (window.visualViewport.width > this.smallViewportWidth) ?  this.searchField("m-1 App-right-align") : "";
    }

    searchFieldBottom () {

        return (window.visualViewport.width <= this.smallViewportWidth) ?  this.searchField("m-1") : "";
    }

    handleResize = () => {

        let width     = this.state.viewportWidth
        let newWidth  = window.visualViewport.width;
        let treshold  = this.smallViewportWidth;
        let rerender  = false;

        if (width >  treshold && newWidth <= treshold ) { rerender = true; }
        if (width <= treshold && newWidth >  treshold ) { rerender = true; }

        this.state.viewportWidth = newWidth;

        if (rerender) { this.setState( { state: this.state } ) }
    }

    // DEVELOPER NOTE: The return App template should probably be in a separate
    // file. Investigate ReactJS best practices for project structure.
    //
    render () {

        return (

            <div className="App">


                <div className="App-banner App-header">
                    <ButtonToolbar>
                        {this.searchFieldRight()}
                        <Button variant="secondary" className="m-1" onClick={this.newRandomQuote.bind(this)}>Change Quote</Button>
                        <Button variant="secondary" className="m-1" onClick={this.toggleLeetSpeak.bind(this)}>Leet Speak</Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        {this.searchFieldBottom()}
                    </ButtonToolbar>
                </div>

                <div className="App-banner App-body">

                    <div className="App-quote">

                        <div className="quotes">
                            <img src={double_quotes} className="App-quotes-left" alt="double quotes"/>
                        </div>

                        <div>
                            <p className="App-quote-text">{this.state.quote.text()} </p>
                        </div>

                        <div className="quotes" >
                            <img src={double_quotes} className="App-quotes-right" alt="double quotes"/>
                        </div>

                    </div>

                    <div className="App-quote">

                        <p className="App-quote-author">{this.state.quote.author()}</p>
                    </div>
                </div>

                <div className="App-banner App-share-banner">

                    <ButtonToolbar>

                        <TwitterShareButton className="m-1" url={this.shareUrl()}>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>

                        <EmailShareButton className="m-1" url={this.shareUrl()}>
                            <EmailIcon size={32} round={true} />
                        </EmailShareButton>

                        <WhatsappShareButton className="m-1" url={this.shareUrl()}>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>

                    </ButtonToolbar>
                </div>

                <div className="App-banner App-footer">

                    <div className="App-footer-inner">
                        <div>
                            Icons made by <a
                            className="App-link"
                            href="https://www.flaticon.com/authors/freepik"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Freepik">Freepik</a> from <a
                            className="App-link"
                            href="https://www.flaticon.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Flaticon">www.flaticon.com
                            </a>
                        </div>

                        <div>
                            This app was made with <a
                              className="App-link"
                              href="https://create-react-app.dev/docs/getting-started#!"
                              target="_blank"
                              rel="noopener noreferrer"
                            > create-react-app </a>
                        </div>

                        <div>
                            Leet speak generated with <a
                              className="App-link"
                              href="https://github.com/alexdevero/leet-speak-converter"
                              target="_blank"
                              rel="noopener noreferrer"> leet-speak-generator </a> by <a 
                              className="App-link"
                              href="https://alexdevero.com/"
                              target="_blank"
                              rel="noopener noreferrer"> Alex Devero </a>
                        </div>

                        <div>
                           Comments or problems? Mail <a className="App-link" href="mailto:saturnusunlimited@gmail.com"> saturnusunlimited@gmail.com </a>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default App;
