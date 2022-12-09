import React, { useState, useEffect } from "react";
import MealIndex from "./MealIndex";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Meal = () => {
  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setRecipies(data.meals);
      });
  }, [url]);

  useEffect(
    (data) => {
      if (search === null) {
        return data;
      } else {
        return searchRecipes();
      }
    },
    [search]
  );

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipes = (e) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="container">
        <div className="logo-wrapper">
          <img
            src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
            alt=""
          />
          <h2>ABC Restaurant</h2>
          <div className="meal-search-box">
            <input
              type="search"
              className="meal-search-content"
              id="search-item"
              placeholder="Search Your Food Here..."
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchRecipes}
            />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="text-field">
          <h3>Welcome To Our Website</h3>
        </div>

        <div className="meal-search-result">
          <h2 className="search-title">Food Menu</h2>
          <div className="meal-search-recipe">
            {recipes ? (
              recipes.map((recipe) => {
                return (
                  <div className="meal-item" key={recipe.idMeal}>
                    <div className="meal-image">
                      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <div className="meal-name">
                      <h3>{recipe.strMeal}</h3>
                      <button
                        className="meal-recipe-btn"
                        href={"https://www.themealdb.com/meal/" + recipe.idMeal}
                        target="_blank"
                        key={recipe.idMeal}
                        onClick={() => {
                          navigate(`/${recipe.idMeal}`);
                        }}
                      >
                        Get Meal details
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3 className="noItems">Sorry,No Any Items Found!!😞</h3>
            )}
          </div>
        </div>
        <div className="indexContainer">
          <MealIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
