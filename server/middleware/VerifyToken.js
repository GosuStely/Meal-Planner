import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send('No token provided');
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, user) =>{
        if (err) {
            return res.status(403).send("You have no access.");
        }
        req.user = user;
        next();
    })
}
export default verifyToken;