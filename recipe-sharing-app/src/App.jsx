import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div>
        <AddRecipeForm />
        <RecipeList />
        <SearchBar/>
        <RecipeList/>
        <RecipeDetails/>
        <FavoritesList/>
        <RecommendationsList/>
        <Routes>
        <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
