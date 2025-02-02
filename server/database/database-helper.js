// User queries
export const createUserTableQuery = `
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL
);
`;
export const insertUserQuery = `
    INSERT INTO user (username, email, password)
    VALUES (?, ?, ?);
`;
export const truncateUserQuery = `
    DELETE FROM user
`;
export const getUserByUsernameQuery = `
    SELECT * FROM user WHERE username = ?
`;
export const getUserByEmailQuery =`
    SELECT * FROM user WHERE email = ?;
`
// Recipe queries
export const createRecipeTableQuery = `
CREATE TABLE IF NOT EXISTS recipe (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(30) NOT NULL,
    instructions TEXT NOT NULL,
    category VARCHAR(30) NOT NULL,
    meal_type VARCHAR(20) NOT NULL,
    cuisine VARCHAR(20) NOT NULL,
    diet VARCHAR(20) NOT NULL,
    ingredients TEXT NOT NULL,
    creator INTEGER NOT NULL,
    FOREIGN KEY (creator) REFERENCES user(id) ON DELETE CASCADE
);
`;
export const insertRecipeQuery = `
    INSERT INTO recipe (title, instructions, category, meal_type, cuisine, diet, ingredients, creator)
    VALUES(?, ?, ?, ?, ?, ?, ?,?)
`;
export const truncateRecipeQuery = `
    DELETE FROM recipe
`;
export const getAllRecipeQuery =`
    SELECT * FROM recipe;
`;
export const getRecipesByCreatorIdQuery =`
    SELECT * FROM recipe WHERE creator = ?;
`
//RecipeLikes queries
export const createLikeTableQuery = `
CREATE TABLE IF NOT EXISTS recipe_like(
    user_id INTEGER NOT NULL,
    recipe_id INTEGER NOT NULL,
    like_time DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE
);
`;
export const insertLike = `
    INSERT INTO recipe_like (user_id, recipe_id, like_time)
    VALUES(?, ?, ?)
`;
export const dropLikeTable = `
    DROP TABLE IF EXISTS recipe_like
`;
export default {
    createUserTableQuery,
    createRecipeTableQuery,
    createLikeTableQuery,
    truncateUserQuery,
    truncateRecipeQuery,
    dropLikeTable,
    insertLike,
    insertUserQuery,
    insertRecipeQuery,
    getAllRecipeQuery,
    getUserByUsernameQuery,
    getUserByEmailQuery,
    getRecipesByCreatorIdQuery
}