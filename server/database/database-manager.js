import Database from "better-sqlite3";
import { createUserTableQuery, createRecipeTableQuery, createLikeTableQuery } from "./database-helper.js";

let db;

function createDatabase() {
    if (!db) {
        try {
            db = new Database("./db.sqlite");
            db.exec(createUserTableQuery);
            db.exec(createRecipeTableQuery);
            db.exec(createLikeTableQuery);
        } catch (e) {
            console.log("Error with initializing db!", e);
        }
    }
}
createDatabase();