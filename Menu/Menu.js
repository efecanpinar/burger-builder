import React, { useContext } from "react";
import { HamburgerContext } from "../../context/HamburgerContext";
import ingredients from "../../ingredients";
import "./Menu.css";

const Menu = () => {
  const {
    /* Context'te bulunan ihtiyacımız olan state */
    setSelectedIngredients,
    selectedIngredients,
    getCalculatedTotalPrice,
  } = useContext(HamburgerContext);

  const handleAddIngredient = (ingredient) => {
    const ingredients = [...selectedIngredients];

    const existIngredient = ingredients.find(
      (item) => item.name === ingredient.name
    );

    if (existIngredient) {
      existIngredient.count += 1;
    } else {
      ingredients.push({ ...ingredient, count: 1 });
    }

    setSelectedIngredients(ingredients);
  };

  const handleRemoveIngredient = (ingredient) => {
    let ingredients = [...selectedIngredients];

    const existIngredient = ingredients.find(
      (item) => item.name === ingredient.name
    );

    if (existIngredient) {
      if (existIngredient.count > 1) {
        existIngredient.count -= 1;
      } else {
        ingredients = ingredients.filter(
          (item) => item.name !== existIngredient.name
        );
      }
    }

    setSelectedIngredients(ingredients);
  };

  return (
    <div className="menu">
      <div className="content">
        <div className="current-price">
          Current Price: <span>$ {getCalculatedTotalPrice()}</span>
        </div>

        {Object.keys(ingredients).map((name) => (
          <div className="menu-items">
            <div className="product-name">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
            <div className="price"> $ {ingredients[name]} </div>
            <button
              className="menu-button decrement"
              decrement
              onClick={() =>
                handleRemoveIngredient({ name, price: ingredients[name] })
              }
            >
              -
            </button>
            <div className="qty">
              {selectedIngredients.find((item) => item.name === name)?.count ||
                0}
            </div>
            <button
              className="menu-button increment"
              increment
              onClick={() =>
                handleAddIngredient({ name, price: ingredients[name] })
              }
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
