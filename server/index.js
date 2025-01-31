import express from "express";
import requestLogger from "./middleware/RequestLogger.js";
import LikesRouter from "./routers/LikesRouter.js";
import RecipeRouter from "./routers/RecipeRouter.js";
import UserRouter from "./routers/UserRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", requestLogger);
app.use("/api/likes", LikesRouter);
app.use("/api/recipes", RecipeRouter);
app.use("/api/users", UserRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));