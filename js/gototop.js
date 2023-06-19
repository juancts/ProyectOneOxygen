const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
