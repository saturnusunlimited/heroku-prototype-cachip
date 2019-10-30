import AppQuote from '../lib/app-quote.js';

/*
 * zo 27 okt 2019 18:53:44 CET
 *
 *   INSTANCE METHODS
 *
 *   author ()
 *   text ()
 *   leetSpeakText ()
 *   setLeetSpeak ( value )
 *   getLeetSpeak ()
 *   toggleLeetSpeak ()
 */

const VERBOSE           = true;
const TEST_QUOTE_TEXT   = "A good quote is a joy for ever.";
const TEST_QUOTE_AUTHOR = "Aad Schippers";


function testTell ( msg ) {

    if (!VERBOSE) { return; }

    console.log(msg);
}

function testQuote () {

    let parameters = {

        quoteText:   TEST_QUOTE_TEXT,
        quoteAuthor: TEST_QUOTE_AUTHOR
    };

    return new AppQuote( parameters );
}

describe("app-quote.js class AppQuote, quote", () => {

    test("quote should have a text", () => {

        expect(testQuote().text()).toEqual(TEST_QUOTE_TEXT);
    });

    test("quote should have an author", () => {

        expect(testQuote().author()).toEqual(TEST_QUOTE_AUTHOR);
    });

    test("quote should be searchable for regexp", () => {

        const quote = testQuote();
        const regexpString = 'j.y';

        quote.search( regexpString );

        const results = quote.searchResults();

        expect(results.text).toBeInstanceOf(Array);
        expect(results.author).toBeInstanceOf(Array);

        expect(results.text.map( (match) => match.matches )).toContain(true);
        expect(results.author.map( (match) => match.matches )).not.toContain(true);
    });

    test("quote should translate to leet speak ", () => {

        expect(testQuote().leetSpeakText().length).toBeGreaterThanOrEqual(TEST_QUOTE_TEXT.length);
        expect(testQuote().leetSpeakText()).not.toEqual(TEST_QUOTE_TEXT);
    });

    test("quote's text can be set to leet speak and back", () => {

        const quote     = testQuote();
        const text      = quote.text();
        const leetSpeak = quote.leetSpeakText();

        expect(text).not.toEqual(leetSpeak);

        quote.toggleLeetSpeak();

        expect(quote.text()).toEqual(leetSpeak);

        quote.toggleLeetSpeak();

        expect(quote.text()).toEqual(text);
    });

    testTell( `Quote      : ${testQuote().text()}` );
    testTell( `Text       : ${testQuote().author()}` );
    testTell( `Leet Speak : ${testQuote().leetSpeakText()}` );
});
