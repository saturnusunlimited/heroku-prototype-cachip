// This is not really a test, but a template to generate tests from
import QuotesDB from '../lib/quotes-db.js';
import AppQuote from '../lib/app-quote.js';

/* zo 27 okt 2019 15:06:42 CET
 *
 *  INSTANCE METHODS
 *
 *  all ()
 *  size()
 *  get ( index )
 *  randomQuote ()
 *  search ( regexpString )
 *  previousQuote ()
 *  nextQuote ()
 *  clearHistory ()
 *
 */

var VERBOSE = false;

function printQuotes ( list ) {

    if (!VERBOSE) { return; }

    for (var i=0; i<list.length; i++) {

        let quote = list[i];

        console.log(`text: ${quote.text()}`);
        console.log(`     auhtor: ${quote.author()}`);
    }
}

function testTell ( msg ) {

    if (!VERBOSE) { return; }

    console.log(msg);
}

describe("quotes-db.js the quote database class", () => {

    test("database should contain quotes", () => {

        var quoteDatabase = new QuotesDB();

        expect(quoteDatabase.size()).toBeGreaterThan(1);
    });
    
    test("quotes should be individually retrievable", () => {

        var quoteDatabase = new QuotesDB();

        expect(quoteDatabase.get(0)).toBeInstanceOf(AppQuote);
    });

    test("quotes should be collectively retrievable", () => {

        var quoteDatabase = new QuotesDB();

        var quoteArray = quoteDatabase.all();

        expect(quoteArray.length).toBe(quoteDatabase.size());

        for (var i=0; i<quoteArray.length; i++) {

            var quoteA = quoteArray[i];
            var quoteB = quoteDatabase.get(i);

            expect(quoteA).toBe(quoteB);
        }
    });

    test("quotes should be randomly retrievable", () => {

        var quoteDatabase = new QuotesDB();
        var quoteA = quoteDatabase.randomQuote();
        var quoteB;

        for (var i=0; i<3; i++) {

            quoteB = quoteDatabase.randomQuote();

            if (quoteA !== quoteB ) { break; }
        }

        expect(quoteA).not.toBe(quoteB);
    });

    // To be done
    test("database should not contain duplicates", () => {

        var quoteDatabase = new QuotesDB();
        var quotes        = quoteDatabase.all();
        var texts         = quotes.map((quote) => quote.text());
        var unique        = [...new Set(texts)];

        expect(unique.length).toEqual(texts.length);
    });

    test("current quote should be available", () => {

        var quoteDatabase = new QuotesDB();

		quoteDatabase.randomQuote();

		expect(quoteDatabase.current()).toBeInstanceOf(AppQuote);
    });

    test("previous quote should be retrievable", () => {

        var quoteDatabase = new QuotesDB();
        var sampleSize    = 10;
        var list          = [];

        for (var i=0; i<sampleSize; i++) { list[i] = quoteDatabase.randomQuote(); }

        printQuotes( list );

        for (var i=sampleSize-2; i>=0; i--) {

            var previousQuote = quoteDatabase.previousQuote();

            testTell(`comparing ${previousQuote.text()}`);
            testTell(`   WITH ${list[i].text()}`);

            expect(previousQuote).toBe(list[i]);
        }
    });

    test("next quote should be retrievable", () => {

        var quoteDatabase = new QuotesDB();
        var sampleSize    = 10;
        var list          = [];

        for (var i=0; i<sampleSize; i++) { list[i] = quoteDatabase.randomQuote(); }

        for (var i=0; i<sampleSize; i++) { quoteDatabase.previousQuote(); }

        expect(quoteDatabase.current()).toBe(list[0]);

        for (var i=1; i<sampleSize; i++) {

            var nextQuote = quoteDatabase.nextQuote()

            testTell(`comparing ${nextQuote.text()}`);
            testTell(`   WITH ${list[i].text()}`);

            expect(nextQuote).toBe(list[i]);
        }
    });

    test("database should be searchable", () => {

        var quoteDatabase = new QuotesDB();
        var quote         = quoteDatabase.get(1);
        var regexpSpace   = /\s+/;
        var searchText    = quote.text().split(regexpSpace)[0];
        var searchResult  = quoteDatabase.search( searchText );

        expect(searchResult).toBeInstanceOf(AppQuote);

		expect(quoteDatabase.search('d41cdb66-f8de-11e9-8894-abc457b3785c')).toBeNull();
    });

    test("database history should be clearable", () => {

        var quoteDatabase = new QuotesDB();
        var sampleSize    = 10;
        var list          = [];

        for (var i=0; i<sampleSize; i++) { list[i] = quoteDatabase.randomQuote(); }

        quoteDatabase.clearHistory();

        expect(quoteDatabase.previousQuote()).toBeNull();
        expect(quoteDatabase.nextQuote()).toBeNull();
    });
});
