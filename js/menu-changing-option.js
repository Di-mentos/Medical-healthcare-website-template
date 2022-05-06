var link = document.getElementsByClassName("menu__link");
var cur = 0;
var prev = 0;

document.addEventListener('click', function(r){
	for(var i=0; i<link.length; i++){
		if(r.target.getAttribute("href") == link[i].getAttribute("href")){
			cur = i;
			link[cur].style.borderColor = "#1F1534";			
			if(cur != prev){
				link[prev].style.borderColor = "transparent";
				prev = cur;
			}
		}
	}
})


