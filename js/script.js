/* slider for the home */
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const slideCount = document.querySelectorAll(".home__info").length;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 5000);
});

/* login and register in the account */
document.addEventListener("DOMContentLoaded", function () {
  const loginTab = document.querySelector(".tab.login");
  const registerTab = document.querySelector(".tab.register");
  const loginForm = document.querySelector(".login__form");
  const registerForm = document.querySelector(".register__form");
  const placeholderImage = document.querySelector(".placeholder__image");

  // Event listener for login tab
  loginTab.addEventListener("click", function () {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    placeholderImage.style.display = "none"; // Hide placeholder image
  });

  // Event listener for register tab
  registerTab.addEventListener("click", function () {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.style.display = "block";
    loginForm.style.display = "none";
    placeholderImage.style.display = "none"; // Hide placeholder image
  });

  // Display placeholder image initially
  placeholderImage.style.display = "block";
});

// read more button
document.addEventListener("DOMContentLoaded", function () {
  const toggleDescription = function (event) {
    event.preventDefault(); // Prevent default link behavior

    const description =
      this.closest(".courses__slide").querySelector(".description"); // Find the description element relative to the button

    // Toggle max-height property
    if (description.style.maxHeight) {
      description.style.maxHeight = null;
      this.textContent = "Read More";
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
      this.textContent = "Read Less";
    }
  };

  const readMoreButtons = document.querySelectorAll(".read-more");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", toggleDescription);
  });
});
