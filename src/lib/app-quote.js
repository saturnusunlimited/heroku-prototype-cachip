const { convertInput, convertInputReverse } = require('./leet-converter');

class AppQuote {

	#text           = "";
	#author         = "Anonymous";
	#leetSpeak      = false;
	#leetSpeakText  = "";

    constructor( parameters ) {

        this.#text          = parameters.quoteText   || this.#text;
        this.#author        = parameters.quoteAuthor || this.#author;
		this.#leetSpeak     = parameters.leetSpeak   || this.#leetSpeak;
		this.#leetSpeakText = parameters.leetText    || convertInput(this.#text,'N');
	}

	author () {

		return this.#author;
	}

	text () {

		return this.#leetSpeak ? this.#leetSpeakText : this.#text;
	}


	leetSpeakText () {

        return this.#leetSpeakText;
	}

	setLeetSpeak ( value ) {

		this.#leetSpeak = value;
	}

	getLeetSpeak () {

		return this.#leetSpeak;
	}

	toggleLeetSpeak () {
		
		this.setLeetSpeak( !this.#leetSpeak );
	}
}

export default AppQuote;
