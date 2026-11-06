const STORAGE_KEY = "socalSurfCheck.favorites";

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    // Storage can be blocked (private mode, full); the page still works without saving.
  }
}

let favorites = loadFavorites();
const statusEl = document.getElementById("fav-status");

function render() {
  document.querySelectorAll(".spot").forEach(function (card) {
    const id = card.dataset.spot;
    const name = card.querySelector("h3").textContent;
    const button = card.querySelector(".fav-btn");
    const isFavorite = favorites.includes(id);

    card.classList.toggle("is-favorite", isFavorite);
    button.setAttribute("aria-pressed", String(isFavorite));
    button.setAttribute("aria-label", (isFavorite ? "Remove " : "Save ") + name + (isFavorite ? " from favorites" : " as a favorite"));
    button.textContent = isFavorite ? "★" : "☆";
  });

  if (favorites.length === 0) {
    statusEl.textContent = "Tap the ☆ on a spot to save it as a favorite.";
  } else {
    const names = favorites.map(function (id) {
      return document.querySelector('.spot[data-spot="' + id + '"] h3').textContent;
    });
    statusEl.textContent = "★ Your favorites: " + names.join(", ");
  }
}

// Drop any saved ids that no longer match a spot on the page.
favorites = favorites.filter(function (id) {
  return document.querySelector('.spot[data-spot="' + id + '"]');
});

document.querySelectorAll(".fav-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    const id = button.closest(".spot").dataset.spot;
    if (favorites.includes(id)) {
      favorites = favorites.filter(function (item) { return item !== id; });
    } else {
      favorites.push(id);
    }
    saveFavorites(favorites);
    render();
  });
});

render();
