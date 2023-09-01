document.addEventListener("DOMContentLoaded", function () {
  // Create an element for the ball and the shadow
  const ball = document.getElementById("ball");
  const shadow = document.createElement("div");
  shadow.classList.add("shadow");

  // Add the shadow as a sibling element of the circle
  document.querySelector(".ball-container").appendChild(shadow);

  // Define the colors for the balls
  const redColor = "red";
  const blueColor = "blue";

  // Function to set the ball color and update the preference
  function chooseBallColor(color) {
    ball.style.backgroundColor = color;
    // Store the user's color preference in a cookie
    setCookie("ballColorPreference", color);
  }

  // Function to set a cookie with a specified name and value
  function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`; // No se especifica la fecha de expiración para una cookie de sesión
  }

  // Function to get the value of a cookie by name
  function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length);
      }
    }
    return "";
  }

  // Check if the user has a preference for a ball color stored in a cookie
  const userColorPreference = getCookie("ballColorPreference");

  if (userColorPreference === "red") {
    chooseBallColor(redColor);
  } else if (userColorPreference === "blue") {
    chooseBallColor(blueColor);
  } else {
    // Generate a random number between 0 and 1 (0 or 1)
    const random = Math.floor(Math.random() * 2);
    // Set the background color of the circle based on the random number
    if (random === 0) {
      chooseBallColor(redColor);
    } else {
      chooseBallColor(blueColor);
    }
  }

  // Check the number of times the user has seen each color ball
  const redBallViews = parseInt(getCookie("redBallViews")) || 0;
  const blueBallViews = parseInt(getCookie("blueBallViews")) || 0;

  // Update the view count
  if (ball.style.backgroundColor === redColor) {
    setCookie("redBallViews", redBallViews + 1);
  } else if (ball.style.backgroundColor === blueColor) {
    setCookie("blueBallViews", blueBallViews + 1);
  }

  // Add event listeners to the color buttons
  const colorButtons = document.querySelectorAll(".button");
  colorButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const userSelectedColor = event.target.getAttribute("data-color");
      chooseBallColor(userSelectedColor);
    });
  });
});
