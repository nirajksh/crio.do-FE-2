//data.then((res) => console.log(res));

// Starter code
function fetchQuote() {
  /**
   * API - https://api.kanye.rest/
   * Return a promise from this function using fetch()
   * The data should be in JSON format
   * Catch the error, if any.
   */
  const data = fetch("https://api.kanye.rest/")
    .then(function (res) {
      return res.json();
    })
    .catch(function (err) {
      throw new Error(err);
    });
  return data;
}

function addQuoteToDOM(quote) {
  // Display quote in the <p id="quote"></p> element
  const para = document.createElement("p");
  para.textContent = quote;
  document.body.append(para);
}

async function quoteKanye() {
  /**
   * Use fetchQuote and addQuoteToDOM() function
   * To display the quote on the Page.
   */
  // fetchQuote().then((res) => {
  //   const quote = res.quote;
  //   addQuoteToDOM(quote);
  // });

  const res = await fetchQuote();
  addQuoteToDOM(res.quote);
}

quoteKanye();
