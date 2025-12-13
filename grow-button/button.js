const button = document.getElementById("btn");
let size = 16;
let border = 2;

button.addEventListener("click", () => {
  size += 6;
  border += 1;
  button.style.fontSize = `${size}px`;
  button.style.border = `${border}px solid #ffd60a`;
});

// other option:
//
// const button = document.getElementById("btn");
// let border = 2;

// const parseDec = (input, fallback = 0) => parseInt(input, 10) || fallback;

// button.addEventListener("click", () => {
//   console.log("font size str", button.style.fontSize);
//   console.log("font size int", parseInt(button.style.fontSize, 10));

//   const currentSize = parseDec(button.style.fontSize, 16);

//   border += 1;
//   button.style.fontSize = `${currentSize + 6}px`;
//   button.style.border = `${border}px solid #ffd60a`;
// });
