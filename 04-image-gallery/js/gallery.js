/* =========================================================
   PROJECT 4: Image Gallery with Lightbox
   Concepts: events at scale (delegation), state (current image),
             keyboard events
   ========================================================= */

// STEP 1: Grab your DOM elements
const thumbnailGrid = document.querySelector("#thumbnail-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#lightbox-close");
const prevBtn = document.querySelector("#lightbox-prev");
const nextBtn = document.querySelector("#lightbox-next");

// STEP 2: Build an array of the image sources so you can navigate by index.
// Hint: grab all elements with class "thumb" and map them to their `src`.
let imageSources = Array.from(document.querySelectorAll(".thumb")).map((thumb) => thumb.src); // TODO
let currentIndex = 0;

// STEP 3: Write openLightbox(index):
//   - set currentIndex to the given index
//   - set lightboxImage's src to imageSources[currentIndex]
//   - remove the `hidden` attribute from #lightbox
function openLightbox(index) {
  // TODO
  currentIndex = index; 
  lightboxImage.src = imageSources[currentIndex];
  lightbox.removeAttribute("hidden");
}

// STEP 4: Write closeLightbox() — just re-add the `hidden` attribute
function closeLightbox() {
  // TODO
  lightbox.setAttribute("hidden", "true");
}

// STEP 5: Write showNext() and showPrev(). Be careful with the edges —
// use the modulo operator (%) so it wraps around instead of erroring
// when you go past the first/last image.
function showNext() {
  // TODO
  currentIndex = (currentIndex + 1) % imageSources.length;
  lightboxImage.src = imageSources[currentIndex];
}

function showPrev() {
  // TODO
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  lightboxImage.src = imageSources[currentIndex];
}

// STEP 6: Use event delegation — one click listener on thumbnailGrid.
// When a click's target is an <img>, figure out its index in
// imageSources and call openLightbox() with it.
// TODO: thumbnailGrid.addEventListener("click", (event) => { ... });

// STEP 7: Wire up the close/prev/next buttons
// TODO: closeBtn.addEventListener("click", closeLightbox);
// TODO: prevBtn.addEventListener("click", showPrev);
// TODO: nextBtn.addEventListener("click", showNext);

// STEP 8: Add keyboard support on the whole document:
//   - "Escape" closes the lightbox
//   - "ArrowLeft" / "ArrowRight" navigate — but only when it's open!
// TODO: document.addEventListener("keydown", (event) => { ... });


/* ---------- STRETCH GOALS ----------
   - Add a caption under the lightbox image (use the img's alt text)
   - Add a fade transition between images
   - Support closing by clicking the dark background (but not the image itself)
------------------------------------- */
