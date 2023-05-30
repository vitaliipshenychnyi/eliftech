import { shopArr } from './shops-arr';

export function createShop() {
  return shopArr
    .map(el => `<li><button type="button">${el}</button></li>`)
    .join('');
}
