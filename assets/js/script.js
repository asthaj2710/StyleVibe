
// Hero Swiper control
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   New Arrival Swiper Control
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Services swiper control
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  centeredSlides:false,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
});
// Top collection swiper control

// Time function starts

// function startTime() {
//   const today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('txt').innerHTML =  h + " : " + m + " : " + s;
//   setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
// }

// Set the date we're counting down to
var countDownDate = new Date("September 2, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =days+ " Days   " +hours + " : "
  + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// Time function ends




//   show and hide menu on mousehover and mouse out
// function show_menu()
// {
// document.getElementById('menu').style.display="block";

// }

// function hide_menu()
// {
// document.getElementById('menu').style.display="none";
// }

// Great deal section

let greatDeal = document.querySelector(".deal");

// function greatDeal3(){
//   greatDeal.style.backgroundImage="url(./assets/img/bg-deal-3.jpg)";
// }
// setInterval(greatDeal3,3000);
// function greatDeal2(){
//   greatDeal.style.backgroundImage="url(./assets/img/bg-deal-2.jpg)";
// }
// setInterval(greatDeal3,4000);
setInterval(()=>{
  greatDeal.style.backgroundImage="url(./assets/img/bg-deal-3.jpg)";
  greatDeal.style.transition="linear 0.9s all";
},
5000);
setInterval(()=>{
  greatDeal.style.backgroundImage="url(./assets/img/bg-deal-2.jpg)";
  greatDeal.style.transition="linear 0.9s all";
},7000);
// Greatdeal time function
var countDownDate = new Date("December 31, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML =days+ " : " +hours + " : "
  + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo1").innerHTML = "EXPIRED";
  }
}, 1000);