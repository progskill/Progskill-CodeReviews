document.getElementById("clickMe").addEventListener("click", function () {
  if (chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        const tabId = tabs[0].id;
        chrome.tabs.executeScript(
          tabId,
          { code: "document.documentElement.outerHTML;" },
          function (result) {
            if (result && result[0]) {
              const html = result[0];
              console.log("HTML content:", html);
              chrome.runtime.sendMessage({ html: html });
            } else {
              console.error("Failed to retrieve HTML content.");
            }
          }
        );
      } else {
        console.error("No active tab found.");
      }
    });
  } else {
    console.error("chrome.tabs API is not available.");
  }
});
