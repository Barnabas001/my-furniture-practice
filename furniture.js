document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "&#9776;";
  document.querySelector(".navbar").prepend(menuToggle);

  const navbar = document.querySelector(".navbar ul");
  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });

  document.querySelectorAll(".navbar ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("show");
    });
  });

  // Scroll-to-top button
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.classList.add("scroll-top-btn");
  scrollTopBtn.innerHTML = "&#8679;"; // Up arrow
  document.body.appendChild(scrollTopBtn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
