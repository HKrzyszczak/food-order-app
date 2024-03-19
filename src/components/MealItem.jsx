export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
          <p classNeme="meal-item-action">
            <button>Add to Cart</button>
          </p>
        </div>
      </article>
    </li>
  );
}
