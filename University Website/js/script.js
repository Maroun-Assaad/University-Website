setInterval(() => {
  const sections = document.querySelectorAll(".home__info");
  const activeIndex = Array.from(sections).findIndex(
    (section) =>
      section.classList.contains("slider-move-1") ||
      section.classList.contains("slider-move-2")
  );

  const nextIndex = (activeIndex + 1) % sections.length;
  const nextNextIndex = (nextIndex + 1) % sections.length;

  sections[activeIndex].classList.remove("slider-move-1", "slider-move-2");
  sections[nextIndex].classList.add("slider-move-1");
  sections[nextNextIndex].classList.add("slider-move-2");
}, 5000);

/* login and register in the account */
document.addEventListener("DOMContentLoaded", function () {
  const loginTab = document.querySelector(".tab.login");
  const registerTab = document.querySelector(".tab.register");
  const loginForm = document.querySelector(".login__form");
  const registerForm = document.querySelector(".register__form");

  // Event listener for login tab
  loginTab.addEventListener("click", function () {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  });

  // Event listener for register tab
  registerTab.addEventListener("click", function () {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  });
});
