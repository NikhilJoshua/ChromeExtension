	function store(){
		var b = document.getElementById('b').value;
		var s = document.getElementById('s').value;
		var m = document.getElementById('msg').value;
		chrome.storage.sync.set({[b] : s+"|"+m}, function(){
			location.reload();
		});
	}
	chrome.storage.sync.get(null, function(obj){
		/*Object.keys(obj).forEach(function(key){
			console.log(obj.key);
		});*/
		console.log(obj);
		Object.keys(obj).forEach(function(key){
			var k = obj[key].split("|");
			var tab = document.getElementsByTagName("tbody");
			var tr = document.createElement("tr");
			var blk = document.createElement("td");
			var fwd = document.createElement("td");
			var msg = document.createElement("td");
			var rmv = document.createElement("td");

			var btn = document.createElement("BUTTON");
			btn.setAttribute('id',key);
			btn.setAttribute('value', 'remove');
			btn.setAttribute('class', 'alert button');
			btn.appendChild(document.createTextNode("Remove"));

			blk.appendChild(document.createTextNode(key));
			fwd.appendChild(document.createTextNode(k[0]));
			msg.appendChild(document.createTextNode(k[1]));
			rmv.appendChild(btn);

			tr.appendChild(blk);
			tr.appendChild(fwd);
			tr.appendChild(msg);
			tr.appendChild(rmv);

			tab[0].appendChild(tr);		

		});
	});

	function remove(e){
		var s = e.target;
		chrome.storage.sync.get(null, function(obj){
			Object.keys(obj).forEach(function(key){
				if(key.includes(s.id)){
					removeKey(s.id);
				}
			});
		})
	}

	function removeKey(k){
		console.log(k);
		chrome.storage.sync.get(null,function(obj){
			chrome.storage.sync.clear();
			Object.keys(obj).forEach(function (key){
			if(k != key){
				var b = key;
				chrome.storage.sync.set({[b] : obj[key]}, function(){
					console.log(key);
					var a = document.getElementById(k).parentElement;
					var c = a.parentElement;
					c.remove();
					location.reload();
				});

			}
		});
		});
		
		
	}
	var e = document.getElementById('tab');
	e.addEventListener('click', remove, false);


	/*
	var tab = document.getElementsByTagName("table");
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	var  td2 = document.createElement('td')
	td2.appendChild(document.createTextNode("JOshua"));
	td.appendChild(document.createTextNode("Nikhil"));
	tr.appendChild(td2);
	tr.appendChild(td);
	tab[0].appendChild(tr);*/
	//chrome.storage.sync.clear();
	//sub = document.getElementById('sub').onclick = store;
	sub.addEventListener('click',store,false);