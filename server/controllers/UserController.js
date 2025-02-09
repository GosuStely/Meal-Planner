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
    const { lastInsertRowid } = db.addUser(username, email, hash);

    const accessToken = generateAccessToken({ lastInsertRowid, username, email, hash });
    res.status(201).json({ token: accessToken });
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '4h' });
}