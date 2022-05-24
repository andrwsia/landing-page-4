var mobileBtn = document.getElementsByClassName('header-section__mobile-btn')
var mobileMenu = document.getElementsByClassName('header-section__mobile-menu')
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

