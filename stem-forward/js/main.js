document.addEventListener("click", (e) => {
  const btn = e.target.closest(".menu-toggle");
  if (btn) {
    document.querySelector("nav")?.classList.toggle("open");
  }
});
