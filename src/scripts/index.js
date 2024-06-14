/* Script Global */
import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";
import { themeChange, themeCheck } from "./theme.js";

function routine() {
  applyInputRangeStyle();
  renderCardItems(albumList);
  priceFilter(albumList);
  themeCheck();
}

routine();

function renderCardItems(albumList) {
  let albumCardList = document.querySelector(".album-list");
  albumCardList.innerHTML = null;

  albumList.forEach((element) => {
    albumCardList.append(createAlbumCard(element));
  });
}

function createAlbumCard(albumListItem) {
  // criando tags
  let card = document.createElement("li");
  let cover = document.createElement("img");
  let name = document.createElement("h3");
  let cardTop = document.createElement("div");
  let band = document.createElement("p");
  let genre = document.createElement("p");
  let cardBottom = document.createElement("div");
  let price = document.createElement("p");
  let buyButton = document.createElement("button");

  // organizando tags
  cardTop.append(band, genre);
  cardBottom.append(price, buyButton);
  card.append(cover, name, cardTop, cardBottom);

  // atribuindo classes
  card.classList.add("album-list__card");
  cardTop.classList.add("card-top");
  cardBottom.classList.add("card-bottom");
  buyButton.classList.add("buy-button");

  // atribuindo conteúdo
  cover.src = albumListItem.img;
  name.innerText = albumListItem.title;
  band.innerText = albumListItem.band;
  genre.innerText = albumListItem.genre;
  price.innerText = `R$ ${albumListItem.price}`;
  buyButton.innerText = "Comprar";

  return card;
}

let themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", (e) => {
  e.preventDefault();
  themeChange();
});

function priceFilter(list) {
  let price = document.querySelector("#price");
  let rangeInput = document.querySelector("#range-input");

  rangeInput.addEventListener("input", () => {
    price.innerText = `R$ ${rangeInput.value}`;
    let albumsInPriceRange = list.filter((element) => parseInt(element.price) <= rangeInput.value);

    return renderCardItems(albumsInPriceRange);
  });
}
