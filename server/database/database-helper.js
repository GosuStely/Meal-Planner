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
`;
export const getSuggestionsQuery =`
    SELECT username,id
     FROM user
     WHERE username IS NOT ?
     ORDER BY RANDOM()
      LIMIT 5;
`;
export const getAllUsersQuery=`
    SELECT username,id
     FROM user
     WHERE username IS NOT ?
`;
export const getUserByIdQuery =`
    SELECT username,email
    FROM user
    WHERE id = ?;
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
    VALUES(?, ?, ?, ?, ?, ?, ?,?)
`;
export const truncateRecipeQuery = `
    DELETE FROM recipe
`;
export const getAllRecipeQuery =`
    SELECT         
        r.id,
        r.title,
        r.instructions,
        r.category,
        r.meal_type,
        r.cuisine,
        r.diet,
        r.ingredients,
        u.username AS creator
    FROM 
        recipe AS r
    LEFT JOIN 
        user AS u 
    ON 
        r.creator = u.id
    ORDER BY 
        r.id DESC;
`;
export const getRecipesByCreatorIdQuery =`
    SELECT r.id,r.title,r.instructions,r.category,r.meal_type,r.cuisine,r.diet,r.ingredients,u.username AS creator
    FROM recipe AS r
    INNER JOIN user AS u
    ON u.id = r.creator
    WHERE creator = ?;
`;
export const getRecipeByIdQuery =`
   SELECT * FROM recipe WHERE id = ?;
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
export const getPostLikesByPostIdQuery =`
     SELECT u.username, r.like_time
     FROM recipe_like as r
     INNER JOIN user as u
     ON r.user_id = u.id
     WHERE r.recipe_id = ?;
`;
export const getPostLikesByUserIdQuery = `
     SELECT r.title,r.instructions,r.category,r.meal_type,r.cuisine,r.diet,r.ingredients,r.id,u.username AS creator
     FROM recipe_like as rl
     INNER JOIN recipe as r
     ON rl.recipe_id = r.id
     INNER JOIN user as u
     ON rl.user_id = u.id
     WHERE rl.user_id = ?;
`
export const removeLikeOnPostQuery =`

    DELETE FROM recipe_like
    WHERE user_id = ? AND recipe_id = ?;
`
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
    getRecipesByCreatorIdQuery,
    getPostLikesByPostIdQuery,
    getRecipeByIdQuery,
    removeLikeOnPostQuery,
    getSuggestionsQuery,
    getPostLikesByUserIdQuery,
    getUserByIdQuery,
    getAllUsersQuery
}