// toggle light/dark mode
// eventlistener
// if statement to switch text? textContent
//
const togBtn = document.getElementById("togBtn");

togBtn.addEventListener("click", () => {
  document.body.classList.toggle("darktheme");

  if (document.body.classList.contains("darktheme")) {
    togBtn.textContent = "let there be light";
  } else {
    togBtn.textContent = "only darkness for me";
  }
});
