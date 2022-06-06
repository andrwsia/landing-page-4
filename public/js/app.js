// -- Change Header BGC on scroll -- //

var className = "js-change_bgc";
var scrollTrigger = 50;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header-mobile ")[0].classList.add(className);
  } else {
    document.getElementsByClassName("header-mobile ")[0].classList.remove(className);
  }
  
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header-desktop ")[0].classList.add(className);
  } else {
    document.getElementsByClassName("header-desktop ")[0].classList.remove(className);
  }
};

// ---- //

var mobileBtn = document.getElementsByClassName('header-mobile__btn')
var mobileMenu = document.getElementsByClassName('header-mobile__menu')
var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

mobileBtn[0].addEventListener('click', clickedBtn)

console.log(mobileBtn[0])

// ---- //

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
});

// ---- //

var slider = document.getElementById("range");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

