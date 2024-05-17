chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.html) {
    console.log("Received HTML content:", message.html);
    // Perform any further actions with the HTML content here
  } else {
    console.error("No HTML content received.");
  }
});
