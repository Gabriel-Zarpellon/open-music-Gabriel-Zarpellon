/* Script Global */
import {applyInputRangeStyle} from "./inputRange.js";
import {albumList} from "./albumsDatabase.js";

function routine(){
    applyInputRangeStyle();
}

routine();

function createAlbumCard(albumList){
    // criando tags
    let card = document.createElement('li');
    let cover = document.createElement('img');
    let name = document.createElement('h3');
    let cardTop = document.createElement('div');
    let band = document.createElement('p');
    let genre = document.createElement('p');
    let cardBottom = document.createElement('div');
    let price = document.createElement('p');
    let buyButton = document.createElement('button');

    // organizando tags
    cardTop.append(band, genre);
    cardBottom.append(price, buyButton);
    card.append(cover, name, cardTop, cardBottom);

    // atribuindo classes
    


}
