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

        this.state = {

            quote: this.randomQuote()
        };
    }

    randomQuote () {

        var index = Math.floor(Math.random() * quotes.length);
        var quote = quotes[index];

        if (quote.quoteAuthor === "") {

            quote.quoteAuthor = "Anonymous";
        }

        return quote;
    }

    newRandomQuote () {

        this.setState( { quote: this.randomQuote() } );
    }

    toggleLeetSpeak () {

        // <Button bsStyle="secondary" onClick={toggleLeetSpeak}>Leet Speak</Button>
        alert('toggle leet speak');
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
                            <p className="App-quote-text">{this.state.quote.quoteText}</p>
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
