import db from "../database/database-manager.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export function userLogin(req, res) {
    const { email, password } = req.body;
    const user = db.getUserByEmail(email);
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials.' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ message: 'Invalid credentials.' });
    }
    const accessToken = generateAccessToken(user);
    res.status(201).json({ token: accessToken });
}

export function userRegister(req, res) {
    const { username, email, password } = req.body;
    let user = db.getUserByUsername(username);
    if (user) {
        return res.status(400).json({ message: 'User with this username already exists.' });
    }
    user = db.getUserByEmail(email);
    if (user) {
        return res.status(400).json({ message: 'User with this email already exists.' });
    }
    const reg =/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (!reg.test(email)) {
        return res.status(400).json({ message: 'Invalid email.' });
    }
    if (!username) {
        return res.status(400).json({ message: 'Username is required!' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    if (password.length > 30) {
        return res.status(400).json({ message: 'Password can not be more than 30 characters' });
    }
    if (username.length > 20) {
        return res.status(400).json({ message: 'Username can not be more than 20 characters' });
    }
    if (email.length > 100) {
        return res.status(400).json({ message: 'Email can not be more than 100 characters' });
    }
    let hash = bcrypt.hashSync(password, 10);
    const id = db.addUser(username, email, hash).lastInsertRowid;

    const accessToken = generateAccessToken({ id, username, email });
    res.status(201).json({ token: accessToken });
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '4h' });
}

export function getSuggestionUsers(req,res){
    const activeUser = req.user.username;
    const limit = req.query.limit;
    console.log(limit)
    let users;
    //if there is a limit we assume is a suggestion limit and get random suggestions
    if (limit){
        users = db.getSuggestions(activeUser);
    } else{
        users = db.getAllUsers(activeUser);
    }
    console.log(users);
    res.status(200).json(users);
}
export function getUserProfile(req, res) {
    const user = req.user;
    const userId = req.params.id;
    let username;
    let likedPosts;
    let createdPosts;
    if (!userId){
        likedPosts = db.getPostLikesByUserId(user.id);
        createdPosts = db.getRecipesByCreatorId(user.id);
        username = req.user.username;
    } else{
        likedPosts = db.getPostLikesByUserId(userId);
        createdPosts = db.getRecipesByCreatorId(userId);
        username = db.getUserById(userId).username;
    }
    console.log(user.id,userId)
    res.status(200).json({likedPosts, createdPosts,username});
}