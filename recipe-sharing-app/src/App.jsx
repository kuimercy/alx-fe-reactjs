import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <Router>
      <div>
        <AddRecipeForm />
        <RecipeList />
        <Routes>
        <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
