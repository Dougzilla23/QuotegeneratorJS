function quoteall() {
    var randomNumber;
    var randomQuote;
    var randomAuthor;

    function newQuote() {
        var quote = ["Life is the meaning in its self -Doug K.",
            "You don't have to burn books to destroy a culture.  Just get people to stop reading them. - Ray Bradbury",
            "What the superior man seeks is in himself; what the ordinary man seeks is in others - Confuscius ",
            "There is only one good, knowledge,and one evil, ignorance.-Socrates",
            "Never discourage anyone who continually makes progress no matter how slow -Plato  "];


        randomNumber = Math.floor((Math.random() * quote.length));
        randomQuote = quote[randomNumber];
        // randomAuthor = author[randomNumber];
        var myTimerID = setInterval(newQuote, 5000);
        // clearInterval(myTimerID);

        document.getElementsByClassName("quote")[0].innerText = randomQuote
    };

    document.getElementById("newQuote").addEventListener("click", function () {
        newQuote();
    });
    // "#tweet".on("click", function () {
    //     window.open("https://twitter.com.intent/tweet?text=" + randomQuote)
    // });

};
quoteall()
