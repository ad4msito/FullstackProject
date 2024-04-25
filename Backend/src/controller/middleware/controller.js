const jwt = require('jsonwebtoken');
require('dotenv').config();
const session = require('express-session');

function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.SECRET_KEY, (err, payload)  => {
        if (err) return res.sendStatus(403);
        req.userId = payload.id;
        req.email = payload.email;
        next();
    });
}
module.exports = authenticateToken
