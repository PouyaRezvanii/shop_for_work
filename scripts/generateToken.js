const { generateToken } = require('../src/utils/jwtUtils');

const clientId = 'client123';
const token = generateToken(clientId);

console.log('Generated Token:', token);