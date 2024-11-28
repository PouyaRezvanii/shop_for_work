const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.generateToken = (clientId) => {
    return jwt.sign({ clientId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};
