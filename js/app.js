const apiURL = "https://quoted-app.herokuapp.com";

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const getQuote = async () => {
    const res = await fetch(apiURL + "/api/quotes");
    const quotes = await res.json();

    const content = document.getElementById("content");

    let noOfQuotes = quotes.length;

    let quoteNo = getRandomArbitrary(0, noOfQuotes);
    // let toolNo = getRandomArbitrary(0,noOfTools-1); // when not using the random function

    content.innerHTML = "<h1 style='font-size: 20px; color: #F5F2E7;font-style: italic;'>" + '"' + quotes[quoteNo].content + '"' + "</h1><div class='authorWrapper'>" + "<i class='fa-solid fa-user'></i> ~ " + quotes[quoteNo].author + "</div>"
    // content.innerText = `"${quote.content}"`;
    console.log(quotes[quoteNo].content)
};

//get first tool at initialization
getQuote();

quotesForm.addEventListener("submit", (e) => {
    //preventing default
    e.preventDefault();

    getQuote();
});