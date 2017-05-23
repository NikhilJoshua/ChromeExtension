function goToBackground(){
		chrome.tabs.create({url: chrome.extension.getURL('background.html')});
		console.log("ELE");
	}

	document.getElementById('go').onclick = goToBackground;