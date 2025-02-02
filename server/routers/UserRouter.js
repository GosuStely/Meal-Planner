import express from "express";
import {userRegister} from "../controllers/UserController.js";
import verifyToken from "../middleware/VerifyToken.js";
import {getRecipesMadeByUser} from "../controllers/RecipeController.js";

const router = express.Router();

router.post("/", userRegister);
router.get("/:id/recipes",verifyToken,getRecipesMadeByUser);
export default router;