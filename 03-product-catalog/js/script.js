/* =========================================================
   PROJECT 3: Product Catalog with Filtering/Sorting
   Concepts: arrays, array methods (filter/sort/map), DOM rendering
   Note: `products` is defined in products.js, loaded before this file
   ========================================================= */

// STEP 1: Grab DOM elements
// These variables store references to the HTML elements we want to control.
// We use them later to read user input and update the page.
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const sortSelect = document.querySelector("#sort-select");
const productGrid = document.querySelector("#product-grid");
const resultCount = document.querySelector("#result-count");

// STEP 2: Populate the category dropdown dynamically from the product data.
// Hint: use a Set to get the unique category names from `products`,
// then create an <option> for each one.
// A Set is useful here because it automatically removes duplicates.
function populateCategoryFilter() {
  // Create an empty Set to hold unique category names.
  const categorySet = new Set([]);

  // Go through every product and add its category to the Set.
  products.forEach((product) => {
    categorySet.add(product.category);
  });

  // Loop through each unique category and create an option element for it.
  categorySet.forEach((category) => {
    const option = document.createElement("option");
    option.textContent = category; // Show the category name in the dropdown.
    option.value = category; // Set the value used later when filtering.
    categoryFilter.appendChild(option); // Add the option to the select element.
  });
}

// STEP 3: This is the core function. It should:
//   - start from the full `products` array
//   - filter by the current search text (case-insensitive, matches name)
//   - filter by the selected category (skip filtering if "all")
//   - sort based on the selected sort option
//   - return the resulting array (don't render inside this function —
//     keep "get the data" separate from "draw the data")
// This function does the data work, and the render function handles the UI.
function getVisibleProducts() {
  // Get the text the user typed into the search box.
  // We trim spaces and convert to lowercase so searching is case-insensitive.
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Get the category currently chosen in the dropdown.
  const selectedCategory = categoryFilter.value;

  // Filter the full products array down to only the items that should appear.
  const filteredProducts = products.filter((product) => {
    // Compare the product name to the search text using lowercase so the match is case-insensitive.
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);

    // If the category dropdown is set to "all", skip category filtering.
    if (selectedCategory === "all") {
      // Keep only products that match the search text.
      return matchesSearch;
    }

    // If a real category is selected, the product must match both the search and the category.
    return matchesSearch && product.category === selectedCategory;
  });

  // Return the final filtered list so the render function can display it.
  return filteredProducts;
}

// STEP 4: Render function — clears productGrid and creates a card
// for each product in the given array. Also update resultCount
// with something like "8 products found".
// This function is responsible for drawing the UI from the filtered data.
function renderProducts(productsToRender) {
  // Clear the grid before adding cards so the page doesn't keep old items.
  productGrid.innerHTML = "";

  // If there are no matching products, show a message and stop.
  if (productsToRender.length === 0) {
    resultCount.textContent = "No products found";
    return;
  }

  // Update the result count text to show how many products match the filters.
  resultCount.textContent = `${productsToRender.length} products found`;

  // Loop over each product and create a card for it.
  productsToRender.forEach((product) => {
    // Create a new article element to represent one product card.
    const card = document.createElement("article");

    // Add a class so CSS can style each card consistently.
    card.className = "product-card";

    // Fill the card with the product's HTML content.
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p>$${product.price}</p>
    `;

    // Add the finished card to the grid container.
    productGrid.appendChild(card);
  });
}

// STEP 5: A single function that ties it together — call this whenever
// any control changes.
// This keeps the code organized: get the current visible products, then render them.
function updateView() {
  // Call the filtering function to get the current list of visible products.
  const visible = getVisibleProducts();

  // Pass that list to the render function so it appears on the page.
  renderProducts(visible);
}

// STEP 6: Wire up event listeners on all three controls to call updateView()
// Each time the user types, changes a category, or changes sorting, the page updates.
searchInput.addEventListener("input", updateView);
categoryFilter.addEventListener("change", updateView);
sortSelect.addEventListener("change", updateView);

// STEP 7: Initial setup on page load
// When the page first loads, we need to fill the dropdown and render the default results.
populateCategoryFilter();
updateView();


/* ---------- STRETCH GOALS ----------
   - Add a price range slider/filter
   - Add a "no results" message when the filtered array is empty
   - Debounce the search input so it doesn't re-render on every keystroke
------------------------------------- */


/* ---------- STRETCH GOALS ----------
   - Add a price range slider/filter
   - Add a "no results" message when the filtered array is empty
   - Debounce the search input so it doesn't re-render on every keystroke
------------------------------------- */
