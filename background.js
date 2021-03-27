chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({ code: 'document.body.style.opacity = 0.2' });
	chrome.tabs.executeScript(null, {file: "content.js"});
});