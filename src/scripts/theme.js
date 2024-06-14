let darkMode = false;

export function themeChange() {
  let body = document.body;

  let header = document.querySelector(".header");
  let themeButton = document.querySelector(".theme-button");

  let genreSection = document.querySelector(".genre-section");
  let genreLabel = document.querySelectorAll(".genre-label");
  let genreInput = document.querySelectorAll(".genre-input");

  let priceFilterSection = document.querySelector(".price-filter-section__top");

  let albumSection = document.querySelector(".album-section");
 
  darkMode = !darkMode;

  body.classList.toggle("body--dark");

  header.classList.toggle("header--dark");
  themeButton.classList.toggle("theme-button--dark");

  genreSection.classList.toggle("genre-section--dark");
  genreLabel.forEach(element => element.classList.toggle("genre-label--dark"));
  genreInput.forEach(element => element.classList.toggle("genre-input--dark"));

  priceFilterSection.classList.toggle("price-filter-section__top--dark");

  albumSection.classList.toggle("album-section--dark");
 
  localStorage.setItem("@openMusic:theme", JSON.stringify(darkMode));
}

export function themeCheck() {
  darkMode = JSON.parse(localStorage.getItem("@openMusic:theme"));

  if (darkMode) {
    darkMode = !darkMode;
    themeChange();
  }
}
