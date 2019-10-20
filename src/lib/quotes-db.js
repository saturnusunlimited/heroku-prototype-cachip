import defaultQuotesDatabase from './../assets/json/quotes.json'
import AppQuote from './app-quote.js'

class QuotesDB {

    #name = "default";
    #json = defaultQuotesDatabase;
    #list = [];

    constructor( name, json ) {

        this.#name = name || this.#name;
        this.#json = json || this.#json;
        this.#list = [];

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

        return this.#list[index];
    }

    randomQuote () {

        var index = Math.floor(Math.random() * this.size());
        var quote = this.get( index );

        return quote;
    }
}

export default QuotesDB;
