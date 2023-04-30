// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should
// display none.
// ==================================
const toggleMenu = document.querySelector(".hamburger");
const showMenu = document.querySelector(".link");
toggleMenu.addEventListener("click", () => {
  showMenu.classList.toggle("open");
});

// ==================================
// 2. Display products based on
// All, Men or Female categories.
// ==================================

// ==================================
// 2. Display products based on
// search keywords in the input fields.
// ==================================
const search = (value) => {
  const perCard = document.querySelectorAll(".percard");
  perCard.forEach((element) => {
    element.style.display = "none";
    const name = element.children[1].innerHTML.toUpperCase();
    const percent = element.children[2].innerHTML.toUpperCase();
    const figure = element.children[3].innerHTML.toUpperCase();
    if (
      name.includes(value) ||
      percent.includes(value) ||
      figure.includes(value)
    ) {
      element.style = "block";
    }
  });
};
const searchProduct = document.querySelector(".search_product");
searchProduct.addEventListener("input", (e) => {
  search(e.target.value.toUpperCase());
});
