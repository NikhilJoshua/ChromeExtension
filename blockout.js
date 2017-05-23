	/*var website = window.location.href;
	var result = /facebook/.test(website);
	if(result){
		document.body.innerHTML = '<br><br><br><h1 style = "font-size: 3em;color:red;" align = "middle">You shouldn\'t be using this</h1>';
		setTimeout(function(){
			window.location = "https://www.youtube.com/channel/UCS0N5baNlQWJCUrhCEo8WlA";
			console.log("FORWARD DONE");
		},7000);
	}*/

	var website = window.location.href;
	
	chrome.storage.sync.get(null, function(obj){
		Object.keys(obj).forEach(function(key){
			if(website.includes(key)){
				var k = obj[key].split("|");
				document.body.innerHTML = "<br><br><br><h1 style = 'font-size:3em;color:#bc2122;' align = 'middle'>" + k[1] + "</h1>";
				if(k[0].includes("https:") || k[0].includes("http:")){
					
					setTimeout(function(){
						window.location = k[0];
					},7000);
				}
				else{
					setTimeout(function(){
						window.location = "http://" + k[0];
					},7000);
					}
				}
		})
	});

