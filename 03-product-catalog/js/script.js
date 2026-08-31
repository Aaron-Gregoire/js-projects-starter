/* =========================================================
   PROJECT 3: Product Catalog with Filtering/Sorting
   Concepts: arrays, array methods (filter/sort/map), DOM rendering
   Note: `products` is defined in products.js, loaded before this file
   ========================================================= */

// STEP 1: Grab DOM elements
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const sortSelect = document.querySelector("#sort-select");
const productGrid = document.querySelector("#product-grid");
const resultCount = document.querySelector("#result-count");

// STEP 2: Populate the category dropdown dynamically from the product data.
// Hint: use a Set to get the unique category names from `products`,
// then create an <option> for each one.
function populateCategoryFilter() {
  // TODO
}

// STEP 3: This is the core function. It should:
//   - start from the full `products` array
//   - filter by the current search text (case-insensitive, matches name)
//   - filter by the selected category (skip filtering if "all")
//   - sort based on the selected sort option
//   - return the resulting array (don't render inside this function —
//     keep "get the data" separate from "draw the data")
function getVisibleProducts() {
  // TODO
  return products;
}

// STEP 4: Render function — clears productGrid and creates a card
// for each product in the given array. Also update resultCount
// with something like "8 products found".
function renderProducts(productsToRender) {
  // TODO
}

// STEP 5: A single function that ties it together — call this whenever
// any control changes.
function updateView() {
  const visible = getVisibleProducts();
  renderProducts(visible);
}

// STEP 6: Wire up event listeners on all three controls to call updateView()
// TODO: searchInput.addEventListener("input", updateView);
// TODO: categoryFilter.addEventListener("change", updateView);
// TODO: sortSelect.addEventListener("change", updateView);

// STEP 7: Initial setup on page load
// TODO: populateCategoryFilter();
// TODO: updateView();


/* ---------- STRETCH GOALS ----------
   - Add a price range slider/filter
   - Add a "no results" message when the filtered array is empty
   - Debounce the search input so it doesn't re-render on every keystroke
------------------------------------- */
