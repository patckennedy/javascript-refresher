// Simple list of quotes
const quotes = [
    {
        text: 'The best time to start was yesterday. The next best time is now.',
        author: 'Unknown',
    },
    {
        text: 'It always seems impossible until it’s done.',
        author: 'Nelson Mandela',
    },
    {
        text: 'Do what you can, with what you have, where you are.',
        author: 'Theodore Roosevelt',
    },
    {
        text: 'Slow progress is still progress.',
        author: 'Unknown',
    },
    {
        text: 'Success is the sum of small efforts repeated day in and day out.',
        author: 'Robert Collier',
    },
    {
        text: 'You don’t have to be perfect to be amazing.',
        author: 'Unknown',
    },
];


// Grab elements
const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

let lastIndex = -1;

// Pick a random quote (avoid repeating the exact same one twice in a row)
function getRandomQuote() {
  if (quotes.length === 0) return null;

  let index = Math.floor(Math.random() * quotes.length);

  if (quotes.length > 1 && index === lastIndex) {
    index = (index + 1) % quotes.length;
  }

  lastIndex = index;
  return quotes[index];
}

// Show a quote in the UI
function showRandomQuote() {
  const quote = getRandomQuote();
  if (!quote) return;

  quoteTextEl.textContent = `“${quote.text}”`;
  quoteAuthorEl.textContent = `— ${quote.author}`;
}

// When the user clicks the button, show a new quote
newQuoteBtn.addEventListener("click", showRandomQuote);

// Show one quote when the page first loads
showRandomQuote();