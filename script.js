// ABOUT THIS FILE
// This is script.js. It is written in JavaScript, a programming language that
// makes web pages interactive. index.html holds the content and style.css
// holds the look; this file holds the BEHAVIOR. Its job here is to let you
// "favorite" surf spots with the star buttons and to remember your choices,
// even after you close the browser.
//
// Lines that start with two slashes (//) are comments. The browser ignores
// them. They are notes for humans.

// A "variable" is a named box that holds a value. "const" makes a variable
// that never gets reassigned. This one holds the name (called a "key") under
// which we save our favorites in localStorage, a small storage area inside
// your web browser that keeps data even after the page is closed. Think of
// it like a labeled drawer: the label is this key. The text in quotes is a
// "string", which is just text.
const STORAGE_KEY = "socalSurfCheck.favorites";

// A "function" is a reusable set of instructions with a name. Calling the
// function (writing its name with parentheses) runs those instructions.
// loadFavorites reads the saved list of favorites from localStorage.
function loadFavorites() {
  // "try/catch" means: try to run the code in the try part, and if something
  // goes wrong (an "error"), run the catch part instead of crashing the page.
  try {
    // getItem reads the saved text from the drawer. We saved the list as
    // JSON, a text format for storing data, so JSON.parse turns that text back
    // into a real list (called an "array").
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // Make sure what we got is really an array. If so, use it. If not (for
    // example, nothing was saved yet), use an empty array [] instead. The
    // "? :" is a short way to write an if/else choice.
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    // If anything fails, such as corrupted saved data, start with no favorites.
    return [];
  }
}

// saveFavorites writes the list of favorites into localStorage. The text
// between the parentheses ("favorites") is a "parameter": a value we hand to
// the function when we call it.
function saveFavorites(favorites) {
  try {
    // JSON.stringify turns the array into text, because localStorage can only
    // store text. setItem saves that text under our key.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    // Storage can be blocked (private mode, full); the page still works without saving.
  }
}

// Run loadFavorites right when the page opens and keep the result in a
// variable. "let" is like const, but allows the value to change later, which
// we need because the list grows and shrinks as you star and un-star spots.
let favorites = loadFavorites();
// Find the empty paragraph in index.html with the id "fav-status" and save it
// in a variable so we can change its text later. "document" stands for the
// whole page, and getElementById finds the one element with that id.
const statusEl = document.getElementById("fav-status");

// render updates what you SEE on the page so it matches the favorites list:
// star icons, card outlines, and the status sentence.
function render() {
  // querySelectorAll finds ALL elements matching a CSS-style selector.
  // ".spot" finds every surf-spot card. forEach then runs the instructions
  // inside "function (card) { ... }" once for each card, with "card" standing
  // for the card currently being handled.
  document.querySelectorAll(".spot").forEach(function (card) {
    // card.dataset.spot reads the data-spot attribute from the card's HTML,
    // such as "newport-beach". That is the spot's unique ID.
    const id = card.dataset.spot;
    // Find the <h3> inside this card and get its text, such as "Newport
    // Beach". textContent is the plain text inside an element.
    const name = card.querySelector("h3").textContent;
    // Find this card's star button.
    const button = card.querySelector(".fav-btn");
    // .includes checks whether the favorites list contains this spot's ID.
    // The result is true or false (a "boolean").
    const isFavorite = favorites.includes(id);

    // classList.toggle("is-favorite", isFavorite) adds the CSS class
    // "is-favorite" to the card if isFavorite is true, and removes it if
    // false. The CSS file gives cards with that class an aqua outline.
    card.classList.toggle("is-favorite", isFavorite);
    // Update the button's attributes so screen readers know if it is
    // pressed. HTML attributes are always text, so String() converts true or
    // false into the text "true" or "false".
    button.setAttribute("aria-pressed", String(isFavorite));
    // Set the button's spoken label, such as "Save Blackies as a favorite" or
    // "Remove Blackies from favorites". The + signs join pieces of text
    // together.
    button.setAttribute("aria-label", (isFavorite ? "Remove " : "Save ") + name + (isFavorite ? " from favorites" : " as a favorite"));
    // Show a filled star if it is a favorite, an empty star if not.
    button.textContent = isFavorite ? "★" : "☆";
  });

  // An "if" statement runs code only when a condition is true.
  // .length is how many items are in the list, so 0 means no favorites.
  if (favorites.length === 0) {
    // Show a hint telling the visitor what to do.
    statusEl.textContent = "Tap the ☆ on a spot to save it as a favorite.";
  } else {
    // Otherwise, build a list of the favorite spots' names. .map goes through
    // the favorites list and turns each ID into that spot's display name.
    const names = favorites.map(function (id) {
      // This selector finds the card whose data-spot matches the ID, then
      // gets the text of its <h3>.
      return document.querySelector('.spot[data-spot="' + id + '"] h3').textContent;
    });
    // names.join(", ") glues the names together with commas between them.
    statusEl.textContent = "★ Your favorites: " + names.join(", ");
  }
}

// CLEAN-UP STEP: .filter keeps only the items that pass a test. Here, we keep
// a saved ID only if a matching card still exists on the page. This prevents
// problems if a spot is ever removed from the website but is still saved in
// someone's browser.
// Drop any saved ids that no longer match a spot on the page.
favorites = favorites.filter(function (id) {
  return document.querySelector('.spot[data-spot="' + id + '"]');
});

// SET UP THE BUTTONS: go through every star button on the page and tell it
// what to do when clicked.
document.querySelectorAll(".fav-btn").forEach(function (button) {
  // addEventListener means "watch for something to happen to this element". An
  // "event" is something that happens on the page, like a click. When a click
  // happens, the function after "click" runs.
  button.addEventListener("click", function () {
    // .closest(".spot") climbs up from the button to the card that contains
    // it, so we can read that card's data-spot ID.
    const id = button.closest(".spot").dataset.spot;
    if (favorites.includes(id)) {
      // Already a favorite, so remove it. .filter keeps every item that is
      // NOT this ID ("!==" means "is not equal to").
      favorites = favorites.filter(function (item) { return item !== id; });
    } else {
      // Not a favorite yet, so add it. .push adds an item to the end of the
      // list.
      favorites.push(id);
    }
    // Save the updated list so it is remembered, then refresh the page's
    // appearance to match.
    saveFavorites(favorites);
    render();
  });
});

// Finally, run render once when the page first loads, so stars and outlines
// from your previous visit show up right away.
render();
