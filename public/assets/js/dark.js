(() => {
  // src/assets/js/dark.js
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
  document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    localStorage.getItem("theme") === "light" ? enableDarkMode() : disableDarkMode();
  });
})();
//# sourceMappingURL=dark.js.map
