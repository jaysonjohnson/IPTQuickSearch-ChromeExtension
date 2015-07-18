document.addEventListener('DOMContentLoaded', function() {

	document.body.style.backgroundImage = "url('logo.png')";

	var searchTerm = document.getElementById('search-term');
	var searchButton = document.getElementById('search');
	searchButton.addEventListener('click', function() { 
		goSearch(searchTerm.value);
		searchTerm.value = "";
	}, false);
	
	searchTerm.addEventListener("keypress", function(e) {
		if (e.keyCode == 13) { 
			goSearch(searchTerm.value);
			searchTerm.value = ""; 
		}
	}, false);

	function goSearch(searchTerm){
		var newURL = 'https://www.iptorrents.com/t?q=' + searchTerm + '&qf=#torrents';
		chrome.tabs.create({ url: newURL });		
	}
	
}, false);