var sublist = document.getElementsByClassName("menu__sublist")[0];
var burger = document.getElementsByClassName("menu__menu-button")[0];
var counter = 0;

burger.addEventListener('click', function(){
	if(counter === 1){
		sublist.style.opacity = "0";
		sublist.addEventListener('transitionend', function f1(){
			sublist.style.visibility = "hidden";
			sublist.removeEventListener('transitionend', f1);
		})
		
		counter--;
		//console.log("Hidden!");
	}
	else if(counter === 0){
		sublist.style.visibility = "visible";
		if(window.getComputedStyle(sublist).visibility){
			sublist.style.opacity = "1";
		}
		
		counter++;
		//console.log("Visible!");
	}
})
