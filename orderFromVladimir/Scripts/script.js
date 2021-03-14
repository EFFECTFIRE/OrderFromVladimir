var slider = document.getElementById("range");
var output = document.getElementById("valueRange");
output.value = slider.value;
output.oninput = function () {
	slider.value = this.value;
}
slider.oninput = function () {
	output.value = this.value;
}


var slides = document.querySelectorAll(".slide-item");
var slideIndex = 0;
var lastSlide = document.querySelector(".slide-item:last-child");
var firstSlide = document.querySelector(".slide-item:first-child");
showSlide(slideIndex);

function showSlide(n){
	slides[n].style.display = "block";
	if(slides[slideIndex] == firstSlide){
	document.querySelector(".previous").style.display = "none";

	}
	else{
	document.querySelector(".previous").style.display = "flex";
	}
	if(slides[slideIndex] == lastSlide){
	document.querySelector(".next").style.display = "none";
	document.querySelector(".send-button").style.display = "flex";
	document.querySelector(".summing").style.display = "flex";
	document.querySelector(".download-button").style.display = "flex";
	}
	else{
	document.querySelector(".next").style.display = "flex";
	document.querySelector(".send-button").style.display = "none";
	document.querySelector(".summing").style.display = "none";
	document.querySelector(".download-button").style.display = "none";
	}
}
document.querySelector(".next").onclick = function (){
	slides[slideIndex].style.display = 'none';
	slideIndex += 1;
	showSlide(slideIndex);
}
document.querySelector(".previous").onclick = function(){
	slides[slideIndex].style.display = 'none';
	slideIndex -= 1;
	showSlide(slideIndex);
}

var mobileMenuIcon = document.querySelector(".mob-menu-icon");
var mobileMenuCloseIcon = document.querySelector(".mob-menu-icon-close");
var mobileMenu = document.querySelector(".mob-bar");
mobileMenuIcon.onclick = function(){
	mobileMenu.style.display = "flex";
}
mobileMenuCloseIcon.onclick = function(){
	mobileMenu.style.display = "none";
}

var summing = document.querySelector(".summing");
summing.onclick = function(){
	var programs = document.querySelector('.programm > input:checked');
	var programTotal = document.querySelector('.programm-of-event');
	var events = document.querySelector('.event > input:checked');
	var eventTotal = document.querySelector('.events');
	var peopleQuantity = document.querySelector('.people-quantity');
	var options = document.querySelectorAll(".option > input:checked");
	var optionsTotal = document.querySelector(".options");

	optionsTotal.innerHTML = "";
	programTotal.innerHTML = programs.getAttribute('data-programm');
	eventTotal.innerHTML = events.getAttribute('data-event');
	peopleQuantity.innerHTML = slider.value + " человек";
	for (var i = 0; i < options.length; i++) {
		optionsTotal.innerHTML += options[i].getAttribute('data-option') + "<br>";
	}
}


