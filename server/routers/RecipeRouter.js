import express from "express";
import {createRecipe, getAllRecipes} from "../controllers/RecipeController.js";
import verifyToken from "../middleware/VerifyToken.js";
const router = express.Router();

router.get("/",verifyToken, getAllRecipes);
router.post("/",verifyToken, createRecipe);

export default router;