const text = document.querySelector(".wrapper h1");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const resetBtn = document.querySelector(".reset");

let count = 0;

plusBtn.addEventListener("click", () => {
  count++;
  text.textContent = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  text.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  text.textContent = count;
});
