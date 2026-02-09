import React, { useState } from "react";

function RecipeBook() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addRecipe = (e) => {
    e.preventDefault();

    if (!name || !description) return;

    const newRecipe = {
      id: Date.now(),
      name,
      description,
    };

    setRecipes([...recipes, newRecipe]);
    setName("");
    setDescription("");
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto" }}>
      <h2>🍽️ Recipe Book</h2>

      {}
      <form onSubmit={addRecipe}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Recipe Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Recipe</button>
      </form>

      <hr />

      {}
      <h3>All Recipes</h3>

      {recipes.length === 0 && <p>No recipes added yet.</p>}

      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h4>{recipe.name}</h4>
          <p>{recipe.description}</p>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default RecipeBook;
