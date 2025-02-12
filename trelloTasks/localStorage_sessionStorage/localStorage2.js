const body = document.body;
const toggle = document.querySelector("button");
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

let theme;
toggle.addEventListener("click", () => {
  if (changeToggle(mode)) {
    let theme = dark;
    localStorage.setItem("user", theme);
  }

  localStorage.setItem("mode", mode);
});
