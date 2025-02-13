const body = document.body;
const toggle = document.querySelector("button");
const out = document.querySelector(".out");
let mode = "light";

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", mode);
} else {
  mode = localStorage.getItem("mode");
}
if (mode === "dark") {
  changeToggle(mode);
}
toggle.addEventListener("click", () => {
  if (mode === "light") {
    changeToggle("dark");
  } else {
    changeToggle("light");
  }
  out.textContent = `changed theme: ${mode}`;
  localStorage.setItem("mode", mode);
});

function changeToggle(newMode) {
  if (newMode === "dark") {
    body.className = "dark-mode";
    mode = "dark";
    toggle.title = "Змінити на світлу тему";
  } else {
    body.className = "";
    mode = "light";
    toggle.title = "Змінити на темну тему";
  }
  localStorage.setItem("mode", mode);
}
