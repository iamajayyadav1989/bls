document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully");

  // Example of dynamic interaction
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)";
      button.style.transition = "0.3s";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });
});

// Power Cables Hover Effect Change Active Class
$(document).ready(function () {
  $(".product-info").hover(function () {
    $(".product-info").removeClass("active"); // Remove active class from all
    $(this).addClass("active"); // Add active class to hovered one
  });
});

// Counter
function animateCountUp(element, start, end, duration) {
  let startTime = null;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    let progress = Math.min((currentTime - startTime) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = end; // Ensure final number is correct
    }
  }

  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("yearcounter");
  animateCountUp(counter, 0, 15, 2000); // Count from 0 to 15 in 2 seconds
});
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("clients");
  animateCountUp(counter, 0, 120, 2000); // Count from 0 to 15 in 2 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("capacity");

  function animateCountUp(element, start, end, duration) {
    let startTime = null;

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      let progress = Math.min((currentTime - startTime) / duration, 1);
      let currentNumber = Math.floor(progress * (end - start) + start);

      element.textContent = currentNumber.toLocaleString(); // Format with commas

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = end.toLocaleString(); // Ensure final number is formatted
      }
    }

    requestAnimationFrame(step);
  }

  animateCountUp(counter, 0, 37000, 2000); // Count from 0 to 37,000 in 2 seconds
});

document.addEventListener("DOMContentLoaded", function () {
  const locations = document.querySelectorAll(".location");

  locations.forEach((location, index) => {
    setTimeout(() => {
      location.classList.add("visible");
    }, index * 500); // Delay each location by 500ms
  });
});
