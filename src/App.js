import React from 'react';
import { Component } from 'react'
import double_quotes from './assets/svg/double_quotes.svg';
import './App.css';
import './css/CustomBootstrap.css'
import quotes from './assets/json/quotes.json'
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends Component {

    constructor (props) {

        super(props);

        var quote = this.randomQuote();

        this.state = {

            quote:      quote,
            leetSpeak:  false,
            translated: quote.quoteText,
        };
    }

    randomQuote () {

        var index = Math.floor(Math.random() * quotes.length);
        var quote = quotes[index];

        quote.leetSpeak = this.leetSpeak( quote.quoteText );

        if (quote.quoteAuthor === "") { quote.quoteAuthor = "Anonymous"; }

        return quote;
    }

    newRandomQuote () {

        this.setState(
            
            { quote: this.randomQuote() },
            () => this.translateQuote(),
        );
    }

    toggleLeetSpeak () {

        this.setState(
            
            { leetSpeak: !this.state.leetSpeak },
            () => this.translateQuote(),
        );
    }

    translateQuote () {

        var quote = this.state.quote;

        this.setState( { translated: this.state.leetSpeak ? quote.leetSpeak : quote.quoteText } )
    }

    leetSpeak ( string ) {

        return string + '1';
    }

    // DEVELOPER NOTE: The return App template should probably be in a separate
    // file. Investigate ReactJS best practices for project structure.
    //
    render () {

        return (

            <div className="App">

                <div className="App-header">
                    <ButtonToolbar>
                        <Button variant="secondary" className="m-1" onClick={this.newRandomQuote.bind(this)}>Change Quote</Button>
                        <Button variant="secondary" className="m-1" onClick={this.toggleLeetSpeak.bind(this)}>Leet Speak</Button>
                    </ButtonToolbar>
                </div>

                <div className="App-body">

                    <div className="App-quote">

                        <div className="quotes">
                            <img src={double_quotes} className="App-quotes-left" alt="double quotes"/>
                        </div>

                        <div>
                            <p className="App-quote-text">{this.state.translated}</p>
                        </div>

                        <div className="quotes" >
                            <img src={double_quotes} className="App-quotes-right" alt="double quotes"/>
                        </div>

                    </div>

                    <div className="App-quote">

                        <p className="App-quote-author">{this.state.quote.quoteAuthor}</p>
                    </div>
                </div>

                <div className="App-footer">

                    <div className="App-footer-inner">
                        <p>
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
                        </p>

                        <p>
                            This app was made with <a
                              className="App-link"
                              href="https://create-react-app.dev/docs/getting-started#!"
                              target="_blank"
                              rel="noopener noreferrer"
                            > create-react-app </a>
                        </p>

                        <p>
                           Comments or problems? Mail <a className="App-link" href="mailto:saturnusunlimited@gmail.com"> saturnusunlimited@gmail.com </a>
                        </p>

                    </div>
                </div>

            </div>
        );
    }
}

export default App;
