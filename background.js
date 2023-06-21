// Create context menu
chrome.contextMenus.create({
  title: "Ye kya h?",
  contexts: ["selection"],
  onclick: function (info) {
    // Send selected text to popup.html
    console.log(info.selectionText);
    chrome.runtime.sendMessage({ text: info.selectionText });
  }
});

// Listen for response from popup.html
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Perform necessary actions with the API response
  console.log("API response:", message.response);
});
