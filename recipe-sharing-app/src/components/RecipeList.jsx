import useRecipeStore from "../recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          {isFavorite(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>
              Remove from Favorites
            </button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>
              Add to Favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
