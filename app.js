const burger = document.querySelector(".burger");
const dropdown = document.querySelector("ul");

burger.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
});
