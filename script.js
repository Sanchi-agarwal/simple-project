const quotes = [
  "Believe in yourself and all that you are.",
  "You are capable of amazing things.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Don't watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "It always seems impossible until it's done.",
  "Start where you are. Use what you have. Do what you can."
];

function generateQuote() {
  const quoteElement = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
