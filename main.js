document.addEventListener("DOMContentLoaded", function () {
  const ball = document.getElementById("ball");

  // Create an element for the shadow
  const shadow = document.createElement("div");
  shadow.classList.add("shadow");

  // Add the shadow as a sibling element of the circle
  document.querySelector(".ball-container").appendChild(shadow);

  // Generate a random number between 0 and 1
  const random = Math.floor(Math.random() * 2);

  // Define the colors for the balls
  const redColor = "#FF0000";
  const blueColor = "#0000FF";

  // Set the background color of the circle based on the random number
  if (random === 0) {
    ball.style.backgroundColor = redColor;
  } else {
    ball.style.backgroundColor = blueColor;
  }
});
