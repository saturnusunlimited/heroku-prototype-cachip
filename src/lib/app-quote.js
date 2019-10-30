const { convertInput, convertInputReverse } = require('./leet-converter');

class AppQuote {

	#text          = "";
	#author        = "Anonymous";
	#leetSpeak     = false;
	#leetSpeakText = "";
    #searchResults = null;

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
        this.resetSearch();
	}

	getLeetSpeak () {

		return this.#leetSpeak;
	}

	toggleLeetSpeak () {
		
		this.setLeetSpeak( !this.#leetSpeak );
	}

	partMatch ( part, value ) {

        return ({ part: part, matches: value });
    }

    resetSearch () {

        this.#searchResults = ({

            text:   [ this.partMatch(this.text()   , false) ],
            author: [ this.partMatch(this.author() , false) ]
        });
    }

    search ( regexpString ) {

        if ( this.nullOrUndefined( regexpString ) ) { this.resetSearch(); return; }

        this.#searchResults = ({

            text:   this.searchInString( this.text()   , regexpString ),
            author: this.searchInString( this.author() , regexpString )
        });
    }

    searchResults () {

        if (this.#searchResults == null ) { this.resetSearch(); }

        return this.#searchResults;
    }

    searchInString ( string, regexpString ) {
            
        var regexp      = new RegExp( regexpString, "i");
        var splitRegexp = new RegExp( `(${regexpString})`, "i");
        var split       = string.split( splitRegexp );

        if ( split.join('').length != string.length ) { return [ this.partMatch(string,false)]; }
            
        return split.map( (part) => this.partMatch(part,part.match( regexp ) ? true : false) );
    }

    nullOrUndefined( value ) {

        if (typeof value === 'undefined') { return true; }
        if (typeof value == null) { return true; }

        return false;
    }
}

export default AppQuote;
