// Set the date we're counting down to
let countDownDate = new Date("Sep 12, 2020 12:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + " d. " + hours + " h. "
    + minutes + " m. " + seconds + " s.";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "";
  }
}, 1000);

const informationBlock = document.querySelector('.information-block');
const moreInfoBtn = document.querySelector('.more-info');

moreInfoBtn.addEventListener('click', function (event) {
  informationBlock.scrollIntoView({ behavior: "smooth" });
});
