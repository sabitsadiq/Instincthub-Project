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

const searchInput = document.querySelector(".search_product");
const searchProduct = document.getElementsByClassName("percard catalogue");
searchInput.addEventListener("keyup", (event) => {
  const { value } = event.target;
  const searchQuery = value.toLowerCase();
  for (const productName of searchProduct) {
    let name = productName.textContent.toLowerCase();
    if (name.includes(searchQuery)) {
      productName.style.display = "block";
    } else {
      productName.style.display = "none";
    }
  }
});
