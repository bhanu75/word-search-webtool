function checkWord() {
  const word = document.getElementById("searchWord").value.toLowerCase();
  const htmlText = document.body.innerText.toLowerCase();
  const resultEl = document.getElementById("result");

  if (htmlText.includes(word)) {
    resultEl.innerText = "✅ Yes, the word exists!";
  } else {
    resultEl.innerText = "❌ Word not found in this page.";
  }

  resultEl.style.display = "block"; // Show result after checking
}
