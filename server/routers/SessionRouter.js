import express from "express";
import {userLogin} from "../controllers/UserController.js";

const router = express.Router();

router.post("/", userLogin);
export default router;