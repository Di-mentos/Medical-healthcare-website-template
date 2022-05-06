var btnLeft = document.getElementsByClassName("feedback__button-left")[0];
var btnRight = document.getElementsByClassName("feedback__button-right")[0];
var num = 0;

var dots = document.getElementsByClassName("feedback__small-dot");
var card = document.getElementsByClassName("feedback__card card");
var current = 0;
var previous = 0;

/***************Dots clicking******************/
document.addEventListener('click', function(s){
	for(var i=0; i<dots.length; i++){
		if(s.target.getAttribute("id") == dots[i].getAttribute("id")){
			current = i;
			num = current;
			console.log("num = " + num);
			dots[current].style.opacity = "1";
			card[previous].style.opacity = "0";
			card[previous].addEventListener('transitionend', function f2(){
				card[current].style.opacity = "1";
				
				if(num<=3 && num>=0){
					if(num == 0){
						btnLeft.removeAttribute("onclick");
						btnLeft.style.opacity = "0.3";
						btnRight.setAttribute("onclick", "clickRight()");
						btnRight.style.opacity = "1";
					}
					else if(num == 3){
						btnRight.removeAttribute("onclick");
						btnRight.style.opacity = "0.3";
						btnLeft.setAttribute("onclick", "clickLeft()");
						btnLeft.style.opacity = "1";
					}
					else{
						btnRight.setAttribute("onclick", "clickRight()");
						btnRight.style.opacity = "1";
						btnLeft.setAttribute("onclick", "clickLeft()");
						btnLeft.style.opacity = "1";
					}
				}
				for(var j=0; j<card.length; j++){
					card[j].removeEventListener('transitionend', f2);
				}
				
			})

			
			if(current!=previous){
				dots[previous].style.opacity = "0.3";	
				previous = current;
			}
		}
	}
})

/****************Arrows clicking******************/
function clickRight(){
	btnRight.removeAttribute("onclick");
	btnLeft.setAttribute("onclick", "clickLeft()");

	num++;
	previous = num;

	btnLeft.style.opacity = "1";
	card[num-1].style.opacity = "0";

	card[num-1].addEventListener('transitionend', function f3(){
		card[num].style.opacity = "1";
		dots[num].style.opacity = "1";
		dots[num-1].style.opacity = "0.3";
		btnRight.setAttribute("onclick", "clickRight()");
		console.log("num = " + num);
		if(num == 3){
			btnRight.removeAttribute("onclick");
			btnRight.style.opacity = "0.3";
		}
		
		card[num-1].removeEventListener('transitionend', f3);
	})
}

function clickLeft(){
	btnLeft.removeAttribute("onclick");
	btnRight.setAttribute("onclick", "clickRight()");

	num--;
	previous = num;

	btnRight.style.opacity = "1";
	card[num+1].style.opacity = "0";

	card[num+1].addEventListener('transitionend', function f4(){
		card[num].style.opacity = "1";
		dots[num].style.opacity = "1";
		dots[num+1].style.opacity = "0.3";
		btnLeft.setAttribute("onclick", "clickLeft()");
		console.log("num = " + num);
		if(num == 0){
			btnLeft.removeAttribute("onclick");
			btnLeft.style.opacity = "0.3";
		}
		
		card[num+1].removeEventListener('transitionend', f4);
	})
}