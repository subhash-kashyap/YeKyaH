// Get selected text from background.js message
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  document.getElementById("selected-text").textContent = message.text;
});

// Handle button click
document.getElementById("get-explanation").addEventListener("click", function () {
  // Get selected text
  const selectedText = document.getElementById("selected-text").textContent;

  // Make API request
  fetch("http://localhost/api-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "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" // Replace YOUR_API_TOKEN with the actual token
    },
    body: JSON.stringify({ text: selectedText })
  })
    .then(response => response.json())
    .then(data => {
      // Send API response back to background.js
      chrome.runtime.sendMessage({ response: data });
    })
    .catch(error => console.error(error));
});
