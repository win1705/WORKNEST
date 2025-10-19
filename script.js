document.querySelectorAll(".am").forEach(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("clicked");
  });
});
