import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const MealInstruction = () => {
  const [item, setItem] = useState("");
  const { MealId } = useParams();
  const navigate = useNavigate();

  if (MealId != "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }
  return (
    <>
      {!item ? (
        ""
      ) : (
        <>
          <div className="content-container">
            <div className="content-text">
              <h2>Welcome to Our Instruction Page..</h2>
            </div>
            <div className="clickButton">
              <button onClick={() => navigate("/")}>Go To Home</button>
            </div>
            <div className="content">
              <img src={item.strMealThumb} alt="" />
              <div className="inner-content">
                <h1>{item.strMeal}</h1>
                <h2>{item.strArea}Food</h2>
                <h3>Category:{item.strCategory}</h3>
              </div>
            </div>
            <div className="meal-details">
              <div className="meal-Ingredients">
                <h2>Ingredients</h2>
                <h4>
                  {item.strIngredient1}:{item.strMeasure1}
                </h4>
                <h4>
                  {item.strIngredient2}:{item.strMeasure2}
                </h4>
                <h4>
                  {item.strIngredient3}:{item.strMeasure3}
                </h4>
                <h4>
                  {item.strIngredient4}:{item.strMeasure4}
                </h4>
                <h4>
                  {item.strIngredient5}:{item.strMeasure5}
                </h4>
                <h4>
                  {item.strIngredient6}:{item.strMeasure6}
                </h4>
                <h4>
                  {item.strIngredient7}:{item.strMeasure7}
                </h4>
                <h4>
                  {item.strIngredient8}:{item.strMeasure8}
                </h4>
                <h4>
                  {item.strIngredient9}:{item.strMeasure9}
                </h4>
              </div>
              <div className="meal-instruction">
                <h2>Instruction</h2>
                <h4>{item.strInstructions}</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MealInstruction;
