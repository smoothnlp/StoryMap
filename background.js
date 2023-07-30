chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: "http://www.mymap.ai/vizmap?type=vgmap&url=" + encodeURIComponent(tab.url)});
  });
  
  chrome.commands.onCommand.addListener(function(command) {
    if (command === "_execute_browser_action") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.create({url: "http://www.mymap.ai/vizmap?type=vgmap&url=" + encodeURIComponent(tabs[0].url)});
      });
    }
  });
  