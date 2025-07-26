const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuote');

async function getQuote() {
  quoteText.textContent = 'Loading...';
  authorText.textContent = '—';

  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = 'Oops! Could not fetch quote.';
    authorText.textContent = 'Try again later.';
  }
}

// Load a quote when the page loads
getQuote();

// Load a new quote when the button is clicked
newQuoteBtn.addEventListener('click', getQuote);
