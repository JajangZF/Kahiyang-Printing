// Toggle class active
const navbarTengah = document.querySelector(".navbar-tengah");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarTengah.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarTengah.contains(e.target)) {
    navbarTengah.classList.remove("active");
  }
});
