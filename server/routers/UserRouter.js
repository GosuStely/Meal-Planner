import express from "express";
import {getSuggestionUsers, getUserProfile, userRegister} from "../controllers/UserController.js";
import verifyToken from "../middleware/VerifyToken.js";
import {getRecipesMadeByUser} from "../controllers/RecipeController.js";

const router = express.Router();

router.post("/", userRegister);
router.get("/:id/recipes",verifyToken,getRecipesMadeByUser);
router.get("/", verifyToken,getSuggestionUsers);
router.get("/:id", verifyToken,getUserProfile);
export default router;