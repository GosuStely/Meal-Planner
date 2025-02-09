import express from "express";
import {getPostLikes, likePost} from "../controllers/LikesController.js";
import verifyToken from "../middleware/VerifyToken.js";
const router = express.Router();

router.get("/:id",getPostLikes)
router.post("/:id",verifyToken,likePost)
export default router;