import db from '../database/database-manager.js';

export function getAllRecipes(req, res) {
    const recipes = db.getAllRecipes();
    if (!recipes) {
        return res.status(404).json({message: 'No recipes found.'});
    }
    return res.status(200).json(recipes);
}
export function getRecipesMadeByUser(req, res) {
    const userId = req.params.id;
    const recipes = db.getRecipesByCreatorId(userId);
    res.status(200).json(recipes);
}
export function createRecipe(req, res) {
    const recipe = req.body;
    recipe.creator = req.user.id
    if (!recipe) {
        return res.status(400).json({message: 'Recipe can not be empty.'});
    }
    if (!isRecipeValid(recipe)) {
        return res.status(400).json({message: 'Recipe should include all properties. Please select all options.'});
    }
    if (db.addRecipe(recipe)) {
        return res.status(201).json({message: 'Recipe created.'});
    }
    return res.status(501).json({message: 'Not Implemented'});
}

function isRecipeValid(recipe) {
    if (!recipe.title ||
        !recipe.instructions ||
        !recipe.category ||
        !recipe.meal_type ||
        !recipe.cuisine ||
        !recipe.diet ||
        !recipe.ingredients ||
        !recipe.creator) {
        return false;
    }
    return true;
}