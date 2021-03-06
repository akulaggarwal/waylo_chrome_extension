//Changes icon of extension upon page load
chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
  const url = tab.url.slice(0,19);

  if (url !== "https://www.expedia" && changeInfo.status === 'complete') {
    chrome.browserAction.setIcon({
      path: "./icon4.png"
    })
  } else {
    chrome.browserAction.setIcon({
      path: "./icon3.png"
    })
  }

})

/* //following for testing only
chrome.storage.sync.set({
  "expediaStorage": [{
    destination: 'atlanta, GA',
    adults: "1",
    children: "0",
    checkIn: 'eh',
    checkOut: "meh"
  }]
})
*/

chrome.storage.sync.set({
  "expediaStorage": []
})

// chrome.storage.sync.remove("expediaStorage");
