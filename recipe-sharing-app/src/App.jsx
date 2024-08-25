import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <div>
        <AddRecipeForm />
        <RecipeList />
        <SearchBar/>
        <RecipeList/>
        <RecipeDetails/>
        <Routes>
        <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
