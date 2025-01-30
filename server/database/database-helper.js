// User queries
export const createUserTableQuery = `
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);
`;
export const insertUserQuery = `
    INSERT INTO user (username, email, password)
    VALUES (?, ?, ?);
`;
export const dropUserQuery = `
    DROP TABLE IF EXISTS user
`;
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
    VALUES(?, ?, ?, ?, ?, ?, ?, ?)
`;
export const dropRecipeQuery = `
    DROP TABLE IF EXISTS recipe
`;
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
