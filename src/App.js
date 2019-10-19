import React from 'react';
import double_quotes from './assets/svg/double_quotes.svg';
import './App.css';
import quotes from './assets/json/quotes.json'

var quote = randomQuote();

function randomQuote() {

    var index = Math.floor(Math.random() * quotes.length);
    var quote = quotes[index];

    if (quote.quoteAuthor === "") {

        quote.quoteAuthor = "Anonymous";
    }

    return quote;
}

function App() {

  return (

    <div className="App">

      <header className="App-header">

        <h1>Quote</h1>

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
            <small>
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
            </small>

            <p>
                <small> This app was made with </small>
                <a
                  className="App-link"
                  href="https://create-react-app.dev/docs/getting-started#!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <small> create-react-app </small>
                </a>
            </p>
        </div>

      </header>

    </div>
  );
}

export default App;
