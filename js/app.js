const apiURL = "https://quoted-app.herokuapp.com";

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const getQuote = async () => {
    const quotesRoute = "/api/quotes"

    const res = await fetch(apiURL + quotesRoute);

    const quotes = await res.json();

    const content = document.getElementById("content");

    let noOfQuotes = quotes.length;

    let quoteNo = getRandomArbitrary(0, noOfQuotes);

    content.innerHTML = "<h1 style='font-size: 20px; color: #F5F2E7;font-style: italic;'>" + '"' + quotes[quoteNo].content + '"' + "</h1><div class='authorWrapper'>" + "<i class='fa-solid fa-user'></i> ~ " + quotes[quoteNo].author + "</div>"
};

getQuote();

quotesForm.addEventListener("submit", (e) => {
    e.preventDefault();

    getQuote();
});