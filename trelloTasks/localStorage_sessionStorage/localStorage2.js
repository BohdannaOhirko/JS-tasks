let count = 0;
document.querySelector("button").addEventListener("click", () => {
  count++;
  localStorage.setItem("user", count);
});
