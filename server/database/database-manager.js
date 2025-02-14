import Database from "better-sqlite3";
import queries, {getPostLikesByPostIdQuery, getRecipeByIdQuery, getSuggestionsQuery} from "./database-helper.js";

let db;

function createDatabase() {
    if (!db) {
        try {
            db = new Database("./database/db.db");
            db.exec(queries.createUserTableQuery);
            db.exec(queries.createRecipeTableQuery);
            db.exec(queries.createLikeTableQuery);
            console.log("Database created successfully.");
        } catch (e) {
            console.log("Error with initializing db!", e);
        }
    }
}

createDatabase();

export function addRecipe({title, instructions, category, meal_type, cuisine, diet, ingredients, creator}) {
    console.log(title, instructions, category, meal_type, cuisine, diet, ingredients, creator);
    try {
        const res = db.prepare(queries.insertRecipeQuery);
        return res.run(title, instructions, category, meal_type, cuisine, diet, ingredients, creator);
    } catch (e) {
        console.log(e);
    }
}

export function addUser(username, email, password) {
    try {
        const res = db.prepare(queries.insertUserQuery);
        return res.run(username, email, password);
    } catch (e) {
        console.log(e);
    }
}

export function getAllRecipes() {
    try {
        return db.prepare(queries.getAllRecipeQuery).all();
    } catch (e) {
        console.log(e)
    }
}

export function getUserByUsername(username) {
    try {
        const res = db.prepare(queries.getUserByUsernameQuery).bind(username);
        return res.get();
    } catch (e) {
        console.log(e);
    }
}

export function getUserByEmail(email) {
    try {
        const res = db.prepare(queries.getUserByEmailQuery).bind(email);
        return res.get();
    } catch (e) {
        console.log(e);
    }
}

export function getRecipesByCreatorId(id) {
    try {
        const res = db.prepare(queries.getRecipesByCreatorIdQuery).bind(id);
        return res.all();
    } catch (e) {
        console.log(e);
    }
}

export function getPostLikesByPostId(id) {
    try {
        const res = db.prepare(queries.getPostLikesByPostIdQuery).bind(id);
        return res.all();
    } catch (e) {
        console.log(e);
    }
}

export function insertPostLike(user_id, recipe_id, like_time) {
    try {
        const res = db.prepare(queries.insertLike);
        return res.run(user_id, recipe_id, like_time);
    } catch (e) {
        console.log(e);
    }
}
export function getRecipeById(id){
    try{
        const res = db.prepare(queries.getRecipeByIdQuery).bind(id);
        return res.get()
    }catch(e){
        console.log(e)
    }
}
export function removeLikeOnPost(userId, postId){
    try{
        const res = db.prepare(queries.removeLikeOnPostQuery);
        return res.run(userId, postId)
    } catch (e){
        console.log(e)
    }
}
export function getSuggestions(activeUser){
    try{
        const res = db.prepare(queries.getSuggestionsQuery).bind(activeUser);
        return res.all();
    }catch(e){
        console.log(e)
    }
}
export function getPostLikesByUserId(id){
    try{
        const res = db.prepare(queries.getPostLikesByUserIdQuery).bind(id);
        return res.all();
    }catch(e){
        console.log(e)
    }
}

export default {
    addRecipe,
    addUser,
    getAllRecipes,
    getUserByUsername,
    getUserByEmail,
    getRecipesByCreatorId,
    getPostLikesByPostId,
    insertPostLike,
    getRecipeById,
    removeLikeOnPost,
    getSuggestions,
    getPostLikesByUserId

}