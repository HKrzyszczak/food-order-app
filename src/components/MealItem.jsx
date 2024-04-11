import { useContext } from 'react';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-action">
            <Button onClick={handleAddMealToCart}>Add to Cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
}
