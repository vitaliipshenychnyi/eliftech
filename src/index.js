import refs from './js/refs';
import { createShop } from './js/markupShop';
import { createCart } from './js/markupMealCart';

refs.shops__listEl.insertAdjacentHTML('beforeend', createShop());
refs.mealsCart__listEl.insertAdjacentHTML('beforeend', createCart());
