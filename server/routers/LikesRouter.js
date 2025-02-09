import express from "express";
import {getPostLikes, likePost, removeLikeOnPost} from "../controllers/LikesController.js";
import verifyToken from "../middleware/VerifyToken.js";
const router = express.Router();

router.get("/:id",verifyToken,getPostLikes)
router.post("/:id",verifyToken,likePost)
router.delete("/:id",verifyToken,removeLikeOnPost)
export default router;