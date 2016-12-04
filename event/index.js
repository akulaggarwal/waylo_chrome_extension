//Changes icon of extension upon page load
chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
  const url = tab.url.slice(0,19);

  if (url !== "https://www.expedia") {
    chrome.browserAction.setIcon({
      path: "./icon4.png"
    })
  } else {
    chrome.browserAction.setIcon({
      path: "./icon3.png"
    })
  }

})
