import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const section = getElement(".section-center");
  const title = getElement(".title");
  if (!drinks) {
      hideLoading()
    title.textContent = "Sorry, no drinks match your search";
    section.innerHTML = null;
    return;
  }
    const newDrinks = drinks
      .map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>`
      })
      .join('');
    hideLoading()
    title.textContent = '';
    section.innerHTML = newDrinks;
    console.log(title);
    return section;
  
};

export default displayDrinks;
