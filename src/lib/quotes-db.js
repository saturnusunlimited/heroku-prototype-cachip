import defaultQuotesDatabase from './../assets/json/quotes.json'
import AppQuote from './app-quote.js'

class QuotesDB {

    #name    = "default";
    #json    = defaultQuotesDatabase;
    #list    = [];
	#history = [];

	#currentSearchIndex = 0;
	#currentSearch      = "";
	#previousSearch     = "";

    constructor( name, json ) {

        this.#name    = name || this.#name;
        this.#json    = json || this.#json;
        this.#list    = [];
		this.#history = [];

        this.init();
    }

    init () {

        for (var i=0; i<this.#json.length; i++) {

            this.#list[i] = new AppQuote( this.#json[i] );
        }
    }

    size () {

        return this.#list.length;
    }

    get ( index ) {

		const quote = this.#list[index];

		this.#history.push ( quote );

        return quote;
    }

    randomQuote () {

        var index = Math.floor(Math.random() * this.size());
        var quote = this.get( index );

        return quote;
    }

	search ( regexpString ) {

		this.#previousSearch = this.#currentSearch;
		this.#currentSearch  = regexpString

		var startIndex = this.#currentSearchIndex;
		var length     = this.size();
		var regexp     = new RegExp(regexpString, "i");

		for (let i=1; i<=length; i++) {

			let index = (startIndex + i) % length;
			let quote = this.#list[index];

			if (quote.text().match(regexp) || quote.author().match(regexp)) {

                this.#currentSearchIndex = index;
				return quote;
			}
		}

		return null;
	}

	addToHistory () {

	}
}

export default QuotesDB;
