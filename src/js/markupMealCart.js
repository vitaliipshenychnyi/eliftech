import { mealArr } from "./meals-arr";

export function createCart() {
  return mealArr
    .map(el => `<li>
  <img src="" alt="" />
  <p class="name__meal">${el.name}</p>
  <p class="price__meal">${el.price}</p>
  <button class="btn__meal" type="button">add to Cart</button>
</li>`)
    .join('');
}