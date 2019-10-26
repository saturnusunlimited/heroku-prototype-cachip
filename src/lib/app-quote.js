const { convertInput, convertInputReverse } = require('./leet-converter');

class AppQuote {

	#text      = "";
	#author    = "Anonymousá";
	#leetSpeak = false;

    constructor( parameters ) {

        this.#text      = parameters.quoteText   || this.#text;
        this.#author    = parameters.quoteAuthor || this.#author;
		this.#leetSpeak = parameters.leetSpeak   || this.#leetSpeak;
	}

	author () {

		return this.#author;
	}

	text () {

		return this.#leetSpeak ? this.leetSpeak() : this.#text;
	}


	leetSpeak () {

        return convertInput(this.#text,'N');
	}

	toggleLeetSpeak () {
		
		this.#leetSpeak = !this.#leetSpeak;
	}

	setLeetSpeak ( value ) {

		this.#leetSpeak = value;
	}

	getLeetSpeak () {

		return this.#leetSpeak;
	}
}

export default AppQuote;
