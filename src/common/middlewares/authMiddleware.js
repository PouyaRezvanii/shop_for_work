const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract Bearer token

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.client = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};
