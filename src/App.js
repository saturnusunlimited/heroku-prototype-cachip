import React from 'react';
import double_quotes from './assets/svg/double_quotes.svg';
import './App.css';
import './css/CustomBootstrap.css'
import quotes from './assets/json/quotes.json'
import { Button } from 'react-bootstrap';
import { useState } from 'react';


function App() {

    let [quote, setQuote] = useState(randomQuote());

    function randomQuote() {

        var index = Math.floor(Math.random() * quotes.length);
        var quote = quotes[index];

        if (quote.quoteAuthor === "") {

            quote.quoteAuthor = "Anonymous";
        }

        return quote;
    }

    function newRandomQuote () {

        setQuote(randomQuote());
    }

    function toggleLeetSpeak () {

        // <Button bsStyle="secondary" onClick={toggleLeetSpeak}>Leet Speak</Button>
        alert('toggle leet speak');
    }

    // DEVELOPER NOTE: The return App template should probably be in a separate
    // file. Investigate ReactJS best practices for project structure.
    //
    return (

        <div className="App">

          <header className="App-header">

            <Button bsStyle="primary" onClick={newRandomQuote}>Change Quote</Button>

            <div className="App-quote">

                <div className="quotes">
                    <img src={double_quotes} className="App-quotes-left" alt="double quotes"/>
                </div>

                <div>
                    <p className="App-quote-text">{quote.quoteText}</p>
                </div>

                <div className="quotes" >
                    <img src={double_quotes} className="App-quotes-right" alt="double quotes"/>
                </div>
            </div>

            <div className="App-quote">

                <p className="App-quote-author">{quote.quoteAuthor}</p>
            </div>

            <div className="App-credits">

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


          </header>

        </div>
    );
}

export default App;
